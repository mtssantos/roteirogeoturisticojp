import "./index.css";
import arquivos from "./json/geoconservacao.json";


function GeoConservacaoPubli(){
    return(
        <div className="publicacoes">
            {arquivos.map(docs => (
                <li><a rel="noreferrer" target="_blank" href={docs.link_arq}>{docs.document}<br /></a></li>
            ))}
        </div>
    )
}

export default GeoConservacaoPubli
