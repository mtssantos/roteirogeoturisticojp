import { Evolucao } from "./bacias/evolucao";
import { Tectonica } from "./bacias/tectonica";
import { Unidades } from "./bacias/unidades";

export function Bacias(){
    return(
        <>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="evolucao-tab" data-toggle="tab" href="#evolucao" role="tab" aria-controls="evolucao" aria-selected="true">Evolução</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="unidades-tab" data-toggle="tab" href="#unidades" role="tab" aria-controls="unidades" aria-selected="false">Unidades Litoestratigráficas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="tectonica-tab" data-toggle="tab" href="#tectonica" role="tab" aria-controls="tectonica" aria-selected="false">Tectônica</a>
        </li>
        </ul>
        <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="evolucao" role="tabpanel" aria-labelledby="evolucao-tab">
            <Evolucao />
        </div>
        <div class="tab-pane fade" id="unidades" role="tabpanel" aria-labelledby="unidades-tab">
            <Unidades />
        </div>
        <div class="tab-pane fade" id="tectonica" role="tabpanel" aria-labelledby="tectonica-tab">
            <Tectonica />
        </div>
        </div>
        </>
    )
}