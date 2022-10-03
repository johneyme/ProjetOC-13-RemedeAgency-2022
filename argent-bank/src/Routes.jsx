import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// layout
import MainLayout from './layout/MainLayout';

// components
import Nav from './components/Nav/Nav';
import Guard from './components/Guard/Guard';

//pages
import Home from './pages/Home/Home';
import SingIn from './pages/SignIn/SignIn';
import Error from './pages/Error/Error';
import User from './pages/User/User';

function Routers() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes element={MainLayout}>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<SingIn />}></Route>
        <Route element={<Guard />}>
          <Route path="profile" element={<User />}></Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
