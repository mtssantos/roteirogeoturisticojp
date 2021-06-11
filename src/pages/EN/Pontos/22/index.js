import { Navbar } from "../../../../components/EN/Navbar";
import mosteiro from './media/mosteiro.JPG';

export function Mosteiro(){
    return(
        <>
        <Navbar />
        <div class="container text-1">
            <h2>San Benedict Monastery</h2>
            <p className="text-article">It is located at the beginning of New Street (now General Osório Street), close to D. Ulrico Square.</p>
            <p className="text-article">During the Dutch invasion, according to reports by Herc kmans, only the walls had been erected, the Dutch having used it as bulwarks due to the excellent strategic position, after the construction of a trench around the monastery. However, it was only in the 18th century that the building approached its current characteristics, with the insertion of the ornaments of the nave and chancel, including the frontispiece, with completion date of 1761, with limestone as the predominant raw material in the structure. In 1743, the pulpit and the spiral staircase leading to the convent's main hall were completed.</p>
            <p className="text-article">It corresponds to one of the most beautiful representations of Brazilian Baroque architecture, with the coat of arms of the Benedictine Order on the pediment, its three doors in full arch, bordered by glasses and exquisite stonework both outside and inside (photo 1). At the top, the copper vane in the shape of a lion characterizes the Benedictine order. The Church was listed by IPHAN in 1957, by means of decree nº 63.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={mosteiro}><img src={mosteiro} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Photo 1</figcaption>
                    </figure>
            </div>
            <p className="text-article">As in all buildings of the colonial period, whether public, religious or residential, the limestone of the Gramame Formation was the geo-resource used in the construction of the São Bento Monastery. This limestone was probably extracted from quarries located near the monastery, specifically on the west side behind the Franciscan Complex. The limestone, massive and poor in siliciclastic material, with a grayish-cream color, has textural and mineralogical characteristics similar to facies i) of the 'Outcrop of the Gramame Formation'.</p>
        </div>
        </>
    )
}