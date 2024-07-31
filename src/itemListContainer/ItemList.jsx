import ProductCard from "../components/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        marginTop: "20px",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
            img={elemento.img}
            id={elemnto.id}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
