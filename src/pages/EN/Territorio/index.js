import { Navbar } from "../../../components/EN/Navbar";
import { ENTerrit } from "../../../components/EN/Territ"

function ENTerritorio(){
    return(
        <>
            <Navbar />
            <div class="container text-1">
                <h2 className="font-weight-bold">Our Territory</h2>
                <ENTerrit />
            </div>
        </>
    )
}

export default ENTerritorio;