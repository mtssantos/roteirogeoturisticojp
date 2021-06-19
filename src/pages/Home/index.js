import { Link } from "react-router-dom";
import logo from '../../assets/Vector.svg';
import Form from "../../components/Form";
import ModalCriterios from "../../components/Modal";
import "./index.css";
import "./navbar.css"
import estadosunidos from "../../assets/estadosunidos.webp";
import IFPB from "../../assets/ifpb.svg";
import UC from "../../assets/uc.svg";
import CAPES from "../../assets/capes.svg";
import CEGOT from "../../assets/cegot.svg";


function Home() {
    document.title = "Roteiro Geoturístico do Centro Histórico do João Pessoa"
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
                                        <Link to="/locais" className="dropdown-item">Locais de Interesse</Link>
                                        <Link to="/fichas" className="dropdown-item">Fichas</Link>                                        
                                        <Link to="/tematica" className="dropdown-item">Exploração Temática</Link>                                        
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <Link to="/territorio" className="nav-item nav-link" data-toggle="dropdown">Nosso Território</Link>
                                </li>
                                <li><Link className="nav-item nav-link" to="/publi">Publicações</Link></li>
                                <li><Link to="/about" className="nav-item nav-link">Sobre o projeto</Link></li>
                                <li><Link to="/en" className="nav-item nav-link"><img src={estadosunidos} id="estados-unidos" alt="Estados Unidos" /></Link></li>
                            </ul>
                    </div>
                    </div>
                    <ModalCriterios />
                </nav>
                
                <div className="banner">
                    <div className="container">
                        <h1>Roteiro Geoturístico do Centro Histórico do João Pessoa</h1>
                    </div>
                </div>
            </header>
            
            <div className="container">
                <div className="blocos">
                    <div className="bloco-1">
                        <h2>Locais de Interesse</h2>
                        <p>Capital do Estado da Paraíba, João Pessoa possui um dos centros históricos mais antigos do país, repleto de igrejas, monumentos, praças históricas, obeliscos e fontes.</p>
                        <Link to="/locais">
                            <strong>Ver Locais</strong>
                        </Link>
                    </div>
                    <div className="bloco-2">
                        <h2>Sobre o Centro Histórico</h2>
                        <p>Capital do Estado da Paraíba, João Pessoa possui um dos centros históricos mais antigos do país, repleto de igrejas, monumentos, praças históricas, obeliscos e fontes.</p>
                        <Link to="/history">
                            <strong>Entenda a História</strong>
                        </Link>
                    </div>
                    <div className="bloco-3">
                        <h2>Como chegar aqui</h2>
                        <p>Situado no extremo oriental das Américas, João Pessoa é facilmente acessado através do Aeroporto Castro Pinto, distante 10 Km e pelo Terminal Rodoviário Severino Camelo, no centro de João Pessoa.</p>
                        <a href="https://goo.gl/maps/r4PNsZh2eKHrAR7BA" className="font-weight-bold" target="_blank" rel="noreferrer">Ver localização do aeroporto</a><br />
                        <a href="https://goo.gl/maps/USiGHGANcff9e1Fe9" className="font-weight-bold" target="_blank" rel="noreferrer">Ver localização da rodoviária</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center font-weight-bold">Roteiros Geoturísticos</h2>            
                <iframe src="/maps" title="mapa" className="mapa"></iframe>
                <br /> 
                <br /> 
            </div>
            <div className="container">
                <h2 className="text-center font-weight-bold">Patrocínio</h2>
                <hr />
                <div className="imgs">
                    <a href="https://www.ifpb.edu.br/" title="IFPB - Campus João Pessoa"  rel="noreferrer" target="_blank"><img src={IFPB} alt="IFPB - Campus João Pessoa" className="img-patrocine" /></a>
                    <a href="https://www.uc.pt/" title="Universidade de Coimbra"  rel="noreferrer" target="_blank"><img src={UC} alt="Universidade de Coimbra" className="img-patrocine" /></a>
                </div>
                <br />
                <div className="imgs">
                    <a href="https://www.gov.br/capes/pt-br" title="CAPES"  rel="noreferrer" target="_blank"><img src={CAPES} alt="CAPES" className="img-patrocine" /></a>
                    <a href="https://cegot.pt/pt/" title="CEGOT"  rel="noreferrer" target="_blank"><img src={CEGOT} alt="CEGOT" className="img-patrocine" /></a>
                </div>
                <hr />
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