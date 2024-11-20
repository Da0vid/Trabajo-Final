import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home';
import Informacion from './Paginas/Informacion';
import Contacto from './Paginas/Contacto'; 
import Inicio from './Paginas/Inicio';
import '../src/styles/global.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> 
        <Route path="/Inicio" element={<Inicio/>} /> 
          <Route path="/Informacion" element={<Informacion />} />  
          <Route path="/Contacto" element={<Contacto />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


