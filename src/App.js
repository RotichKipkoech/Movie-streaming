import React from 'react';
import TrendingMovies from './TrendingMovies';
import UpcomingMovies from './UpcomingMovies';
import NowPlaying from './NowPlaying';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRated';
import MovieDetails from './MovieDetails';
import "./Dsiplay.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from "./Main";
// import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Main/>

    </div>
    </Router>


import React from 'react'; 
import './App.css';
import SearchBar from './components/SearchBar';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navigation from './components/Navigation';
import React from 'react'
import TrendingMovies from './TrendingMovies'
import UpcomingMovies from './UpcomingMovies'
import NowPlaying from './NowPlaying'
import TopRatedMovies from './TopRated'
import "./App.css"



const App = () => {
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

    <div className="App">
      <SearchBar/>
    </div>


    <Router>
      <div>
        <Navigation />
        <AppRouter />
      </div>
    </Router>

  );
};
    <div>
      <TrendingMovies/>
      <UpcomingMovies/>
      <TopRatedMovies/>
      <NowPlaying/>
    </div>
  )
}

export default App;
