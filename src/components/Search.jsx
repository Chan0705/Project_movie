import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  //! - useState 초기값 설정 필요 : 초기값이 없어서 undefined 처리.
  //! 빈 배열 또는 객체로 초기화하는 것이 안전함
  const [searchTerm, setSearchTerm] = useState('');
  //! - 사용자가 입력한 검색어를 추적하려면 useState로 별도의 상태를 만들어야 함
  //!  "searchTerm"이라는 이름의 상자를 하나 만들고, 그 안에 사용자가 입력한 검색어를 저장
  //! 처음엔 빈 문자열 ''로 시작하고, 사용자가 글자를 입력하면 setSearchTerm으로 그 값을 변경

  const API_KEY = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate(); //* navigate 초기화

  //* api 호출
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=ko&page=1&api_key=${API_KEY}`
      )
      .then((response) => {
        setMovieSearch(response.data); // response.data.results로 반응 저장을 해도 됨
      })
      .catch((error) => {
        console.error('error', error);
      });
  }, ['searchTerm']);

  //* 사용자가 검색어를 입력했을 때 검색 결과 페이지로 이동
  //? searchTerm: 사용자가 입력한 검색어. 예: "apple" 또는 "React tutorial"
  //? `/search?q=${searchTerm}`: URL 경로를 동적으로 생성합니다.
  //? 예를 들어 searchTerm이 "apple"이면, 최종 URL은 /search?q=apple이 됩니다.
  //? navigate(...): React Router의 useNavigate() 훅으로 얻은 함수. 해당 경로로 페이지를 이동시킵니다.

  const handleSearch = (e) => {
    e.preventDefault(); // ✅ 이벤트 기본 동작 막기
    if (searchTerm.trim() !== '') {
      navigate(`/search?q=${searchTerm}`); // ✅ 검색어 기반으로 이동
    }
  };

  //! enter 키를 입력해도 검색이 돌아가도록
  //! input 태그 안에 onKeyDown 이벤트 처리 필요
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="m-1 p-1 flex gap-1">
      {/*  */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} //? enter 키로도 검색이 되도록 이벤트 처리
        className="bg-white text-black m-1 p-1 rounded border max-w-[200px] w-full"
        placeholder="🔍검색"
      ></input>
      {/* 사용자가 검색창에 글자를 입력할 때마다 searchTerm이라는 상자에 그 글자가 저장
       */}
      <div>
        {/*  */}
        <button
          onClick={handleSearch}
          type="submit"
          className="border m-1 p-1 rounded w-15 max-w-[100px] cursor-pointer font-bold text-black bg-white"
        >
          검색
        </button>
        {/*  */}
      </div>
    </div>
  );
};

export default Search;
