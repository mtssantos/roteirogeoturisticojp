import "./index.css";
import arquivos from "./json/geodiversidade.json";


function GeodiversidadePubli(){
    return(
        <div className="publicacoes">
            {arquivos.map(docs => (
                <li><a rel="noreferrer" target="_blank" href={docs.arq_link}>{docs.arq}<br /></a></li>
            ))}
        </div>
    )
}

export default GeodiversidadePubli
