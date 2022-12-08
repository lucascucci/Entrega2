import { Link } from "react-router-dom";
import './navBar.css' 

const NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link className="home" to="/">Inicio</Link>
                </li>
                <li>
                    <Link className="prod" to="/productos">Productos</Link>
                </li>
            </ul>
        </div>
    
    )
}

export default NavBar;