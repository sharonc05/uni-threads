import * as React from 'react';
import './App.css';
<<<<<<< HEAD
import Homepage from './Homepage';
function App() {
  return (
    

    <div className="App">
      <Homepage/>
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  */}
    </div>
=======
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
>>>>>>> refs/remotes/origin/main
  );
}

export default App;
