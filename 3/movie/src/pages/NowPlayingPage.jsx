// pages/NowPlayingPage.jsx
import React from 'react';
import MoviesList from '../components/MoviesList';

const API_KEY = '4335deba7e19b1b7bd22e490af90b456';
const NOW_PLAYING_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;

const NowPlayingPage = () => {
  return <MoviesList title="현재 상영중인 영화" apiUrl={NOW_PLAYING_URL} />;
};

export default NowPlayingPage;
