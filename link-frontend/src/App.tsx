import React from 'react';

import Card from './components/PostCard/PostCard';
import { Routes, Route } from 'react-router-dom';

import Signup from './pages/signup/Signup';
import Signin from './pages/login/Login';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
