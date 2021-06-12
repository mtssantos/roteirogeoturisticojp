import { Introduçãohidro } from "./hidrografia/introducao";
import { Neotectonica } from "./hidrografia/neotectonica";
import { Aguadoce } from "./hidrografia/fontesaguadoce";
import "./index.css";

function Hidrografia(){
    return(
        <>
       <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <a class="nav-link active" id="nav-introducaohidro-tab" data-toggle="tab" href="#nav-introducaohidro" role="tab" aria-controls="nav-introducaohidro" aria-selected="true">Introdução</a>
                <a class="nav-link" id="nav-neotectonica-tab" data-toggle="tab" href="#nav-neotectonica" role="tab" aria-controls="nav-neotectonica" aria-selected="false">Relação com a Neotectônica</a>
                <a class="nav-link" id="nav-aguadoce-tab" data-toggle="tab" href="#nav-aguadoce" role="tab" aria-controls="nav-aguadoce" aria-selected="false">Fontes de Água Doce</a>
            </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade active" id="nav-introducaohidro" role="tabpanel" aria-labelledby="nav-introducaohidro-tab">
                <Introduçãohidro />
            </div>
            <div class="tab-pane fade" id="nav-neotectonica" role="tabpanel" aria-labelledby="nav-neotectonica-tab">
                <Neotectonica />
            </div>
            <div class="tab-pane fade" id="nav-aguadoce" role="tabpanel" aria-labelledby="nav-aguadoce-tab">
                <Aguadoce />
            </div>
        </div>
        </>
    )
}

export default Hidrografia