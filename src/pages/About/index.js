import NavBar from "../../components/Navbar";
import logo from '../../assets/Vector.svg';
import "./index.css";
import tese_luciano from "../../documents/tese_luciano.pdf";
import anexos_luciano from "../../documents/anexos_luciano.pdf";



function About(){
    document.title = "Sobre o Projeto"
    return(
        <>
            <NavBar />
            <div className="container about">
                <img src={logo} className="logo-about" alt="logo" />
                <h3>Roterio Geoturístico do Centro Histórico de João Pessoa</h3>
                <p className="description">Este site é uma compilação de dados encontrados na tese de doutorado do professor de Geografia do IFPB Luciano Schaefer Pereira, que pode ser consultado nos links abaixo:</p>
                <nav>
                    <a href={tese_luciano} target="_blank" className="links" rel="noreferrer">Tese de Luciano</a>
                    <a href={anexos_luciano} target="_blank" className="links" rel="noreferrer">Anexos da Tese</a>
                </nav>
            </div>
        </>        
    )
}


export default About;