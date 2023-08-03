import React, { useEffect, useState } from 'react';

function TopRatedMovies() {
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=95633abe5f127911fae1c245a2d197b7")
            .then((response) => response.json())
            .then((data) => setTopRated(data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Top Rated Movies</h2>
            <div className="movies-container">
                {topRated.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                            alt={movie.original_title}
                        />
                        <h3>{movie.original_title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopRatedMovies ;