import "./index.css";
import arquivos from "./geoconservacao.json";


function GeoConservacaoPubli(){
    return(
        <div className="publicacoes">
            {arquivos.map(docs => (
                <li><a rel="noreferrer" target="_blank" href={docs.arq}>{docs.document}<br /></a></li>
            ))}
        </div>
    )
}

export default GeoConservacaoPubli
