import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerButton from './Hamburger_Button';
import Search from './search';

const NavBar = () => {
  //* 햄부기 바
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
    console.log('test');
  };

  return (
    <div>
      <header className="fixed top-0 w-full flex gap-2 bg-emerald-600 text-white font-bold items-center h-20">
        <p className="m-2 p-2 text-lg">GIGABOX</p>
        {/* Home버튼 링크 div */}
        <Link to={'/'}>
          <button className="m-1 whitespace-nowrap cursor-pointer rounded border p-1">
            🏠 홈으로
          </button>
        </Link>

        {/* 검색 div */}
        <Search />

        {/* modal 햄버거 */}
        <div className="flex justify-end flex-1">
          <button onClick={handleOpen} className="cursor-pointer m-1 p-1">
            <img
              className="object-contain"
              src="public\icons8.png"
              alt="햄부기"
            />
          </button>
          <HamburgerButton isOpen={isOpen} onClose={handleOpen} />
        </div>
        {/* modal */}
        {/* 햄버거로 이동 */}
        {/* <div className="flex justify-end gap-2 w-full text-black">
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
        </div> */}
      </header>
    </div>
  );
};

export default NavBar;
