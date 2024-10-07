import React from 'react';

import Card from './components/card/Card';
import { Routes, Route } from 'react-router-dom';

import Signup from './pages/signup/Signup';
import Signin from './pages/login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
