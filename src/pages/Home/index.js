import { Link, Redirect } from "react-router-dom";
import logo from '../../assets/Vector.svg';
import ImageSlider from "../../components/imageSlider";
import { SliderData } from "../../components/SliderData";
import { MdSettings } from "react-icons/md";
import "./index.css";

function Home() {
    let lang = localStorage.getItem('lang');

    if(lang === null){
        return <Redirect to="/lang" />
    }
   return(
    <div className="Home">
    <div className="Navbar">
        <ul className="list-menu">
            <img src={logo} alt="Logo do Projeto" id="logo" />
            <li id="menu_geo">GEOTURISMO</li>
            <li id="menu_expo">EXPLORAR</li>
            <li id="menu_territ">NOSSO TERRITÓRIO</li>
            <li id="menu_publi">PUBLICAÇÕES</li>
            <li>
                <div className="settings">
                    <MdSettings size={25} id="settings" color="#fff" />
                </div>
            </li>
        </ul>
    </div>
    <div className="slider">
        <ImageSlider slides={SliderData} />
    </div>
        <div className="carrosuel">
          <div className="card b-1">
                <h2>Locais de Interesse</h2>
                <p>Capital do Estado da Paraíba, João Pessoa possui um dos centros históricos mais antigos do país, repleto de igrejas, monumentos, praças históricas, obeliscos e fontes.</p>
                <Link to="/en">
                    <strong>Visitar</strong>
                </Link>

              
          </div>
          <div className="card b-2">
                <h2>Sobre o Centro Histórico</h2>
                <p>Capital do Estado da Paraíba, João Pessoa possui um dos centros históricos mais antigos do país, repleto de igrejas, monumentos, praças históricas, obeliscos e fontes.</p>
                <Link to="/en">
                    <strong>Visitar</strong>
                </Link>
          </div>
          <div className="card b-3">
                <h2>Como chegar aqui</h2>
                <p>Situado no extremo oriental das Américas, João Pessoa é facilmente acessado através do Aeroporto Castro Pinto, distante 10 Km e pelo Terminal Rodoviário Severino Camelo, no centro de João Pessoa.</p>
                <Link to="/en">
                    <strong>Visitar</strong>
                </Link>
          </div>
        </div>
        <div className="buttons-footer">
            <div className="btn-1"></div>
            <div className="btn-2"></div>
        </div>
    </div>
    )
    
}


export default Home;