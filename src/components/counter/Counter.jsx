const Counter = ({ restar, contador, sumar }) => {
  return (
    <div>
      <button onClick={restar}>menos</button>
      <h3>{contador}</h3>
      <button onClick={sumar}>mas</button>
    </div>
  );
};

export default Counter;
