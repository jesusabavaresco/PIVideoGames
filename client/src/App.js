import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './components/landing/Landing';
import HomePage from './components/home/Home.jsx';
import CreateVideogames from './components/form/Form.jsx';
import DetailPage from '../src/components/detail/Detail.jsx';


function App() {
  return (
    
    <div className="App">

      <Routes>
        <Route path="/" element={<Landing/>}/> 
        <Route path="/home" element={<HomePage/>}/> 
        <Route path="/form" element={<CreateVideogames/>}/> 
        <Route path="/detail/:id" element={<DetailPage/>}/> 
      </Routes>
    </div>

  );
}

export default App;
