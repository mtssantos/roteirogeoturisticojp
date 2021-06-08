import "./index.css";
import arquivos from "./geopatrimonio.json";


function GeopatrimonioPubli(){
    return(
        <div className="publicacoes">
        {arquivos.map(docs => (
            <li><a rel="noreferrer" target="_blank" href={docs.arq}>{docs.document}<br /></a></li>
        ))}
    </div>
    )
}

export default GeopatrimonioPubli
