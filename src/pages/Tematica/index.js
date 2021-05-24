import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar"
import "./index.css";

export function ExplorarTematica(){
    return(
        <>
            <NavBar />
            <div className="container">
                <h2 className="font-weight-bold">Exploração Temática</h2>
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Abiótico
                            </button>
                        </h5>
                        </div>

                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                            <div id="accordion-1">
                                <div class="card">
                                    <div class="card-header" id="Geodiversidade">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#geodiver" aria-expanded="true" aria-controls="collapseOne">
                                            Geodiversidade
                                        </button>
                                    </h5>
                                    </div>

                                    <div id="geodiver" class="collapse" aria-labelledby="Geodiversidade" data-parent="#accordion-1">
                                    <div class="card-body">
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a className="nav-item nav-link active" id="nav-agua-tab" data-toggle="tab" href="#nav-agua" role="tab" aria-controls="nav-agua" aria-selected="true">Água</a>
                                                <a className="nav-item nav-link" id="nav-solo-tab" data-toggle="tab" href="#nav-solo" role="tab" aria-controls="nav-solo" aria-selected="false">Solo</a>
                                                <a className="nav-item nav-link" id="nav-relevo-tab" data-toggle="tab" href="#nav-relevo" role="tab" aria-controls="nav-relevo" aria-selected="false">Relevo</a>
                                                <a className="nav-item nav-link" id="nav-rochas-tab" data-toggle="tab" href="#nav-rochas" role="tab" aria-controls="nav-rochas" aria-selected="false">Rochas</a>
                                            </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="nav-agua" role="tabpanel" aria-labelledby="nav-agua-tab">
                                            <nav class="nav flex-column menu-floop">
                                                <Link to="/local/20" className="nav-link local">Fonte de Santo Antônio</Link>
                                                <Link to="/local/2" className="nav-link local">Bica da Maria Feia</Link>
                                                <Link to="/local/8" className="nav-link local">Cacimba do Povo</Link>
                                                <Link to="/local/23" className="nav-link local">Fonte dos Milagres</Link>
                                            </nav>
                                            </div>
                                            <div className="tab-pane fade" id="nav-solo" role="tabpanel" aria-labelledby="nav-solo-tab">
                                                <nav class="nav flex-column menu-floop">
                                                    <Link to="/local/12" className="nav-link local">Arenização do Barreiras</Link>
                                                </nav>
                                            </div>
                                            <div className="tab-pane fade" id="nav-relevo" role="tabpanel" aria-labelledby="nav-relevo-tab">
                                                <nav class="nav flex-column menu-floop">
                                                    <Link to="/local/9" className="nav-link local">Balaustrada das Trincheiras</Link>
                                                    <Link to="/local/11" className="nav-link local">Gruta das Marés</Link>
                                                </nav>
                                            </div>
                                            <div className="tab-pane fade" id="nav-rochas" role="tabpanel" aria-labelledby="nav-rochas-tab">
                                                <nav class="nav flex-column menu-floop">
                                                    <Link to="/local/5" className="nav-link local">Praça da Pedra</Link>
                                                    <Link to="/local/7" className="nav-link local">Afloramento da Formação Gramammme</Link>
                                                    <Link to="/local/10" className="nav-link local">Afloramento da Formação Beberibe</Link>
                                                    <Link to="/local/13" className="nav-link local">Fóssil das Trincheiras</Link>
                                                </nav>                                                
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="Geopatrimonio">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#geopatri" aria-expanded="false" aria-controls="collapseTwo">
                                            Geopatrimônio
                                        </button>
                                    </h5>
                                    </div>
                                    <div id="geopatri" class="collapse" aria-labelledby="Geopatrimonio" data-parent="#accordion-1">
                                    <div class="card-body">
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active" id="nav-geologia-tab" data-toggle="tab" href="#nav-geologia" role="tab" aria-controls="nav-geologia" aria-selected="true">Geologia</a>
                                            <a class="nav-item nav-link" id="nav-geomorfologico-tab" data-toggle="tab" href="#nav-geomorfologico" role="tab" aria-controls="nav-geomorfologico" aria-selected="false">Geomorfológico</a>
                                            <a class="nav-item nav-link" id="nav-hidrologico-tab" data-toggle="tab" href="#nav-hidrologico" role="tab" aria-controls="nav-hidrologico" aria-selected="false">Hidrológico</a>
                                        </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="nav-geologia" role="tabpanel" aria-labelledby="nav-geologia-tab">
                                            <Link to="/local/24" className="nav-link local">Falha de Sanhauá</Link>
                                        </div>
                                        <div class="tab-pane fade" id="nav-geomorfologico" role="tabpanel" aria-labelledby="nav-geomorfologico-tab">
                                            <Link to="/local/14" className="nav-link local">Dolina dos Irerês</Link>
                                        </div>
                                        <div class="tab-pane fade" id="nav-hidrologico" role="tabpanel" aria-labelledby="nav-hidrologico-tab">
                                            <Link to="/local/1" className="nav-link local">Fonte Tambiá</Link>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Cultural
                            </button>
                        </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}