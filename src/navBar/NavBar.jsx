import "./navBar.css";
import { CartWidget } from "../cartWidget/CartWidget";

export const NavBar = () => {
  return (
    <div className="navConteiner">
      <ul className="categorias">
        <li className="catVehiculos">Adidas</li>
        <li className="catVehiculos">Puma</li>
        <li className="catVehiculos">Nike</li>
        <li className="catVehiculos">Todos</li>
      </ul>
      <CartWidget />
      <span>4</span>
    </div>
  );
};
