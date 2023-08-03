import React from 'react'
import TrendingMovies from './TrendingMovies'
import UpcomingMovies from './UpcomingMovies'
import NowPlaying from './NowPlaying'
import TopRatedMovies from './TopRated'
import "./App.css"

function App() {
  return (
    <div>
      <TrendingMovies/>
      <UpcomingMovies/>
      <TopRatedMovies/>
      <NowPlaying/>
    </div>
  )
}

export default App
