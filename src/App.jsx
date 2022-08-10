
import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Poster from './views/Poster';
import Camera from './views/Camera';
import Gallery from './views/Gallery';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Poster />} />
          <Route path="/camera" element={ <Camera /> } />
          <Route path="/gallery" element={ <Gallery /> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
