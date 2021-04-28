function ModalCriterios(){
    return(
        <>
            <div className="modal" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">Criteria</h3>
                </div>
                <div className="modal-body">
                    <p>
                    25 sites of geotouristic interest were qualitatively evaluated, both associated with the cultural environment (Cultural Heritage, in a total of 11) and the abiotic (elements of geodiversity - 8 and geopatrimonial elements -3). The catalog sheets of all these places are available at the link 'sheets'. The places of geotouristic interest associated with the abiotic environment, then, were evaluated quantitatively, according to the proposal of Pereira et al (2019) and Pereira et al (2020), also available in the link 'publications'. The proposed geotouristic itineraries show all the places of interest associated with the cultural environment and those associated with the abiotic environment that were better ranked in the quantitative assessment.
                    </p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-primary" data-dismiss="modal" aria-label="Close">
                        Close
                    </button>
                </div>
                </div>
            </div>
            </div>	
            </>
    )
}

export default ModalCriterios;