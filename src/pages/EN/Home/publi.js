import { Navbar } from "../../../components/EN/Navbar"

function ENPublicações(){
    document.title = "Publicações"
    return(
        <>
            <Navbar />
            <div className="container">
            <h2 className="font-weight-bold">Publicações</h2>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-geoconser-tab" data-toggle="tab" href="#nav-geoconser" role="tab" aria-controls="nav-intro" aria-selected="true">Geoconservação</a>
                    <a className="nav-link" id="nav-geopatri-tab" data-toggle="tab" href="#nav-geopatri" role="tab" aria-controls="nav-historico" aria-selected="false">Geopatrimônio</a>
                    <a className="nav-link" id="nav-geodiver-tab" data-toggle="tab" href="#nav-geodiver" role="tab" aria-controls="nav-definicao" aria-selected="false">Geodiversidade</a>
                    <a className="nav-link" id="nav-geoturismo-tab" data-toggle="tab" href="#nav-geoturismo" role="tab" aria-controls="nav-geourbano" aria-selected="false">Geoturismo</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-geoconser" role="tabpanel" aria-labelledby="nav-geoconser-tab">
                </div>
                <div className="tab-pane fade" id="nav-geopatri" role="tabpanel" aria-labelledby="nav-geopatri-tab">
                </div>
                <div className="tab-pane fade" id="nav-geodiver" role="tabpanel" aria-labelledby="nav-geodiver-tab">
                </div>
                <div className="tab-pane fade" id="nav-geoturismo" role="tabpanel" aria-labelledby="nav-geoturismo-tab">
                </div>
                </div>  
          </div>

        </>
    )
}

export default ENPublicações