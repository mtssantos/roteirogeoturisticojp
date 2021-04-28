import { Definicao } from "../../../components/EN/Geoturism/definicao";
import { Intro } from "../../../components/EN/Geoturism/intro";
import { Historico } from "../../../components/EN/Geoturism/historic";
import { GeoUrb } from "../../../components/EN/Geoturism/geourb";
import { GeoBr } from "../../../components/EN/Geoturism/geobrasil";
import { en_NavBar } from "../../../components/EN/Navbar";




function EN_Geoturism(){
    return(
        <>
          <en_NavBar />
          <div className="container">
            <h2>Texts about Geoturism</h2>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-intro-tab" data-toggle="tab" href="#nav-intro" role="tab" aria-controls="nav-intro" aria-selected="true">Introdução</a>
                    <a className="nav-link" id="nav-historico-tab" data-toggle="tab" href="#nav-historico" role="tab" aria-controls="nav-historico" aria-selected="false">Histórico</a>
                    <a className="nav-link" id="nav-definicao-tab" data-toggle="tab" href="#nav-definicao" role="tab" aria-controls="nav-definicao" aria-selected="false">Definição</a>
                    <a className="nav-link" id="nav-geourbano-tab" data-toggle="tab" href="#nav-geourbano" role="tab" aria-controls="nav-geourbano" aria-selected="false">Geoturismo Urbano</a>
                    <a className="nav-link" id="nav-geobrasil-tab" data-toggle="tab" href="#nav-geobrasil" role="tab" aria-controls="nav-geobrasil" aria-selected="false">Geoturismo no Brasil</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-intro" role="tabpanel" aria-labelledby="nav-intro-tab">
                    <Intro />
                </div>
                <div className="tab-pane fade" id="nav-historico" role="tabpanel" aria-labelledby="nav-historico-tab">
                    <Historico />
                </div>
                <div className="tab-pane fade" id="nav-definicao" role="tabpanel" aria-labelledby="nav-definicao-tab">
                    <Definicao />
                </div>
                <div className="tab-pane fade" id="nav-geourbano" role="tabpanel" aria-labelledby="nav-geourbano-tab">
                    <GeoUrb />
                </div>
                <div className="tab-pane fade" id="nav-geobrasil" role="tabpanel" aria-labelledby="nav-geobrasil-tab">
                    <GeoBr />
                </div>
                </div>  
          </div>
        </>
    )
}

export default EN_Geoturism;