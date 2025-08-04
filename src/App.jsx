import MovieCard from './components/MovieCard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import MovieDetail from './components/MovieDetail';
import Detail_filter from './components/Detail_filter';
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

function App() {
  //* movieListData.results.map((item) >> .json파일은 현재 객체, 그 안에서 results만 배열 데이터.
  //* 현재 상태에서 .results.map을 통해 배열만 뽑아내서 가능, 단 추후 page 분할 등에서 관리를 통해 useState가 편함

  //* header / footer 유지 시, outlet을 이용하는 것이 좀 더 보편적인 방법

  const [movieList, setMovieList] = useState([]); //* useState 이용해서 API 변화 위함

  //* 첫 접속 시, 렌더링 되는것을 보여주기 위해 useEffect 사용
  //* 부모 컴포넌트에서 관리하는 것이 편함
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=e9a6ff882a2ced4eb377ec80665094dc'
      )
      .then((response) => {
        setMovieList(response.data.results); //* 상태에 영화 리스트 저장
      })
      .catch((error) => {
        console.error('error', error); //* 호출 에러 표출
      });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <header className="flex justify-start bg-indigo-900 text-white font-bold items-center h-20">
          <p className="m-1 p-1 text-lg">GIGABOX</p>
        </header>
        <Routes>
          <Route path="/" element={<MovieCard movieList={movieList} />} />
          {/* <Route path="/MovieDetail/" element={<MovieDetail />} /> */}
          <Route path="/detail/:id" element={<Detail_filter />} />
        </Routes>
        <footer className="flex justify-start bg-indigo-900  text-white font-bold items-center h-10">
          <p className="m-1 p-1 text-lg">㉿ GIGABOX</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
