import { Navbar } from "../../../../components/EN/Navbar";
import "../1/index.css"
import { FaculDireito } from "./divisions/dir"
import { EsculJP } from "./divisions/esc"
import { Geral } from "./divisions/geral"
import { TriJUS } from "./divisions/jus"
import { PalacioRed } from "./divisions/red"

export function PracaJoao(){
    return(
        <>
        <Navbar />
        <div className="container text-1">
            <h2>João Pessoa Square</h2>
        <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active lt" id="nav-geral-tab" data-toggle="tab" href="#nav-geral" role="tab" aria-controls="nav-intro" aria-selected="true">General</a>
                    <a className="nav-link lt" id="nav-escultorio-tab" data-toggle="tab" href="#nav-escultorio" role="tab" aria-controls="nav-historico" aria-selected="false">Escultório de João Pessoa</a>
                    <a className="nav-link lt" id="nav-tribunal-tab" data-toggle="tab" href="#nav-tribunal" role="tab" aria-controls="nav-definicao" aria-selected="false">Court of Justice</a>
                    <a className="nav-link lt" id="nav-direito-tab" data-toggle="tab" href="#nav-direito" role="tab" aria-controls="nav-definicao" aria-selected="false">Law School</a>
                    <a className="nav-link lt" id="nav-redencao-tab" data-toggle="tab" href="#nav-redencao" role="tab" aria-controls="nav-definicao" aria-selected="false">Redemption Pallace</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-geral" role="tabpanel" aria-labelledby="nav-geral-tab">
                    <Geral />
                </div>
                <div className="tab-pane fade" id="nav-escultorio" role="tabpanel" aria-labelledby="nav-escultorio-tab">
                    <EsculJP />
                </div>
                <div className="tab-pane fade" id="nav-tribunal" role="tabpanel" aria-labelledby="nav-tribunal-tab">
                    <TriJUS />
                </div>
                <div className="tab-pane fade" id="nav-direito" role="tabpanel" aria-labelledby="nav-direito-tab">
                    <FaculDireito />
                </div>
                <div className="tab-pane fade" id="nav-redencao" role="tabpanel" aria-labelledby="nav-redencao-tab">
                    <PalacioRed />
                </div>
                </div>
        </div>  
        </>
    )
}