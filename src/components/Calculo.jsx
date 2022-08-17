import { useState } from 'react';

 const Calculo = () => {
    
    //1.- Se asigna el input como el valor de la pantalla.
    // 
    const [prInput, setPrInput] = useState('Holis');

  return (
    {prInput}
  );
};

export default Calculo;