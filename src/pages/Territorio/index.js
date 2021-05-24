import NavBar from "../../components/Navbar";
import { Territ } from "../../components/Territ"

function Territorio(){
    return(
        <>
            <NavBar />
            <div class="container text-1">
                <h2 className="font-weight-bold">Nosso Terrítorio</h2>
                <Territ />
            </div>
        </>
    )
}

export default Territorio