import { Navbar } from '../../../components/EN/Navbar';
import { documentos } from "./documentos";
import "./index.css"


export function ENFichas(){

    return(
        <>
        <Navbar />
        <div className="container">
            <h2>Files</h2>
            <div className="row row-cols-1 row-cols-md-3">
                {documentos.map(doc => (
                    <div className="col mb-4">
                     <div className="card cartao">
                        <img src={doc.image} className="card-img-top" alt={doc.name} />
                        <div className="card-body">
                            <h5 className="card-title">{doc.name}</h5>
                        </div>
                        <div class="card-body">
                            <a href={doc['document-front']} rel="noreferrer" target="_blank" className="card-link">Front</a>
                            <a href={doc['document-back']} rel="noreferrer" target="_blank" className="card-link">Verse</a>
                        </div>
                     </div>  
                     </div>                   
                ))}
            </div>
        </div>
        </>
    )
}