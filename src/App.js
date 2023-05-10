// import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import FilmList from './pages/FilmList';
import './App.css'
import FilmDetails from './pages/FilmDetails';
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
    <Routes>
    <Route path="/" element={<FilmList />} />
    <Route path="/films/:episodeId" element={ <FilmDetails />}/>
   </Routes>
   </div>
  );
}

export default App;
