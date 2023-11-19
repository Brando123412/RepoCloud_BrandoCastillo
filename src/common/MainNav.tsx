import {Link} from "react-router-dom";
import "./MainNav.css";
function MainNav(){
    const linkStyle = {
        color: "red"
    };
    const linkStyle2 = {
        color: "blue"
    };
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg navbar-dark" >
            <div className="container ">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to = "/" style={linkStyle}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/game" style={linkStyle2}>Game</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/game2" style={linkStyle2}>Game2</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/game3" style={linkStyle2}>Game3</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/game4" style={linkStyle2}>Game4</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" style={linkStyle2}>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default  MainNav