import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import MainLayout from './layout/MainLayout';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import SingIn from './pages/SignIn/SignIn';
import User from './pages/User/User';
import Guard from './components/Guard/Guard';
import Error from './pages/Error/Error';
import Transactions from './pages/Transactions/Transactions';

import { Provider } from 'react-redux';
import store from './utils/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes element={MainLayout}>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<SingIn />}></Route>
          <Route element={<Guard />}>
            <Route path="profile" element={<User />}></Route>
            <Route path="/:id/transactions" element={<Transactions />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  </React.StrictMode>
);
