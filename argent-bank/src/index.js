import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Index from './pages/Index/Index';
import SingIn from './pages/SignIn/SignIn';
import User from './pages/User/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="signin" element={<SingIn />}></Route>
        <Route path="user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
