import logo from '../../assets/Vector.svg';
import { Link } from "react-router-dom";
import "./index.css";

function NavBar(){
    return(
        <>
        <nav className="navbar navbar-expand-md" id="menu">
            <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} id="logo" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="material-icons">
                menu
            </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto meu-menu">
                                <li><Link to="/geoturism" className="nav-item nav-link">Geoturismo</Link></li>
                                <li className="dropdown">
                                    <span className="nav-link" data-toggle="dropdown">Explorar</span>
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" data-toggle="modal" data-target="#exampleModal">Critérios</button>
                                        <Link to="/" className="dropdown-item">Locais de Interesse</Link>
                                        <Link to="/" className="dropdown-item">Fichas</Link>                                        
                                        <Link to="/" className="dropdown-item">Exploração Temática</Link>                                        
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <span className="nav-link" data-toggle="dropdown">Nosso Território</span>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 3</Link>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <span className="nav-link" data-toggle="dropdown">Publicações</span>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 3</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 4</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 5</Link>
                                    </div>
                                </li>
                                <li><Link to="/" className="nav-link">Sobre o projeto</Link></li>
                            </ul>
                        </div>
                    </div>           
            </nav>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default NavBar