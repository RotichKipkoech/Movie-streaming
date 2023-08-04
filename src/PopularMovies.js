import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./display.css";


function PopularMovies() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=95633abe5f127911fae1c245a2d197b7")
            .then((response) => response.json())
            .then((data) => setPopular(data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Popular Movies</h2>
            <div className="movies-container">
                {popular.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title} />
                        <h3>{movie.original_title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PopularMovies;
