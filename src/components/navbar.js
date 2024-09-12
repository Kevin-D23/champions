import Callbtn from "./callbtn";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <h1>CHAMPIONS</h1>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/gallary"}>Gallary</Link>
        </li>
      </ul>
      <div>
        <Callbtn />
      </div>
    </header>
  );
}
