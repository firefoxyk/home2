import React from 'react';
import {Route,Link,Routes,BrowserRouter} from "react-router-dom";
import ErrorPage from './pages/Page404/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Menu from './сommonComponents/Menu';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="HomePage" element={<HomePage />} /> 
        <Route path="RegisterPage" element={<RegisterPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
