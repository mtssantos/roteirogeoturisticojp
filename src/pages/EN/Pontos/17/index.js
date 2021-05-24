import { Navbar } from "../../../../components/EN/Navbar";
import { Carmo } from "./divisions/carmo";
import { Geral } from "./divisions/geral";
import { Alvares } from "./divisions/alvares";

export function PracaDomAdauto(){
    return(
        <>
            <Navbar />
            <div className="container text-1">
                <h2>Dom Adauto Square</h2>
                <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-link active lt" id="nav-geral-tab" data-toggle="tab" href="#nav-geral" role="tab" aria-controls="nav-geral" aria-selected="true">General</a>
                            <a className="nav-link lt" id="nav-carmo-tab" data-toggle="tab" href="#nav-carmo" role="tab" aria-controls="nav-carmo" aria-selected="false">Nossa Senhora do Carmo Church</a>
                            <a className="nav-link lt" id="nav-alvares-tab" data-toggle="tab" href="#nav-alvares" role="tab" aria-controls="nav-alvares" aria-selected="false">Monument to Álvaro Lopes Machado</a>
                        </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-geral" role="tabpanel" aria-labelledby="nav-geral-tab">
                            <Geral />
                        </div>
                        <div className="tab-pane fade" id="nav-carmo" role="tabpanel" aria-labelledby="nav-carmo-tab">
                            <Carmo />
                        </div>
                        <div className="tab-pane fade" id="nav-alvares" role="tabpanel" aria-labelledby="nav-alvares-tab">
                            <Alvares />
                        </div>
                    </div>
                </div>
        </>
    )
}