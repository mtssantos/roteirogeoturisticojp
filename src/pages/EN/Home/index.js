import { Link } from "react-router-dom";
import logo from '../../../assets/Vector.svg';
import Form from "../../../components/EN/Form";
import ModalCriterios from "../../../components/EN/Modal";
import "./index.css";
import "./navbar.css";


function Home() {

   return(
        <div className="Home">
            <header className="header-area overlay">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container">
                        <Link to="/" className="navbar-brand"><img src={logo} alt="Logo" className="logo"/></Link>
    
                        <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                            <span className="material-icons">
                                menu
                            </span>
                        </button>
                        
                        <div id="main-nav" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li><Link to="/en_geoturism" className="nav-item nav-link active">Geoturism</Link></li>

                                <li className="dropdown">
                                    <span className="nav-item nav-link" data-toggle="dropdown">Explore</span>
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" data-toggle="modal" data-target="#exampleModal">Criteria</button>
                                        <Link to="/locais" className="dropdown-item">Place Of Interest</Link>
                                        <Link to="/" className="dropdown-item">Files</Link>                                        
                                        <Link to="/" className="dropdown-item">Thematic Exploration</Link>                                        
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <span className="nav-item nav-link" data-toggle="dropdown">Our Territory</span>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 3</Link>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <span className="nav-item nav-link" data-toggle="dropdown">Publishing</span>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 3</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 4</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 5</Link>
                                    </div>
                                </li>
                                <li><Link to="/" className="nav-item nav-link">About the Project</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ModalCriterios />
                </nav>
                
                <div className="banner">
                    <div className="container">
                        <h1>Geotourism Tour Of Historic Center Of João Pessoa</h1>
                    </div>
                </div>
            </header>
            
            <div className="container">
                <div className="blocos">
                    <div className="bloco-1">
                        <h2>Places Of Interest</h2>
                        <p>Capital of the State of Paraíba, João Pessoa has one of the oldest historic centers in the country, full of churches, monuments, historic squares, obelisks and fountains.</p>
                        <Link to="/maps">
                            <strong>Visit</strong>
                        </Link>
                    </div>
                    <div className="bloco-2">
                        <h2>About The Historic Center</h2>
                        <p>Capital of the State of Paraíba, João Pessoa has one of the oldest historic centers in the country, full of churches, monuments, historic squares, obelisks and fountains.</p>
                        <Link to="/en">
                            <strong>Visit</strong>
                        </Link>
                    </div>
                    <div className="bloco-3">
                        <h2>How to get here</h2>
                        <p>Located at the eastern end of the Americas, João Pessoa is easily accessed through Castro Pinto Airport, 10 km away and by Severino Camelo Bus Terminal, in the center of João Pessoa.</p>
                        <Link to="/en">
                            <strong>Visit</strong>
                        </Link>
                    </div>
                </div>
            </div>
                <div className="container">
                <div className="bottom-footer">
                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#ModalForm">Send an e-mail</button>
                    <Form />
                    <span className="visit"> <span>Visits to the site</span></span>
                </div>
                </div>
            </div>
  

    )
    
}


export default Home;