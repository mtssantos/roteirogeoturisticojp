import { Geral } from "./divisions/geral";
import { Matriz } from "./divisions/matriz";
import { Lourdes } from "./divisions/lourdes";
import { Navbar } from "../../../../components/EN/Navbar";


export function PracaDomUlrico(){
    return(
        <>
        <Navbar />
        <div className="container text-1">
            <h2>Dom Ulrico Square</h2>
            <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-link active lt" id="nav-geral-tab" data-toggle="tab" href="#nav-geral" role="tab" aria-controls="nav-geral" aria-selected="true">General</a>
                        <a className="nav-link lt" id="nav-matriz-tab" data-toggle="tab" href="#nav-matriz" role="tab" aria-controls="nav-matriz" aria-selected="false">Mother Church</a>
                        <a className="nav-link lt" id="nav-lourdes-tab" data-toggle="tab" href="#nav-lourdes" role="tab" aria-controls="nav-lourdes" aria-selected="false">Statue to Nossa Senhora de Lourdes</a>
                    </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-geral" role="tabpanel" aria-labelledby="nav-geral-tab">
                        <Geral />
                    </div>
                    <div className="tab-pane fade" id="nav-matriz" role="tabpanel" aria-labelledby="nav-matriz-tab">
                        <Matriz />
                    </div>
                    <div className="tab-pane fade" id="nav-lourdes" role="tabpanel" aria-labelledby="nav-lourdes-tab">
                        <Lourdes />
                    </div>
                </div>
            </div>
    </>
    )
}