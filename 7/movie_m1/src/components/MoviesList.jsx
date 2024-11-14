import React from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// API 호출 함수
const fetchMovies = async (apiUrl) => {
  const response = await axios.get(apiUrl);
  return response.data.results;
};

const Container = styled.div`
  background-color: #000;
  color: white;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

// 일반 MovieCard 스타일
const MovieCard = styled.div`
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 2px solid #444;
`;

const MovieTitle = styled.h3`
  padding: 10px;
  font-size: 15px;
  color: #fff;
  transition: color 0.2s;
  &:hover {
    color: #f0a500;
  }
`;

const ReleaseDate = styled.p`
  padding: 0 10px 10px;
  font-size: 14px;
  color: #bbb;
`;

// SkeletonCard 스타일
const SkeletonCard = styled.div`
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  animation: pulse 1.5s infinite ease-in-out;
  
  @keyframes pulse {
    0% {
      background-color: #333;
    }
    50% {
      background-color: #444;
    }
    100% {
      background-color: #333;
    }
  }
`;

const SkeletonPoster = styled.div`
  width: 100%;
  height: 300px;
  background-color: #444;
`;

const SkeletonTitle = styled.div`
  width: 60%;
  height: 20px;
  margin: 10px auto;
  background-color: #555;
`;

const SkeletonDate = styled.div`
  width: 40%;
  height: 15px;
  margin: 10px auto;
  background-color: #555;
`;

// MoviesList 컴포넌트
const MoviesList = ({ title, apiUrl }) => {
  const navigate = useNavigate();

  const { data: movies, isLoading, isError } = useQuery({
    queryKey: [apiUrl],
    queryFn: () => fetchMovies(apiUrl),
    enabled: !!apiUrl,
  });

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <Container>
      <h1>{title}</h1>
      <MoviesGrid>
        {isLoading ? (
          Array.from({ length: 12 }).map((_, index) => (
            <SkeletonCard key={index}>
              <SkeletonPoster />
              <SkeletonTitle />
              <SkeletonDate />
            </SkeletonCard>
          ))
        ) : isError ? (
          <p>Failed to load movies.</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} onClick={() => handleMovieClick(movie.id)}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
              <ReleaseDate>{movie.release_date}</ReleaseDate>
            </MovieCard>
          ))
        )}
      </MoviesGrid>
    </Container>
  );
};

export default MoviesList;
