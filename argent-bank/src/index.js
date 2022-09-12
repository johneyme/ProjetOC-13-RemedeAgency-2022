import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SingIn from './pages/SignIn/SignIn';
import User from './pages/User/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="signin" element={<SingIn />}></Route>
        <Route path="user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
