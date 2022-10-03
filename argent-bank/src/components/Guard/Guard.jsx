import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';

/** @function protect user authentication
 *
 * @component
 * @returns (<Guard/>)
 */

function Guard() {
  const { token } = useSelector((state) => state.user);

  return token !== null ? <Outlet /> : <Navigate to="/login" />;
}

export default Guard;
