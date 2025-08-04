// import { useState } from 'react';
import App from '../App.jsx';
// import movieListData from '../const/data/movieListData.json';
// import MovieDetail from './MovieDetail.jsx';
import Detail_filter from './Detail_filter.jsx';
import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect } from 'react';
//* 경로명 ./ ~ > 해당폴더 내에서 사용
//* ../ ~ > 해당 폴더 밖으로 나가서 경로를 뽑을 때 (상위폴더 등)

const MovieCard = ({ movieList }) => {
  //   //* 첫 접속 시, 렌더링 되는것을 보여주기 위해 useEffect 사용
  //   //* 부모 컴포넌트에서 관리하는 것이 편함
  //   useEffect(() => {
  //     axios
  //       .get(
  //         'https://api.themoviedb.org/3/movie/popular?api_key=e9a6ff882a2ced4eb377ec80665094dc'
  //       )
  //       .then((response) => {
  //         setMovieList(response.data.results); //* 상태에 영화 리스트 저장
  //       })
  //       .catch((error) => {
  //         console.error('error', error); //* 호출 에러 표출
  //       });
  //   }, []);

  //* useParams 사용
  //* useParams란?? => React에서 URL 경로에 있는 값을 꺼내는 도구.
  //* 상세보기 등 각 id에 해당하는 목록의 id를 조회해서 렌더링할 때 사용
  // const User = () => {
  //   const params = useParams();
  //   const userId = params.id;
  //   const [movieId, setMovieId] = useState([]);

  return (
    <div>
      <div>
        <p className="flex text-blue-900 text-[40px] font-bold justify-center items-center p-5">
          🎥 상영중인 영화
        </p>
      </div>

      <div className="m-1 p-1 flex justify-end">
        🔍 <input className="m-1 p-1 rounded border" placeholder="검색"></input>
      </div>

      <div className="flex justify-center items-center">
        <div className="rounded-2xl bg-cyan-100 grid grid-cols-4 m-1 p-1 gap-2">
          {/* api호출하였기 때문에 JSON대신 불러온 api 호출명으로 map 변경 */}
          {movieList.map((item) => (
            <div key={item.id} className="flex flex-col m-1 p-1">
              <div className="flex justify-center p-1">
                <img
                  className="border rounded mb-2 object-cover w-full max-w-[1000px] max-h-[600px]"
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt="포스터"
                />
              </div>

              <div className="border rounded bg-white flex font-bold mb-2">
                <p className="font-bold text-start m-1 p-1 pt-3px">
                  🎥 {item.title}
                </p>
                <button className="cursor-pointer">👍</button>
                <p className="p-2 m-2">{item.vote_count}</p>
              </div>

              <div className="border rounded  bg-white font-bold flex justify-around items-center p-2 mb-2 gap-20">
                <p className="text-start">개봉일 : {item.release_date}</p>
                <div>
                  {/* <Link to="/MovieDetail/"> */}
                  <Link to={`/detail/${item.id}`}>
                    <button className="cursor-pointer max-w-[90px] mb-2 w-full bg-amber-50 border rounded">
                      상세보기
                    </button>
                  </Link>
                  <button className="cursor-pointer max-w-[90px] w-full bg-amber-50 border rounded">
                    예매하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
