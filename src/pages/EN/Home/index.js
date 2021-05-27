import { Link } from "react-router-dom";
import logo from '../../../assets/Vector.svg';
import Form from "../../../components/EN/Form";
import ModalCriterios from "../../../components/EN/Modal";
import brasil from "../../../assets/brasil.jpg"
import "./index.css";
import "./navbar.css";


function Home() {

    document.title = "Geotourism Tour Of Historic Center Of João Pessoa"
   return(
        <div className="Home">
            <header className="header-area overlay">
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container">
                        <Link to="/en" className="navbar-brand"><img src={logo} alt="Logo" className="logo"/></Link>
    
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
                                        <Link to="/en_locais" className="dropdown-item">Place Of Interest</Link>
                                        <Link to="/en_fichas" className="dropdown-item">Files</Link>                                        
                                        <Link to="/" className="dropdown-item">Thematic Exploration</Link>                                        
                                    </div>
                                </li>
                                <li>
                                    <Link to="/en_territorio" className=" nav-item nav-link">Our Territory</Link>
                                </li>
                                <li>
                                    <Link to="/en_publi" className="nav-item nav-link">Publishing</Link>
                                </li>
                                <li><Link to="/en_about" className="nav-item nav-link">About the Project</Link></li>
                                <li><Link to="/" className="nav-item nav-link"><img src={brasil} id="estados-unidos" alt="Brasil" /></Link></li>
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
                        <Link to="/en_locais">
                            <strong>View Locations</strong>
                        </Link>
                    </div>
                    <div className="bloco-2">
                        <h2>About The Historic Center</h2>
                        <p>Capital of the State of Paraíba, João Pessoa has one of the oldest historic centers in the country, full of churches, monuments, historic squares, obelisks and fountains.</p>
                        <Link to="/en_territorio">
                            <strong>Understand History</strong>
                        </Link>
                    </div>
                    <div className="bloco-3">
                        <h2>How to get here</h2>
                        <p>Located at the eastern end of the Americas, João Pessoa is easily accessed through Castro Pinto Airport, 10 km away and by Severino Camelo Bus Terminal, in the center of João Pessoa.</p>
                        <a href="https://goo.gl/maps/r4PNsZh2eKHrAR7BA" className="font-weight-bold" target="_blank" rel="noreferrer">See airport location</a><br />
                        <a href="https://goo.gl/maps/USiGHGANcff9e1Fe9" className="font-weight-bold" target="_blank" rel="noreferrer">See bus station location</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center font-weight-bold">Our Map</h2>            
                <iframe src="/en_maps" title="mapa" className="mapa"></iframe>
                <br /> 
                <br /> 
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