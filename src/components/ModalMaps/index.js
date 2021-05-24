import Maps from "../../pages/Maps";

export function Modalmaps(){
    return(
        <>
        <div class="modal" tabindex="-1" id="modalmaps" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
                <Maps />
            </div>
            </div>
        </div>
        </div>
        </>
    )
}