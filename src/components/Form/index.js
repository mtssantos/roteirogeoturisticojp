function Form(){
    return(
        <div className="modal" id="ModalForm"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">Mande um e-mail para nós</h3>
            </div>
            <div className="modal-body">
                    <form
                        action="https://formspree.io/f/mjvpzowl"
                        method="POST"
                        >
                        <div className="form-group">
                            <label>
                               Seu E-mail:
                                <input className="form-control" type="text" name="_replyto" />
                            </label>
                        </div>   
                        <div className="form-group">
                            <label>
                                Sua Mensagem:
                                <textarea className="form-control" name="message"></textarea>
                            </label>
                        </div>
                        <div className="form-group buttons-submit">
                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal" aria-label="Close">
                                Fechar
                            </button>
                            <button type="submit" className="btn btn-outline-success">Enviar</button>
                        </div>
                        </form> 
            </div>
            </div>
        </div>
        </div>
        
    )
}

export default Form