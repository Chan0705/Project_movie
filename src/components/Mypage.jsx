import React from 'react';

const Mypage = () => {
  return (
    <div>
      <div className="m-1 p-50 w-full h-full text-center flex justify-around flex-col items-center">
        <button className="cursor-pointer border w-full min-w-[90px] bg-white rounded m-1 p-1">
          회원정보
        </button>
        <button className="cursor-pointer border bg-white rounded w-full m-1 p-1">
          내 정보 수정
        </button>
        <button className="cursor-pointer border bg-white rounded w-full m-1 p-1">
          북마크
        </button>
        <button className="cursor-pointer border bg-white rounded w-full m-1 p-1">
          내 예매 목록
        </button>
        <button className="cursor-pointer border bg-white rounded w-full m-1 p-1">
          회원탈퇴
        </button>
      </div>
    </div>
  );
};

export default Mypage;
