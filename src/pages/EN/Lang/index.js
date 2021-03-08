import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import './index.css';


function Lang(){
    function salvelangpt() {
        localStorage.setItem('lang', 'pt-br')
    }
    function salvelangen() {
        localStorage.setItem('lang', 'en-us')
    }

      
        let lang = localStorage.getItem('lang')
    
        if(lang === "pt-br"){
            return (
                <Redirect to="/" />
            )
        } else if (lang === "en-us"){
            return(
                <Redirect to="/en" />
            )
        }
    

    return(
        <div className="Lang">
            <div id="titulo">
                <h2 id="title">Escolha a sua Língua</h2>
                <h3 id="subtitle">Select your language</h3>
            </div>
            <div className="main">
                    <Link to="/" id="home" onClick={salvelangpt}>
                        <span id="home-text">PT-BR</span>
                    </Link>
                <Link to="/en" id="en" onClick={salvelangen}>
                        <span id="en-text">EN-US</span>
                </Link>
            </div>
        </div>
    )
}


export default Lang