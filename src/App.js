import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './compontents/navbar/navbar';
import Home from './pages/main/home'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          {/* <Route path='success/' element={<Success />} /> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
