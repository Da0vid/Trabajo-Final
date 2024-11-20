import React, { useState } from 'react';
import Titulo from '../Componentes/Titulo';
import Menu from '../Componentes/Menu';  
import './Home.css';
import Text_Inicio from '../Componentes/Text_Inicio';
import { Outlet } from 'react-router-dom';  

const Home = () => {
  
  const [move, setMove] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMove({
      x: (clientX / window.innerWidth) * 50 - 25,  
      y: (clientY / window.innerHeight) * 50 - 25  
    });
  };

  return (
    <div className="home" onMouseMove={handleMouseMove}> 
      <div
        className="fondo-interactivo"
        style={{
          transform: `translate(${move.x}px, ${move.y}px)`  
        }}
      ></div>
      <Titulo />
      <Menu /> 
      
      <Outlet /> 
    </div>
  );
};

export default Home;



