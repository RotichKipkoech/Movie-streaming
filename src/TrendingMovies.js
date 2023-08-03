// TrendingMovies.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from './MovieDetails';

function TrendingMovies() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=95633abe5f127911fae1c245a2d197b7')
            .then((response) => response.json())
            .then((data) => setResults(data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Trending Movies</h2>
            <div className="movies-container">
                <div className='movies-scroll-container'>
                    {results.map((result) => (
                        <Link to={'/movie/'+result.id} key={result.id} className="movie-card">
                            <img src={`https://image.tmdb.org/t/p/w780/${result.poster_path}`} alt='' />
                            <h3>{result.original_title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TrendingMovies;