import "./index.css";
import arquivos from "./json/geoconservacao.json";


function GeoConservacaoPubli(){
    return(
        <div className="publicacoes">
            {arquivos.map(docs => (
                <li><a rel="noreferrer" target="_blank" href={docs.arq_link}>{docs.arq}<br /></a></li>
            ))}
        </div>
    )
}

export default GeoConservacaoPubli
