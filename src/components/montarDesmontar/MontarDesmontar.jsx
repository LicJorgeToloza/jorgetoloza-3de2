import { useState } from "react";

export const MontarDesmontar = () => {
    
  const [estaMontado, setEstaMontado] = useState(false);

  const montarDesmontarProduct = ()=> {
    setEstaMontado (!estaMontado)
  }

  return (
  <button onClick={montarDesmontarProduct}> MontarDesmontar</button>;
  )
};
