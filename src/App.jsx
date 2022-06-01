
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Poster from './views/Poster';
import Camera from './views/Camera';
import Gallery from './views/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Poster />} />
          <Route path="/camera" element={ <Camera /> } />
          <Route path="/gallery" element={ <Gallery /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
