import React,{useEffect, useState} from 'react'

function TrendingMovies() {
    const [results, setResults] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=95633abe5f127911fae1c245a2d197b7')
            .then((response) => response.json())
            .then((data) => setResults(data.results))
    }, []);

   
  return (
    <div>
      <>
      <h2>TrendingMovies</h2>
      <div className="movies-container">
        <button>
        {results.map((result) => (
          <div key={result.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w780/${result.poster_path}`} alt=''/>
            <h3>{result.original_title}</h3>
          </div>
        ))}
        </button>
      </div>
    </>
    </div>
  )
}

export default TrendingMovies