import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar"
import "./index.css";

function ExplorarTematica(){
    document.title = "Exploração Temática"
    return(
        <>
            <NavBar />
            <div class="container">
                <h2 class="font-weight-bold">Exploração Temática</h2>
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
                                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                                <a class="nav-item nav-link active" id="nav-agua-tab" data-toggle="tab" href="#nav-agua" role="tab" aria-controls="nav-agua" aria-selected="true">Água</a>
                                                <a class="nav-item nav-link" id="nav-solo-tab" data-toggle="tab" href="#nav-solo" role="tab" aria-controls="nav-solo" aria-selected="false">Solo</a>
                                                <a class="nav-item nav-link" id="nav-relevo-tab" data-toggle="tab" href="#nav-relevo" role="tab" aria-controls="nav-relevo" aria-selected="false">Relevo</a>
                                                <a class="nav-item nav-link" id="nav-rochas-tab" data-toggle="tab" href="#nav-rochas" role="tab" aria-controls="nav-rochas" aria-selected="false">Rochas</a>
                                            </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="nav-agua" role="tabpanel" aria-labelledby="nav-agua-tab">
                                            <nav class="nav flex-column menu-floop">
                                                <Link to="/local/20" class="nav-link local">Fonte de Santo Antônio</Link>
                                                <Link to="/local/2" class="nav-link local">Bica da Maria Feia</Link>
                                                <Link to="/local/8" class="nav-link local">Cacimba do Povo</Link>
                                                <Link to="/local/23" class="nav-link local">Fonte dos Milagres</Link>
                                            </nav>
                                            </div>
                                            <div class="tab-pane fade" id="nav-solo" role="tabpanel" aria-labelledby="nav-solo-tab">
                                                <nav class="nav flex-column menu-floop">
                                                    <Link to="/local/12" class="nav-link local">Arenização do Barreiras</Link>
                                                </nav>
                                            </div>
                                            <div class="tab-pane fade" id="nav-relevo" role="tabpanel" aria-labelledby="nav-relevo-tab">
                                                <nav class="nav flex-column menu-floop">
                                                    <Link to="/local/9" class="nav-link local">Balaustrada das Trincheiras</Link>
                                                    <Link to="/local/11" class="nav-link local">Gruta das Marés</Link>
                                                </nav>
                                            </div>
                                            <div class="tab-pane fade" id="nav-rochas" role="tabpanel" aria-labelledby="nav-rochas-tab">
                                                <nav class="nav flex-column menu-floop">
                                                    <Link to="/local/5" class="nav-link local">Praça da Pedra</Link>
                                                    <Link to="/local/7" class="nav-link local">Afloramento da Formação Gramammme</Link>
                                                    <Link to="/local/10" class="nav-link local">Afloramento da Formação Beberibe</Link>
                                                    <Link to="/local/13" class="nav-link local">Fóssil das Trincheiras</Link>
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
                                            <Link to="/local/24" class="nav-link local">Falha de Sanhauá</Link>
                                        </div>
                                        <div class="tab-pane fade" id="nav-geomorfologico" role="tabpanel" aria-labelledby="nav-geomorfologico-tab">
                                            <Link to="/local/14" class="nav-link local">Dolina dos Irerês</Link>
                                        </div>
                                        <div class="tab-pane fade" id="nav-hidrologico" role="tabpanel" aria-labelledby="nav-hidrologico-tab">
                                            <Link to="/local/1" class="nav-link local">Fonte Tambiá</Link>
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
                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link" id="nav-obelisco-tab" data-toggle="tab" href="#nav-obelisco" role="tab" aria-controls="nav-obelisco" aria-selected="true">Obelisco</a>
                                <a class="nav-item nav-link" id="nav-pedestral-tab" data-toggle="tab" href="#nav-pedestral" role="tab" aria-controls="nav-pedestral" aria-selected="false">Pedestral</a>
                                <a class="nav-item nav-link" id="nav-residencia-tab" data-toggle="tab" href="#nav-residencia" role="tab" aria-controls="nav-residencia" aria-selected="false">Residência</a>
                                <a class="nav-item nav-link" id="nav-cemiterio-tab" data-toggle="tab" href="#nav-cemiterio" role="tab" aria-controls="nav-cemiterio" aria-selected="true">Cemitério/Túmulo</a>
                                <a class="nav-item nav-link" id="nav-palacio-tab" data-toggle="tab" href="#nav-palacio" role="tab" aria-controls="nav-palacio" aria-selected="false">Palácio</a>
                                <a class="nav-item nav-link" id="nav-igreja-tab" data-toggle="tab" href="#nav-igreja" role="tab" aria-controls="nav-igreja" aria-selected="false">Igreja</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade" id="nav-obelisco" role="tabpanel" aria-labelledby="nav-obelisco-tab">
                                <nav class="nav flex-column menu-floop">
                                        <Link to="/local/3" class="nav-link local">Obelisco na Praça da Independência</Link>
                                        <Link to="/local/4" class="nav-link local">Escultório de João Pessoa</Link>
                                </nav>
                            </div>
                            <div class="tab-pane fade" id="nav-pedestral" role="tabpanel" aria-labelledby="nav-pedestral-tab">
                                <nav class="nav flex-column menu-floop">
                                    <Link to="/local/18" class="nav-link local">Jardim dos Academos</Link>
                                    <Link to="/local/4" class="nav-link local">Faculdade de direito</Link>
                                    <Link to="/local/3" class="nav-link local">Busto de Epitácio Pessoa</Link>
                                    <Link to="/local/21" class="nav-link local">Éstatua em homenagem a Nossa Senhora de Lourdes</Link>
                                    <Link to="/local/17" class="nav-link local">Monumento a Álvares Lopes Machado</Link>
                                    <Link to="/local/21" class="nav-link local">Monumento a Nossa Senhora das Neves</Link>
                                </nav>
                            </div>
                            <div class="tab-pane fade" id="nav-residencia" role="tabpanel" aria-labelledby="nav-residencia-tab">
                                <nav class="nav flex-column menu-floop">
                                    <Link to="/local/18" class="nav-link local">Academia Paraibana de Letras</Link>
                                    <Link to="/local/16" class="nav-link local">Casa dos Correios</Link>
                                    <Link to="/local/16" class="nav-link local">Casa do Erário</Link>
                                    <Link to="/local/25" class="nav-link local">Casa do Quartzo Rosa</Link>
                                </nav>
                            </div>
                            <div class="tab-pane fade" id="nav-cemiterio" role="tabpanel" aria-labelledby="nav-cemiterio-tab">
                                <nav class="nav flex-column menu-floop">
                                    <Link to="/local/6" class="nav-link local">Cemitério Senhor da Boa Sentença</Link>
                                    <Link to="/local/4" class="nav-link local">Tribunal de Justiça</Link>
                                </nav>
                            </div>
                            <div class="tab-pane fade" id="nav-palacio" role="tabpanel" aria-labelledby="nav-palacio-tab">
                                <nav class="nav flex-column menu-floop">
                                    <Link to="/local/4" class="nav-link local">Palácio da Redenção</Link>
                                </nav>
                            </div>
                            <div class="tab-pane fade" id="nav-igreja" role="tabpanel" aria-labelledby="nav-igreja-tab">
                                <nav class="nav flex-column menu-floop">
                                    <Link to="/local/15" class="nav-link local">Santa Casa da Misericórdia</Link>
                                    <Link to="/local/17" class="nav-link local">Igreja Nossa Senhora do Carmo</Link>
                                    <Link to="/local/22" class="nav-link local">Mosteiro de São Bento</Link>
                                    <Link to="/local/19" class="nav-link local">Centro Cultural São Francisco</Link>
                                </nav>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExplorarTematica