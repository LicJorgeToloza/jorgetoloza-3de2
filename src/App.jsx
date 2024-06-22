import { NavBar } from "./navBar/NavBar";
import { ItemListContainer } from ".//itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <h1>Jorge Toloza - 3 de2 Botines</h1>
      <NavBar />
      <ItemListContainer greeting={"Tienda de Botines de Futbol"} />
    </div>
  );
}

export default App;
