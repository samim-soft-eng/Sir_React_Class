import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('login') === 'true';
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute