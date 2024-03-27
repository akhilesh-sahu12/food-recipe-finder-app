import React from 'react';
import { Redirect } from 'react-router-native'; // Import Redirect for navigation
import { useAuth } from '../context/AuthContext';

function AuthGuard() {
  const { authenticated } = useAuth();
  
  // Check if the user is authenticated, if not, redirect to the login page
  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  
  // If the user is authenticated, render the child routes (Outlet)
  return <Outlet />;
}

export default AuthGuard;
