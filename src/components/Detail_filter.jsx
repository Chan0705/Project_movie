//! Filter 사용해서 Movie 상세보기
import { useEffect, useState } from 'react';
import MovieDetailData from '../const/data/MovieDetailData.json';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  // alert(JSON.stringify(MovieDetailData));
  // console.log(MovieDetailData['id']);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams(); //* useParams를 통해 ID 불러오기
  // console.log(JSON); //* JSON 로딩 확인용
  // const User = () => {
  //   const params = useParams();
  //   const userId = params.id;
  //   const [movieId, setMovieId] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=ko&api_key=e9a6ff882a2ced4eb377ec80665094dc`
      )
      //* movie/movie_id >>> movie_id는 id 숫자가 들어갈 자리이기 때문에 ${}로 useParams에서 가져온 id를 지정해야됨
      //* ${}를 써야되기 때문에 ''에서 ``으로 변경 필수// 변경안하면 에러 발생
      .then((response) => {
        setMovieDetail(response.data); //* 상태에 영화 내용 저장
      })
      .catch((error) => {
        console.error('error', error); //* 호출 에러 표출
      });
  }, [id]); //* ID가 변경될 때 마다 새로 마운트(렌더링)

  // let data = MovieDetailData.find(
  //   (item) => String(item.belongs_to_collection.id) === String(id)
  // );
  // if (!data) data = MovieDetailData[0];

  return (
    <div className="flex">
      <div className="flex mt-1 p-1">
        <img
          className="rounded max-w-[700px]"
          src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
          alt="포스터"
        />
      </div>
      {/* 구분선 */}
      <div className="flex-col m-1 p-1">
        <div className="border rounded bg-white mb-1 p-2">
          <p className="font-bold mb-1 text-2xl">🎥{movieDetail.title}</p>
          <p className="font-bold p-1">{movieDetail.original_title}</p>
        </div>
        <div className="border rounded  bg-white mb-1 p-2 font-bold">
          상영시간 : {movieDetail.runtime}분
        </div>
        <div className="border rounded  bg-white mb-1 p-2 font-bold">
          개봉일 : {movieDetail.release_date}
        </div>
        <div className="border rounded  bg-white mb-1 p-2 font-bold">
          평점: ⭐ {movieDetail.vote_average}
        </div>
        <div className="border rounded bg-white p-2">
          <p className="font-bold mb-5 w-full text-2xl">시놉시스</p>
          {movieDetail.overview}
        </div>
      </div>
    </div>
  );
};

export default Detail;
