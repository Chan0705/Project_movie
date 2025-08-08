// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerButton = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="bg-emerald-600 flex rounded absolute shadow-current w-[200px] h-[500px] top-20 items-center right-0">
        <div>
          <div className="flex justify-end flex-col items-end gap-2 w-full text-black">
            <Link to={'/login'}>
              <button className="border m-2 p-2 rounded w-30 max-w-[300px] cursor-pointer bg-white">
                로그인
              </button>
            </Link>
            <Link to={'/signup'}>
              <button className="border m-2 p-2 rounded w-30 max-w-[300px] cursor-pointer bg-white">
                회원가입
              </button>
            </Link>{' '}
            <button className="border m-2 p-2 rounded w-30 max-w-[300px] cursor-pointer bg-white">
              FAQ
            </button>
            <button className="border m-2 p-2 rounded w-30 max-w-[300px] cursor-pointer bg-white">
              1:1 문의
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default HamburgerButton;
