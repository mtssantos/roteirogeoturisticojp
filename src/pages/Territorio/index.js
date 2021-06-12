import NavBar from "../../components/Navbar";
import { Territ } from "../../components/Territ"

function Territorio(){
    document.title = "Nosso Território"
    return(
        <>
            <NavBar />
            <div class="container text-1">
                <h2 className="font-weight-bold">Nosso Território</h2>
                <Territ />
            </div>
        </>
    )
}

export default Territorio
