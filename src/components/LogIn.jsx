import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className=" bg-cyan-100 rounded p-30">
      <div className="font-bold text-2xl flex justify-center items-center w-[400px] mb-20 p-2">
        회원 로그인
      </div>
      <div className="flex flex-col w-[400px]">
        <input
          className="border rounded bg-white m-2 p-2"
          type="text"
          placeholder="아이디를 입력하세요"
        />
        <input
          className="border rounded bg-white m-2 p-2"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div className="flex flex-col m-2 w-[386px] gap-5">
        <button className="border rounded bg-white p-2 cursor-pointer">
          로그인
        </button>
      </div>
    </div>
  );
};

export default LogIn;
