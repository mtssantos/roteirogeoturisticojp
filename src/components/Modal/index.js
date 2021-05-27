
function ModalCriterios(){
    return(
        <>
            <div className="modal" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Critérios</h3>
                </div>
                <div className="modal-body">
                    <p>
                        Foram avaliados qualitativamente 25 locais de interesse geoturístico, tanto associados ao meio cultural (Patrimônio Cultural, num total de 11) quanto ao abiótico (elementos da geodiversidade - 8 e elementos geopatrimoniais -3). As fichas catalográficas de todos estes locais estão disponíveis no link fichas. Os locais de interesse geoturístico associados ao meio abiótico, então, foram avaliados quantitativamente, segundo a proposta de Pereira et al (2019) e Pereira et al (2020), também disponíveis no link ´publicações´. Os roteiros geoturísticos propostos apresentam todos os locais de interesse associados ao meio cultural e aqueles associados ao meio abiótico que foram melhor rankeados na avaliação quantitativa.
                    </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-primary" data-dismiss="modal" aria-label="Close">
                        Fechar
                    </button>
                </div>
                </div>
            </div>
            </div>	
            </>
    )
}

export default ModalCriterios;