import { Introduçãohidro } from "./hidrografia/introducao";
import { Neotectonica } from "./hidrografia/neotectonica";
import { Aguadoce } from "./hidrografia/fontesaguadoce";

function Hidrografia(){
    return(
        <>
       <nav>
        <div classname="nav nav-tabs" id="nav-tab" role="tablist">
            <a classname="nav-item nav-link active" id="nav-introducao-tab" data-toggle="tab" href="#nav-introducao" role="tab" aria-controls="nav-introducao" aria-selected="true">Introdução</a>
            <a classname="nav-item nav-link" id="nav-neotectonica-tab" data-toggle="tab" href="#nav-neotectonica" role="tab" aria-controls="nav-neotectonica" aria-selected="false">Relação com a Neotectônica</a>
            <a classname="nav-item nav-link" id="nav-fontes-tab" data-toggle="tab" href="#nav-fontes" role="tab" aria-controls="nav-fontes" aria-selected="false">Fontes de Água Doce</a>
        </div>
       </nav>
        <div classname="tab-content" id="nav-tabContent">
        <div classname="tab-pane fade show active" id="nav-introducao" role="tabpanel" aria-labelledby="nav-introducao-tab">
            <Introduçãohidro />
        </div>
        <div classname="tab-pane fade" id="nav-neotectonica" role="tabpanel" aria-labelledby="nav-neotectonica-tab">
            <Neotectonica />
        </div>
        <div classname="tab-pane fade" id="nav-fontes" role="tabpanel" aria-labelledby="nav-fontes-tab">
            <Aguadoce />
        </div>
        </div>
        </>
    )
}

export default Hidrografia