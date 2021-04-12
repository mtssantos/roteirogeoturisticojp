import NavBar from "../../../components/Navbar"
import { Geral } from "./divisions/geral";
import "../1/index.css"
import { Obelisco } from "./divisions/obe";
import { Busto } from "./divisions/bust";



export function PracaIndepen(){
    return(
        <>
        <NavBar />
        <div className="container text-1">
        <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active lt" id="nav-geral-tab" data-toggle="tab" href="#nav-geral" role="tab" aria-controls="nav-intro" aria-selected="true">Geral</a>
                    <a className="nav-link lt" id="nav-obelisco-tab" data-toggle="tab" href="#nav-obelisco" role="tab" aria-controls="nav-historico" aria-selected="false">Obelisco</a>
                    <a className="nav-link lt" id="nav-busto-tab" data-toggle="tab" href="#nav-busto" role="tab" aria-controls="nav-definicao" aria-selected="false">Busto de Epitácio Pessoa</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-geral" role="tabpanel" aria-labelledby="nav-geral-tab">
                   <Geral /> 
                </div>
                <div className="tab-pane fade" id="nav-obelisco" role="tabpanel" aria-labelledby="nav-obelisco-tab">
                    <Obelisco />
                </div>
                <div className="tab-pane fade" id="nav-busto" role="tabpanel" aria-labelledby="nav-busto-tab">
                    <Busto />
                </div>
                </div>
        </div>  
        </>
    )
}