import React from 'react';
import { useState, useEffect } from 'react';

const useDebounce = () => {
  const [setSearchTimes, isSetSearchTimes] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer); //* 컴포넌트 이동 시 시간 초기화 위해 필수
    };
  }, [callback, delay]);
};

export default useDebounce;
