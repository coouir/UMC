// pages/PopularMoviesPage.jsx
import React from 'react';
import MoviesList from '../components/MoviesList';

const API_KEY = '4335deba7e19b1b7bd22e490af90b456';
const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

const PopularMoviesPage = () => {
  return <MoviesList title="인기 있는 영화" apiUrl={POPULAR_URL} />;
};

export default PopularMoviesPage;
