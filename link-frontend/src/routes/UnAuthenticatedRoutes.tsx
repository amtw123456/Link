// src/routes/UnauthenticatedRoutes.jsx
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider'; // Import your AuthProvider hook

const UnauthenticatedRoutes = () => {
    const { isAuthenticated } = useAuth(); // Get the authentication status

    // If the user is NOT authenticated, render the login/signup routes
    return !isAuthenticated ? <Outlet /> : <Navigate to="/homepage" />;
};

export default UnauthenticatedRoutes;
