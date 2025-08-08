import React from 'react';

const Search = () => {
  return (
    <div className="m-1 p-1 flex gap-5">
      <input
        className="bg-white text-black m-1 p-1 rounded border max-w-[200px] w-full"
        placeholder="검색"
      ></input>
    </div>
  );
};

export default Search;
