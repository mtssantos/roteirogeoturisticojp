import { Navbar } from "../../../../components/EN/Navbar";
import academia_paraibana from "./media/academia_paraibana.jpg"


export function Academia(){
    return(
        <>
        <Navbar />
        <div class="container text-1">
            <h2>Letters Academy Of Paraíba</h2>
            <p className="text-article">It is located at Rua Duque de Caxias, nº 25, on the corner with Rua D. Ulrico, in front of the São Francisco Complex atrium. The land belonged to the Third Order of San Francisco and in 1947 it was sold to the Academy. The existing building had to be demolished and rebuilt due to the poor conditions it was in.</p>
            <p className="text-article">As it is a building of the 20th century built with architectural elements of civilian residence from the colonial period (photo 1) and it also uses massive blocks of limestone on the walls and fences, probably extracted from the quarry of Ilha do Bispo, already in operation in the decade From 1940, its selection as a Place of Interest is justified as an example of the cultural and economic value of the aforementioned ex situ element of geodiversity. The aesthetic value can be seen in the beautiful stonework niches carved in this rock, in the borders of doors and windows, resulting in exquisite craftsmanship. The building was listed by IPHAEP in 1980, following decree nº 8643.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={academia_paraibana}><img src={academia_paraibana} class="img-fluid" alt="" /></a><br />
                            <figurecaption class="figure-caption">Photo 1</figurecaption>
                    </figure>
            </div>
        </div>
        </>
    )
}