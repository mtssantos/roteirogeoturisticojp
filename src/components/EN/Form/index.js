function Form(){
    return(
        <div className="modal" id="ModalForm"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">Send an E-mail for us</h3>
            </div>
            <div className="modal-body">
                    <form
                        action="https://formspree.io/f/mjvpzowl"
                        method="POST"
                        >
                        <div className="form-group">
                            <label>
                               Your E-mail:
                                <input className="form-control" type="text" name="_replyto" />
                            </label>
                        </div>   
                        <div className="form-group">
                            <label>
                                Your Message:
                                <textarea className="form-control" name="message"></textarea>
                            </label>
                        </div>
                        <div className="form-group buttons-submit">
                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal" aria-label="Close">
                                Close
                            </button>
                            <button type="submit" className="btn btn-outline-success">Send</button>
                        </div>
                        </form> 
            </div>
            </div>
        </div>
        </div>
        
    )
}

export default Form