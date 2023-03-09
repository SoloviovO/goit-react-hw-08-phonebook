import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children }) => {
  const authToken = useSelector(selectToken);
  if (!authToken) {
    return <Navigate to="/login" />;
  }
  return children;
};
