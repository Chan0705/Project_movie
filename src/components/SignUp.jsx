// import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate('');
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      userid: formData.get('id'),
      password: formData.get('pw'),
      email: formData.get('email'),
    };

    console.log(payload);

    // //! 모든 데이터가 존재하는지 확인해야함
    if (
      !payload?.name &&
      !payload.userid &&
      !payload?.password &&
      !payload?.email
    ) {
      return alert('모든 필드를 입력해주세요.');
    }

    // //! PW와 PW확인이 일치하는지 확인해야함
    if (payload.password !== formData.get('pw_confirm')) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    await axios
      .post('http://localhost:3000/signup', payload) //* 서버 api 호출 시에는 post 사용
      //! 2️⃣ GET vs POST 주의
      //! GET /signup → 서버에서 회원가입 페이지나 테스트 데이터를 주는 경우
      //! POST /signup → 회원가입 처리 (사용자 입력값 DB 저장) → 대부분 이 방식 사용
      .then((res) => {
        console.log('서버 응답', res);
      })
      .catch((err) => {
        console.error('error', err);
      });

    alert('회원가입이 완료되었습니다');
    navigate('/'); //* 회원가입 완료 시 home(/)으로 이동
  };

  return (
    <form onSubmit={handleOnSubmit} className=" bg-sky-100 rounded p-10">
      {/* 입력칸 */}
      <div className="flex flex-col items-center">
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded bg-white p-2 w-100"
            type="text"
            name="name"
            placeholder="이름"
          />
        </div>
        <div className="flex mb-2 justify-center items-center gap-2 w-[400px]">
          <input
            className="border rounded bg-white p-2 w-100"
            type="text"
            name="id"
            placeholder="아이디"
          />
          <button
            type="button"
            className="border rounded bg-white p-2 cursor-pointer whitespace-nowrap"
          >
            중복확인
          </button>
        </div>
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded bg-white p-2 w-100"
            type="password"
            name="pw"
            placeholder="비밀번호"
          />
        </div>
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded bg-white p-2 w-100"
            type="password"
            name="pw_confirm"
            placeholder="비밀번호 재확인"
          />
        </div>
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded bg-white p-2 w-100"
            type="email"
            name="email"
            placeholder="이메일"
          />
        </div>
        {/* 주석 */}
        {/* <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded p-2 w-100"
            type="date"
            placeholder="생년월일 8자리"
          />
        </div>
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded p-2 w-100"
            type="text"
            placeholder="'-'를 빼고 입력해주세요"
          />
        </div> */}
        {/* 통신사 인증 */}
        {/* <div className="flex justify-center w-[400px] gap-1">
          <button className="border rounded m-1 p-4 w-50 cursor-pointer">
            SKT
          </button>
          <button className="border rounded m-1 p-1 w-50 cursor-pointer">
            KT
          </button>
          <button className="border rounded m-1 p-1 w-50 cursor-pointer">
            LG U+
          </button>
          <button className="border rounded m-1 p-1 w-50 cursor-pointer">
            알뜰폰
          </button>
        </div> */}
        {/* 칸분리 */}
      </div>
      {/* 입력칸 */}
      {/* 버튼 */}
      <div className="flex m-2 justify-center gap-5">
        <button
          type="submit"
          className="border rounded font-bold w-full bg-emerald-50 p-2 mt-10 cursor-pointer"
        >
          회원가입
        </button>
      </div>
    </form>
  );
};

export default SignUp;
