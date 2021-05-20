import NavBar from "../../../components/Navbar";
import { Territ } from "../../../components/Territ"

export function Territorio(){
    return(
        <>
            <NavBar />
            <div class="container text-1">
                <h2>Our Territory</h2>
                <Territ />
            </div>
        </>
    )
}