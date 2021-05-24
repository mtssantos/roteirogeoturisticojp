import { Navbar } from "../../../../components/EN/Navbar";
import fossil_1 from "./media/fossil_1.JPG"

export function Fossil(){
    return(
        <>
        <Navbar />
        <div class="container">
            <h2>Trench Fossil</h2>
                <p className="text-article">It is Trench Street, nº 194. It concerns a laminated limestone floor with the presence of a fish fossil of the genus Dastilbe (dastilbe elongatus Santos), with the dimensions of 7 cm x 2 cm (Photo 1).</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={fossil_1}><img src={fossil_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">This ornamental rock is known as ‘Pedra Cariri’, widely sold in building materials and marble shops in the city, used for wall, floor and sidewalk coverings. The quarries are located in Ceará, in the municipalities of Porteiras, Barbalha, Crato, Nova Olinda and Santana do Cariri, inside the Araripe Geopark, in the Cariri Stone Geosite, associated with the Crato Member, from the Santana Formation, east sector of the Araripe Basin .</p>
                <p className="text-article">The Crato Member corresponds to laminated micritic limestones and clay-carbonate rhythms that are interspersed with fine shales and sandstones, of Cretaceous age (112 Ma), associated with a carbonated lake environment, with calm and swampy waters, whose abundant and diversified fossil records are explained by the intense local biodiversity (insects, arachnids, fish, algae, among others) in a good state of fossilization (VIANA and NEUMAN, 2002).</p>
                <p className="text-article">A fossiliferous rock is something rare in the rocks, even ornamental, present in the Historic Center of João Pessoa. This characteristic per se gives it importance as an element of geodiversity with a geological (paleontological) character.</p>
	

        </div>
        </>
    )
}