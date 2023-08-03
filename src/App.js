
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

export default App
