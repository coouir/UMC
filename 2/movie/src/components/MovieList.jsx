import React from 'react';
import { MOVIES } from '../mocks/movies';
import './styles/MoviesList.css'; // CSS 파일 임포트

const MovieList = () => {
    return (
    <div>
        <div 
        className='movies-list'
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {MOVIES.results.map(movie => (
            <div className="movie-item" key={movie.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '200px' }}>
            <img
                className="movie-image" 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', borderRadius: 'px' }}
            />
            </div>
        ))}
        </div>
    </div>
    );
};

export default MovieList;
