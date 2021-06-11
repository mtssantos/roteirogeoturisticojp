import logo from '../../../assets/Vector.svg';
import "../../About/index.css";
import tese_luciano from "../../../documents/tese_luciano.pdf";
import anexos_luciano from "../../../documents/anexos_luciano.pdf";
import { Navbar } from '../../../components/EN/Navbar';



function ENAbout(){
    document.title = "Sobre o Projeto"
    return(
        <>
            <Navbar />
            <div className="container about">
                <img src={logo} className="logo-about" alt="logo" />
                <h3>Geoutourism Tour Of Historic Center Of João Pessoa</h3>
                <p className="description">This site is a compilation of data found in the doctoral thesis of IFPB Geography professor Luciano Schaefer Pereira, which can be consulted on the links below:</p>
                <nav>
                    <a href={tese_luciano} target="_blank" className="links" rel="noreferrer">Luciano's Thesis</a>
                    <a href={anexos_luciano} target="_blank" className="links" rel="noreferrer">Thesis Attachments</a>
                </nav>
            </div>
        </>        
    )
}


export default ENAbout;
