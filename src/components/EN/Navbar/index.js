import logo from '../../../assets/Vector.svg';
import { Link } from "react-router-dom";
import ModalCriterios from "../Modal";
import brasil from "../../../assets/brasil.jpg"
import "./index.css";

export function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-md" id="menu">
            <div className="container">
            <Link className="navbar-brand" to="/en"><img src={logo} id="logo" alt="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="material-icons">
                menu
            </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto meu-menu">
                                <li><Link to="/en_geoturism" className="nav-item nav-link">Geotourism</Link></li>
                                <li className="dropdown">
                                    <span className="nav-link" data-toggle="dropdown">Explore</span>
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" data-toggle="modal" data-target="#exampleModal">Criteria</button>
                                        <Link to="/en_locais" className="dropdown-item">Places Of Interest</Link>
                                        <Link to="/en_fichas" className="dropdown-item">Files</Link>                                        
                                        <Link to="/en_tematica" className="dropdown-item">Thematic Exploration</Link>                                        
                                    </div>
                                </li>
                                <li>
                                    <Link to="/en_territorio" className="nav-link">Our Territory</Link>
                                </li>
                                <li>
                                    <Link to="/en_publi" className="nav-link">Publishing</Link>
                                </li>
                                <li><Link to="/en_about" className="nav-link">About the Project</Link></li>
                                <li><Link to="/" className="nav-item nav-link"><img src={brasil} id="estados-unidos" alt="Brasil" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <ModalCriterios />           
            </nav>
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
