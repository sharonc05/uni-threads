import * as React from 'react';
import './App.css';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Profile from './Pages/Profile/Profile';
import ProductPage from './ProductPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
