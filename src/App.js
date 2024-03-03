import React from 'react';
import './App.css';
import ProductPage from './ProductPage';
import Profile from './Pages/Profile/Profile';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Homepage from './Components/Homepage/Homepage';


const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <NavBar />}
      
      <Routes>
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/homepage" element={<Homepage />} />
        {/* Redirect from root to /login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Optionally, handle unmatched routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default AppWrapper;
