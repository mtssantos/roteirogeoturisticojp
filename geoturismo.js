import arquivos from "./geoturismo.json";
import "./index.css";

function Geoturismpubli(){
    return(
        <div className="publicacoes">
            {arquivos.map(docs => (
                <li><a rel="noreferrer" target="_blank" href={docs.arq}>{docs.document}<br /></a></li>
            ))}
        </div>
    )
}

export default Geoturismpubli;
