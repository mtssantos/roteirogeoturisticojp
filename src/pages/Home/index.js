import { Link, Redirect } from "react-router-dom";
import logo from '../../assets/Vector.svg';
import Form from "../../components/Form";
import ModalCriterios from "../../components/Modal";
import "./index.css";
import "./navbar.css"


function Home() {
    let lang = localStorage.getItem('lang');

    if(lang === null){
        return <Redirect to="/lang" />
    }
    
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
                                <li><Link to="/geoturism" className="nav-item nav-link active">Geoturismo</Link></li>
                                <li className="dropdown">
                                    <span className="nav-item nav-link" data-toggle="dropdown">Explorar</span>
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" data-toggle="modal" data-target="#exampleModal">Critérios</button>
                                        <Link to="/" className="dropdown-item">Locais de Interesse</Link>
                                        <Link to="/" className="dropdown-item">Fichas</Link>                                        
                                        <Link to="/" className="dropdown-item">Exploração Temática</Link>                                        
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <span className="nav-item nav-link" data-toggle="dropdown">Nosso Território</span>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 3</Link>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <span className="nav-item nav-link" data-toggle="dropdown">Publicações</span>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item">Dropdown Item 1</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 2</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 3</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 4</Link>
                                        <Link to="/" className="dropdown-item">Dropdown Item 5</Link>
                                    </div>
                                </li>
                                <li><Link to="/" className="nav-item nav-link">Sobre o projeto</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ModalCriterios />
                </nav>
                
                <div className="banner">
                    <div className="container">
                        <h1>Roteiro Geoturistico do Centro Histórico do João Pessoa</h1>
                    </div>
                </div>
            </header>
            
            <div className="container">
                <div className="blocos">
                    <div className="bloco-1">
                        <h2>Locais de Interesse</h2>
                        <p>Capital do Estado da Paraíba, João Pessoa possui um dos centros históricos mais antigos do país, repleto de igrejas, monumentos, praças históricas, obeliscos e fontes.</p>
                        <Link to="/maps">
                            <strong>Visitar</strong>
                        </Link>
                    </div>
                    <div className="bloco-2">
                        <h2>Sobre o Centro Histórico</h2>
                        <p>Capital do Estado da Paraíba, João Pessoa possui um dos centros históricos mais antigos do país, repleto de igrejas, monumentos, praças históricas, obeliscos e fontes.</p>
                        <Link to="/en">
                            <strong>Visitar</strong>
                        </Link>
                    </div>
                    <div className="bloco-3">
                        <h2>Como chegar aqui</h2>
                        <p>Situado no extremo oriental das Américas, João Pessoa é facilmente acessado através do Aeroporto Castro Pinto, distante 10 Km e pelo Terminal Rodoviário Severino Camelo, no centro de João Pessoa.</p>
                        <Link to="/en">
                            <strong>Visitar</strong>
                        </Link>
                    </div>
                </div>
            </div>
                <div className="container">
                <div className="bottom-footer">
                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#ModalForm">Envie um e-mail</button>
                    <Form />
                    <span className="visit"> <span>Visitas ao site</span></span>
                </div>
                </div>
            </div>
  

    )
    
}


export default Home;