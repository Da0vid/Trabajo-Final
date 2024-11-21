import React from 'react';
import cLogo from '../Img/c.png';
import hLogo from '../Img/HTML5.png';
import cssLogo from '../Img/css.png';
import Barra from './Barra';


const Habilidades = () => {
  return (
    <div>
    <h4 className="h4_habilidades">Habilidades:</h4>
      <img className="c" src={cLogo}/>
      <img className="h" src={hLogo}/>
      <img className="css" src={cssLogo}/>
      <Barra/>
    
    </div>
  );
};

export default Habilidades;