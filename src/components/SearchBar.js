import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=db94c20d`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.Search) {
          setMoviesData(data.Search);
        } else {
          setMoviesData([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setMoviesData([]);
      });
  }, [searchInput]);

  function handleChange(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      {moviesData.map((movie) => (
        <button key={movie.imdbID}>
          <div>
            <div>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div>
                {movie.Title}
            </div>
         </div>
        </button>
      ))}
    </div>
  );
}

export default SearchBar;
