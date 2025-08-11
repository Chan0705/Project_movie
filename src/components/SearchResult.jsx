import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

const SearchResult = () => {
  const [isSearchResult, setIsSearchResult] = useState([]); //! 초기 상태가 배열이어야 렌더링
  const location = useLocation(); //* URL에서 검색어 확인
  const API_KEY = import.meta.env.VITE_API_KEY;

  //! 쿼리 파라미터에서 검색어 추출
  const query = new URLSearchParams(location.search);
  const keyword = query.get('q'); //* URL에서 검색어 꺼내기
  //* keyword = 영화명

  useEffect(() => {
    if (!keyword) return; //* keyword가 !(false)일시, return(검색 미실행)

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          keyword
        )}&include_adult=false&language=ko&page=1&api_key=${API_KEY}`
      )
      //? query=${keyword}: 검색어를 API에 전달
      //? encodeURIComponent(keyword): 한글이나 특수문자 깨지지 않게 안전하게 인코딩
      //? query=${encodeURIComponent(keyword)}: 검색어를 안전하게 API에 전달

      .then((response) => {
        setIsSearchResult(response.data.results); //! 받아온 영화 목록을 저장
      })
      .catch((error) => {
        console.error('error', error);
      });
  }, [keyword]);

  return (
    <div>
      <div>
        <div className="flex flex-col justify-center text-2xl font-bold items-center p-2 m-2 mb-3">
          <h1 className="text-violet-600">' {keyword} '</h1>에 대한 검색결과는
          다음과 같습니다.
        </div>
        {/*  map()으로 결과 렌더링 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isSearchResult.map((item) => (
            <div
              key={item.id}
              className="flex flex-col min-w-[200px] max-w-full m-1 p-1"
            >
              <div className="w-full rounded-2xl h-auto">
                <img
                  className="border rounded mb-2 justify-center object-cover aspect-[2/3] w-full"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt="포스터"
                />
              </div>

              <div className="border rounded overflow-hidden bg-white w-full min-w-[50px] min-h-[70px] font-bold justify-between items-start flex flex-col p-1 mb-2">
                <p className="font-bold text-start">🎥 {item.title}</p>
              </div>
              <div className="border rounded overflow-hidden bg-white min-w-[50px] min-h-[70px] font-bold justify-between flex flex-wrap items-center p-2 mb-2">
                <p className="mb-4">개봉일: {item.release_date}</p>
                <div className="flex justify-end gap-2 mt-2">
                  {/* <Link to="/MovieDetail/"> */}
                  <Link to={`/detail/${item.id}`}>
                    <button className="cursor-pointer min-w-[50px] max-w-[120px] sm:w-auto bg-amber-50 border rounded px-3 py-1 text-sm hover:bg-amber-100">
                      상세보기
                    </button>
                  </Link>
                  <button className="cursor-pointer min-w-[50px] max-w-[120px] sm:w-auto px-3 py-1 text-sm hover:bg-amber-100 bg-amber-50 border rounded">
                    예매하기
                  </button>
                </div>
              </div>

              {/* <div>{item.</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
