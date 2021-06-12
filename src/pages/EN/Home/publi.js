import { Navbar } from "../../../components/EN/Navbar";
import GeodiversidadePubli from "../../../components/Publi/geodiversidade";
import GeopatrimonioPubli from "../../../components/Publi/geopatrimonio";
import Geoturismpubli from "../../../components/Publi/geoturismo";
import GeoConservacaoPubli from "../../../components/Publi/geoconservacao";

function ENPublicações(){
    document.title = "Publishing"
    return(
        <>
            <Navbar />
            <div className="container">
            <h2 className="font-weight-bold">Publishing</h2>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-geoconser-tab" data-toggle="tab" href="#nav-geoconser" role="tab" aria-controls="nav-intro" aria-selected="true">Geoconservation</a>
                    <a className="nav-link" id="nav-geopatri-tab" data-toggle="tab" href="#nav-geopatri" role="tab" aria-controls="nav-historico" aria-selected="false">Geopatrimony</a>
                    <a className="nav-link" id="nav-geodiver-tab" data-toggle="tab" href="#nav-geodiver" role="tab" aria-controls="nav-definicao" aria-selected="false">Geodiversity</a>
                    <a className="nav-link" id="nav-geoturismo-tab" data-toggle="tab" href="#nav-geoturismo" role="tab" aria-controls="nav-geourbano" aria-selected="false">Geotourism</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active docs" id="nav-geoconser" role="tabpanel" aria-labelledby="nav-geoconser-tab">
                    <GeoConservacaoPubli />
                </div>
                <div className="tab-pane fade docs" id="nav-geopatri" role="tabpanel" aria-labelledby="nav-geopatri-tab">
                    <GeopatrimonioPubli />
                </div>
                <div className="tab-pane fade docs" id="nav-geodiver" role="tabpanel" aria-labelledby="nav-geodiver-tab">
                    <GeodiversidadePubli />
                </div>
                <div className="tab-pane fade docs" id="nav-geoturismo" role="tabpanel" aria-labelledby="nav-geoturismo-tab">
                    <Geoturismpubli />
                </div>
                </div>  
          </div>

        </>
    )
}

export default ENPublicações