import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className=" bg-sky-100 rounded p-10">
      {/* 입력칸 */}
      <div className="flex flex-col items-center">
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded bg-white p-2 w-100"
            type="text"
            placeholder="이름"
          />
        </div>
        <div className="flex mb-2 justify-center items-center gap-2 w-[400px]">
          <input
            className="border rounded bg-white p-2 w-100"
            type="text"
            placeholder="아이디"
          />
          <button className="border rounded bg-white p-2 cursor-pointer whitespace-nowrap">
            중복확인
          </button>
        </div>
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded bg-white p-2 w-100"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded bg-white p-2 w-100"
            type="password"
            mb-2
            placeholder="비밀번호 재확인"
          />
        </div>
        <div className="flex mb-2 justify-center items-center">
          <input
            className="border rounded bg-white p-2 w-100"
            type="email"
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
        <button className="border rounded font-bold w-full bg-emerald-50 p-2 mt-10 cursor-pointer">
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
