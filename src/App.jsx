import { useState } from 'react'
import CurrentWeather from './components/CurrentWeather'
import './App.css'
import Search from "./components/Search"

function App() {

  return (
    <>
      <h1>Wetter App</h1>
      <CurrentWeather />
      <Search/>
    </>
  )
}

export default App
