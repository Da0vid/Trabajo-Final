import React from 'react';
import P1 from '../Img/Proyecto.png';

const Proyecto = () => {
  return (
    <div className="pDiv">
     <img className="proyecto1" src={P1}/>
      <p className="p_vuelos">Este Proyecto lo desarrollé en C# con Windows Forms.<br/> 
      Es una aplicacion de escritorio para una aerolinea en la  <br/>
      cual se puede comprar, ver y cancelar vuelos.
      </p>
    </div>
  );
};

export default Proyecto;