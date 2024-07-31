import CounterContainer from "../counter/CounterConteiner";

const ItemDetail = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {item.map((products) => {
        return (
          <ProductCard
            key={products.id}
            title={products.title}
            description={products.description}
            price={products.price}
            id={products.id}
          />
        );
      })}
      <CounterContainer />
    </div>
  );
};

export default ItemDetail;
