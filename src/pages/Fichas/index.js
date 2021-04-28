import NavBar from '../../components/Navbar';
import { documentos } from "./documentos";
import "./index.css"


export function Fichas(){


    return(
        <>
        <NavBar />
        <div className="container">
            <h2>Fichas</h2>
            <div className="row row-cols-1 row-cols-md-2">
                {documentos.map(doc => (
                     <div className="card cartao">
                        <img src={doc.image} className="card-img-top" alt={doc.name} />
                        <div className="card-body">
                            <h5 className="card-title">{doc.name}</h5>
                        </div>
                        <div class="card-body">
                            <a href={doc['document-front']} rel="noreferrer" target="_blank" className="card-link">Frente</a>
                            <a href={doc['document-back']} rel="noreferrer" target="_blank" className="card-link">Verso</a>
                        </div>
                     </div>                     
                ))}
            </div>
        </div>
        </>
    )
}