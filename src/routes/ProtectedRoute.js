import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem('token');

  if (token) {
    if (adminOnly && user.role !== 'admin') {
      return <Navigate to="/library_managemeny_system_react" />;
    }
    return children;
  } else {
    return <Navigate to="/library_managemeny_system_react" />;
  }
};

export default ProtectedRoute;
