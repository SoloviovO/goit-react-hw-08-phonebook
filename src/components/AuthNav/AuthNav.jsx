import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/register">Registration</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
};
