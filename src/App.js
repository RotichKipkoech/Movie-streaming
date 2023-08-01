import React from 'react';
import TrendingMovies from './TrendingMovies';
import UpcomingMovies from './UpcomingMovies';
import NowPlaying from './NowPlaying';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRated';
import MovieDetails from './MovieDetails';
import "./Dsiplay.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <TrendingMovies />
        <UpcomingMovies />
        <TopRatedMovies />
        <NowPlaying />
        <PopularMovies/>
        <Routes>
          <Route exact path='/movie/:movieId' element={<MovieDetails />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;