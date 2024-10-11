// components/MoviesList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #000;
  color: white;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 한 줄에 6개 영화 */
  gap: 20px;
`;

const MovieCard = styled.div`
  background-color: #222; /* 카드 배경 색상 */
  border-radius: 10px; /* 모서리 둥글게 */
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s; /* 박스 그림자 효과 추가 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* 그림자 추가 */
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7); /* 호버 시 그림자 효과 */
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 300px; /* 포스터 높이 */
  object-fit: cover;
  border-bottom: 2px solid #444; /* 포스터 아래에 선 추가 */
`;

const MovieTitle = styled.h3`
  padding: 10px;
  font-size: 15px; /* 제목 크기 조정 */
  color: #fff; /* 제목 색상 */
  transition: color 0.2s; /* 색상 변화 효과 */
  &:hover {
    color: #f0a500; /* 호버 시 색상 변경 */
  }
`;

const ReleaseDate = styled.p`
  padding: 0 10px 10px;
  font-size: 14px; /* 개봉일 폰트 크기 조정 */
  color: #bbb;
`;

const MoviesList = ({ title, apiUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(apiUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('영화 데이터를 가져오는 중 오류가 발생했습니다.', error);
      }
    };

    fetchMovies();
  }, [apiUrl]);

  return (
    <Container>
      <h1>{title}</h1>
      <MoviesGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <MoviePoster 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
            />
            <MovieTitle>{movie.title}</MovieTitle>
            <ReleaseDate>{movie.release_date}</ReleaseDate> {/* 개봉일 추가 */}
          </MovieCard>
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default MoviesList;
