import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from './pages/Page404/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Menu from './сommonComponents/Menu';


function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;