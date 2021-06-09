import "./index.css";
import arquivos from "./geodiversidade.json";


function GeodiversidadePubli(){
    return(
        <div className="publicacoes">
            {arquivos.map(docs => (
                <li><a rel="noreferrer" target="_blank" href={docs.arq}>{docs.document}<br /></a></li>
            ))}
        </div>
    )
}

export default GeodiversidadePubli
