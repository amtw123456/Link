import React from 'react';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Signup from './pages/signup/Signup';
import Signin from './pages/login/Login';
import Homepage from './pages/homepage/Homepage';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import { AuthProvider } from './provider/AuthProvider';
import UnauthenticatedRoutes from './routes/UnAuthenticatedRoutes';

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route element={<UnauthenticatedRoutes />}>
            <Route path="/login" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
