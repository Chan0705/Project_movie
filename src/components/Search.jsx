import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [movieSearch, setMovieSearch] = useState();
  const API_KEY = import.meta.env.VITE_API_KEY;
  const options = { method: 'GET', headers: { accept: 'application/json' } };

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
  }, []);

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="m-1 p-1 flex gap-1">
      <input
        className="bg-white text-black m-1 p-1 rounded border max-w-[200px] w-full"
        placeholder="🔍검색"
      ></input>
      <div>
        <button
          onClick={handleSubmit}
          typeof="submit"
          className="border m-1 p-1 rounded w-15 max-w-[100px] cursor-pointer text-black bg-white"
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default Search;
