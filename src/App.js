import { Routes, Route, Link } from "react-router-dom";
import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import HomePage from './HomePages';
import UserPage from './UserPages';
import AboutPage from './AboutPages';
import InfoPage from './InfoPages';

export default function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  </div>
  )

}