import { useState } from "react";
import Counter from "./Counter";

const CounterConteiner = () => {
  const [contador, setContador] = useState(1);

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("minimo");
    }
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  return <Counter contador={contador} sumar={sumar} restar={restar} />;
};
export default CounterConteiner;
