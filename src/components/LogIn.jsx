import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../zustand/authStore';

const LogIn = () => {
  const [isLogin, setIsLogin] = useState(null);
  // ① 로컬 입력 상태: 인풋 박스 값 관리 > useState 사용
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  //! 전역 스토어에서 login 액션만 꺼내오기
  //* Zustand login 함수 가져오기
  //! (필요한 것만 선택해 가져오면 리렌더링이 덜 일어납니다)
  const login = useAuthStore((s) => s.login);
  // const { login } = useAuthStore(); // >> 이렇게 사용해도 작동은 함

  // 로그인 api 서버 연동
  const handleLogin = async (e) => {
    setIsLogin();
    e.preventDefault(); //* 없을 시, 계속 초기화되기 때문에 필수적으로 추가

    // payload로 db 내용 가공
    const payload = {
      userid: id,
      password: pw,
    };

    try {
      const res = await axios.post('http://localhost:3000/login', payload);
      console.log('서버 응답:', res.data);

      //* res.data.success > login 성공 조건
      //? login 함수를 통해 로그인 성공 시 → useAuthStore().login() 호출
      if (res.data.success) {
        setIsLogin(true);
        localStorage.setItem('token', res.data.token); // 토큰 저장
        login(res.data.token); // zustand를 이용해 홈페이지 전역 상태에 로그인 반영
        console.log('✅ 로그인 성공');
      } else {
        setIsLogin(false);
        console.log('❌ 로그인 실패');
      }
    } catch (err) {
      console.error('로그인 에러:', err);
      setIsLogin(false);
    }
  };

  useEffect(() => {
    if (isLogin === true) {
      alert('로그인에 성공하였습니다.');
      navigate('/'); //! try catch문에 넣는거보다 안정적 > try catch문에 넣을 시, 로그인 실패여도 이동함
    } else if (isLogin === false) {
      alert('로그인에 실패하였습니다'); //* 로그인 실패 알림창 출력
    }
  }, [isLogin, navigate]); //* navigate는 생략 가능

  return (
    <form onSubmit={handleLogin} className=" bg-cyan-100 rounded p-30">
      <div className="font-bold text-2xl flex justify-center items-center w-[400px] mb-20 p-2">
        회원 로그인
      </div>

      {/* 아이디/비번 입력값을 로컬 state로 관리 */}
      <div className="flex flex-col w-[400px]">
        <input
          className="border rounded bg-white m-2 p-2"
          type="text"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          className="border rounded bg-white m-2 p-2"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
      </div>
      {/* 제출 버튼 (form의 onSubmit이 실행됨) */}
      <div type="submit" className="flex flex-col m-2 w-[386px] gap-5">
        <button className="font-bold border rounded bg-amber-50 p-2 cursor-pointer">
          로그인
        </button>
      </div>
    </form>
  );
};

export default LogIn;
