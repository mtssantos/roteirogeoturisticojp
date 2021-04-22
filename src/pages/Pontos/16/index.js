import { Erario } from './divisions/erario';
import { Geral } from './divisions/geral';
import { Correios } from './divisions/correios';

export function PracaRioBranco(){
    return(
        <>
        <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active lt" id="nav-geral-tab" data-toggle="tab" href="#nav-geral" role="tab" aria-controls="nav-intro" aria-selected="true">Geral</a>
                    <a className="nav-link lt" id="nav-erario-tab" data-toggle="tab" href="#nav-erario" role="tab" aria-controls="nav-historico" aria-selected="false">Escultório de João Pessoa</a>
                    <a className="nav-link lt" id="nav-correios-tab" data-toggle="tab" href="#nav-correios" role="tab" aria-controls="nav-definicao" aria-selected="false">Tribunal de Justiça</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-geral" role="tabpanel" aria-labelledby="nav-geral-tab">
                    <Geral />
                </div>
                <div className="tab-pane fade" id="nav-escultorio" role="tabpanel" aria-labelledby="nav-escultorio-tab">
                    <Erario />
                </div>
                <div className="tab-pane fade" id="nav-tribunal" role="tabpanel" aria-labelledby="nav-tribunal-tab">
                    <Correios />
                </div>
            </div>
        </>
    )
}