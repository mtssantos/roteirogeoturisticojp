import { Navbar } from "../../../../components/EN/Navbar";
import { Erario } from './divisions/erario';
import { Geral } from './divisions/geral';
import { Correios } from './divisions/correios';

export function PracaRioBranco(){
    return(
        <>
        <Navbar />
        <div className="container text-1">
            <h2>White River Square</h2>
            <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-link active lt" id="nav-geral-tab" data-toggle="tab" href="#nav-geral" role="tab" aria-controls="nav-geral" aria-selected="true">General</a>
                        <a className="nav-link lt" id="nav-erario-tab" data-toggle="tab" href="#nav-erario" role="tab" aria-controls="nav-erario" aria-selected="false">Tales House (From The Treasury)</a>
                        <a className="nav-link lt" id="nav-correios-tab" data-toggle="tab" href="#nav-correios" role="tab" aria-controls="nav-correios" aria-selected="false">Post Office</a>
                    </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-geral" role="tabpanel" aria-labelledby="nav-geral-tab">
                        <Geral />
                    </div>
                    <div className="tab-pane fade" id="nav-erario" role="tabpanel" aria-labelledby="nav-erario-tab">
                        <Erario />
                    </div>
                    <div className="tab-pane fade" id="nav-correios" role="tabpanel" aria-labelledby="nav-correios-tab">
                        <Correios />
                    </div>
                </div>
            </div>
        </>
    )
}