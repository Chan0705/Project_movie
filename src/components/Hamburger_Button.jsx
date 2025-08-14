// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../zustand/authStore';

const HamburgerButton = ({ isOpen }) => {
  // 전역 상태에서 isLoggedIn과 logout 액션 가져오기
  // zustand를 통해 로그인/로그아웃 상태 관리
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const logout = useAuthStore((s) => s.logout);
  // const { isLoggedIn, logout } = useAuthStore(); //* 이렇게 헤도 동작은 하지만, 상기처럼 진행하는 것이 렌더링에 좋음

  return (
    // 메뉴 열림 상태일 때만 렌더링(부모가 props로 제어) > navVar
    isOpen && (
      <div className="bg-emerald-600 justify-center flex rounded absolute shadow-current w-[200px] h-[500px] top-20 items-center right-0">
        <div>
          <div className="flex justify-end flex-col items-end gap-2 w-full text-black">
            {/* 조건문 : isLoggedIn > 로그인일 때 */}
            {/* 로그인 여부에 따라 다른 버튼 세트 렌더링 */}
            {isLoggedIn ? (
              <>
                <Link to="/mypage">
                  <button className="border m-2 p-2 rounded w-30 max-w-[300px] cursor-pointer bg-white">
                    마이페이지
                  </button>
                </Link>
                <button
                  onClick={logout}
                  className="border m-2 p-2 rounded w-30 max-w-[300px] cursor-pointer bg-white"
                >
                  로그아웃
                </button>
              </>
            ) : (
              // isLoggedIn이 true이면 → 마이페이지 / 로그아웃
              // isLoggedIn이 false이면 → 로그인 / 회원가입
              <>
                <Link to="/login">
                  <button className="border m-2 p-2 rounded w-30 max-w-[300px] cursor-pointer bg-white">
                    로그인
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="border m-2 p-2 rounded w-30 max-w-[300px] cursor-pointer bg-white">
                    회원가입
                  </button>
                </Link>
              </>
            )}
            {/* 공통 메뉴는 조건문 밖에 둠 */}
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
