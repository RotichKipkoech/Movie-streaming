import React, { useEffect, useState } from 'react';

function NowPlaying() {
    const [playing, setPlaying] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=95633abe5f127911fae1c245a2d197b7")
            .then((response) => response.json())
            .then((data) => setPlaying(data.results))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Now Playing Movies</h2>
            <div className="movies-container">
                {playing.map((movie) => (
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

export default NowPlaying;
