import { Introclima } from './clima/introclima';
import { Elementosclimaticos } from './clima/elementos';

export function Clima(){
    return(
        <>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-item nav-link active" id="nav-introducao-clima-tab" data-toggle="tab" href="#nav-introducao-clima" role="tab" aria-controls="nav-introducao-clima" aria-selected="true">Introdução</a>
                <a class="nav-item nav-link" id="nav-elementos-tab" data-toggle="tab" href="#nav-elementos" role="tab" aria-controls="nav-elementos" aria-selected="false">Elementos Climáticos</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-introducao-clima" role="tabpanel" aria-labelledby="nav-introducao-clima-tab">
                <Introclima />
            </div>
            <div class="tab-pane fade" id="nav-elementos" role="tabpanel" aria-labelledby="nav-elementos-tab">
                <Elementosclimaticos />
            </div>
            </div>
        </>
    )
}