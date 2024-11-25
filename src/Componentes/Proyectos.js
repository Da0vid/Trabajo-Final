import React from 'react';
import P1 from '../Img/Proyecto.png';
import huellas from '../Img/Huellitas.png'

const Proyecto = () => {
  return (
    <div className="pDiv">
     <img className="proyecto1" src={P1}/>
      <p className="p_vuelos">Este Proyecto lo desarrollé en C# con Windows Forms.<br/> 
      Es una aplicacion de escritorio para una aerolinea en la  <br/>
      cual se puede comprar, ver y cancelar vuelos.
      </p>
      <img className="huellitas" src={huellas}/>
      <p className="p_huellitas">Este Proyecto lo realicé en equipo con otros compañeros.<br/>
      Consiste en una pagina web desarrollada con ASP.NET, la cual<br/>
      nos permite gestionar las citas para una peluqueria canina.
      </p>
    </div>
  );
};

export default Proyecto;