import MovieCard from './components/MovieCard';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
// import MovieDetail from './components/MovieDetail';
import Detail_filter from './components/Detail_filter';
import { useState, useEffect } from 'react';
// import React from 'react';
import axios from 'axios';
// import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
// import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Layout from './components/Outlet';
// import Search from './components/Search';
import Mypage from './components/Mypage';
import SearchResult from './components/SearchResult';
import PrivateRoute from './components/PrivateRoute';

function App() {
  //* movieListData.results.map((item) >> .json파일은 현재 객체, 그 안에서 results만 배열 데이터.
  //* 현재 상태에서 .results.map을 통해 배열만 뽑아내서 가능, 단 추후 page 분할 등에서 관리를 통해 useState가 편함

  const [movieList, setMovieList] = useState([]); //* useState 이용해서 API 변화 위함
  const API_KEY = import.meta.env.VITE_API_KEY;
  //* 첫 접속 시, 렌더링 되는것을 보여주기 위해 useEffect 사용
  //* 부모 컴포넌트에서 관리하는 것이 편함
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=ko&api_key=${API_KEY}`
      )
      .then((response) => {
        setMovieList(response.data.results); //* 상태에 영화 리스트 저장
      })
      .catch((error) => {
        console.error('error', error); //* 호출 에러 표출
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //* header / footer 유지 시, outlet을 이용하는 것이 좀 더 보편적인 방법
  return (
    <BrowserRouter>
      {/* 기존 main태그는 Layout = outlet 컴포넌트로 옮겨감 */}
      {/* App.jsx와 Outlet.jsx에 main태그 중복 시, 렌더링 오류로 UI 렌더링 불가 */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route index : 기본페이지를 어느걸로 설정할지 */}
          <Route index element={<MovieCard movieList={movieList} />} />
          <Route path="detail/:id" element={<Detail_filter />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="search" element={<SearchResult />}></Route>
          <Route
            path="/mypage"
            element={
              <PrivateRoute>
                <Mypage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
