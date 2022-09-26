import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

/** @function show routes Parents/children
 *
 * @returns (<MainLayout/>)
 */

function MainLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
