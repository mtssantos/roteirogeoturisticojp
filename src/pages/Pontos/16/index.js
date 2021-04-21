export function PracaRioBranco(){
    return(
        <>
        <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active lt" id="nav-geral-tab" data-toggle="tab" href="#nav-geral" role="tab" aria-controls="nav-intro" aria-selected="true">Geral</a>
                    <a className="nav-link lt" id="nav-escultorio-tab" data-toggle="tab" href="#nav-escultorio" role="tab" aria-controls="nav-historico" aria-selected="false">Escultório de João Pessoa</a>
                    <a className="nav-link lt" id="nav-tribunal-tab" data-toggle="tab" href="#nav-tribunal" role="tab" aria-controls="nav-definicao" aria-selected="false">Tribunal de Justiça</a>
                </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-geral" role="tabpanel" aria-labelledby="nav-geral-tab">
                    <Geral />
                </div>
                <div className="tab-pane fade" id="nav-escultorio" role="tabpanel" aria-labelledby="nav-escultorio-tab">
                    <EsculJP />
                </div>
                <div className="tab-pane fade" id="nav-tribunal" role="tabpanel" aria-labelledby="nav-tribunal-tab">
                    <TriJUS />
                </div>
            </div>
        </>
    )
}