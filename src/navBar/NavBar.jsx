import "./navBar.css";
import CartWidget from "../cartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dd7mfvnx8/image/upload/v1720400642/3dedos_zisvgq.png"
          alt="logo 3 dedos"
          style={{ width: "200px", objectFit: "cover" }}
        />
      </Link>
      <div className="navConteiner">
        <ul className="categorias">
          <Link to="/category/Adidas" className="catBotines">
            Adidas
          </Link>
          <Link to="/category/Puma" className="catBotines">
            Puma
          </Link>
          <Link to="/category/Nike" className="catBotines">
            Nike
          </Link>
          <Link to="/" className="catBotines">
            Todos
          </Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </>
  );
};
export default NavBar;
