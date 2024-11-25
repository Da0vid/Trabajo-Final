import React from 'react';
import tele from '../Img/Telefono.png'

const Telefono = () => {
  return (
    <div>
      <img className="tel" src={tele}/>
      <h5 className="numero">3059326472</h5>
    </div>
  );
};

export default Telefono;