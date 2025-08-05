import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <header className="flex gap-5 bg-indigo-900 text-white font-bold items-center h-20">
        <p className="m-1 p-1 text-lg">GIGABOX</p>
        <Link to={'/'}>
          <button className="m-1 whitespace-nowrap cursor-pointer rounded border p-1">
            🏠 홈으로
          </button>
        </Link>
        <div className="flex justify-end gap-2 w-full text-black">
          <Link to={'/login'}>
            <button className="border m-2 p-2 rounded cursor-pointer bg-white">
              로그인
            </button>
          </Link>
          <Link to={'/signup'}>
            <button className="border m-2 p-2 rounded cursor-pointer bg-white">
              회원가입
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
