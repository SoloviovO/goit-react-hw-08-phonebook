import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logOutUser } from 'redux/auth/authThunk';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{userName}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
};
