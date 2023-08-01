import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { movieId } = useParams(); 
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=95633abe5f127911fae1c245a2d197b7`)
            .then((response) => response.json())
            .then((data) => setDetails(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [movieId]);

    return (
        <div>
            <h2>Movie Details</h2>
            <div className="movie-details">
                <img src={`https://image.tmdb.org/t/p/w780/${details.poster_path}`} alt={details.original_title} />
                <h3>{details.original_title}</h3>
                <p> Overview:{details.overview}</p>
                <p>Vote Average:{details.vote_average}</p>
                <p>Release Date:{details.release_date}</p>
            </div>
    
        </div>
    );
}

export default MovieDetails;