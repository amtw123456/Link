import React from 'react';

import Card from './components/PostCard/PostCard';
import { Routes, Route } from 'react-router-dom';

import Signup from './pages/signup/Signup';
import Signin from './pages/login/Login';
import Homepage from './pages/homepage/Homepage';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
