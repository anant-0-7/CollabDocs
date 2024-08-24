import React from 'react';
import "../public/App.css"
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import All from "./components/All";

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all" element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
