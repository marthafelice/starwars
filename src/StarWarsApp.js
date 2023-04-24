import React from 'react'
import MovieCards from './MovieCards'
import './main.css'
import Header from './Header'

export default function StarWarsApp() {
  return (
    <div>
      <Header/>
      <MovieCards/>
    </div>
  )
}
