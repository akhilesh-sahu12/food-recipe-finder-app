import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to track user authentication status
  const [authenticated, setAuthenticated] = useState(false);

  // State to store a list of registered users
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // State to store current user
  const [currentUser, setCurrentUser] = useState({});

  // Function to register a new user
  const registerUser = (userData) => {
    // Add the new user to the list
    setRegisteredUsers((prevUsers) => [...prevUsers, userData]);
    console.log('User registered successfully:', userData);
  };

  // Function to log in the user
  const userLogin = () => {
    setAuthenticated(true);
    console.log('User is logged successfully'); // Log a message for debugging
  };

  // Function to log out the user
  const logout = () => {
    setAuthenticated(false);
    console.log('User is logged out.'); // Log a message for debugging
  };

  // Function to login user
  const userLoginDetails = (user) => {
    setCurrentUser(user);
    console.log(currentUser, "has been successfully logged in");
  }

  // Provide authentication state and functions to children components
  return (
    <AuthContext.Provider value={{ authenticated, userLogin, logout, registerUser, registeredUsers, userLoginDetails, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
