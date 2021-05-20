import NavBar from "../../../../components/Navbar";
import casa_1 from "./media/casa_1.JPG";
import casa_2 from "./media/casa_2.JPG";

export function CasaRosa(){
    return(
        <>
        <NavBar />
        <div class="container text-1">
            <h2>Rose Quartz House</h2>
                <p className="text-article">The Place of Interest is located outside the perimeter of the Historic Center, on the corner of Avenues Maximiano de Figueiredo and Camilo de Holanda, in the center, about 500 meters from Praça da Independência. </p>
                <p className="text-article">It concerns a two-story residence, whose external walls are fully decorated with thousands of centimetric fragments of pink quartz (photo 1a), while the windows contain fragments of milky quartz (photo 1b). It was selected as a Place of Interest because it is the only representative in the area to present minerals as decorative elements of the structure of a building, which gives it scientific and aesthetic value.</p>
                            <div class="text-center">
                                    <figure class="figure">
                                            <a href={casa_1}><img src={casa_1} class="img-fluid" alt="" /></a>
                                            <figcaption class="figure-caption">Photo 1a</figcaption>
                                    </figure>
                                </div>
                            <div class="text-center">
                                    <figure class="figure">
                                            <a href={casa_2}><img src={casa_2} class="img-fluid" alt="" /></a>
                                            <figcaption class="figure-caption">Photo 1b</figcaption>
                                        </figure>
                            </div>

                <p className="text-article">The Seridó microregion, in the States of Paraíba and Rio Grande do Norte, presents a geology conducive to the crystallization of heterogeneous (zoned) pegmatitic bodies, with nuclei (zone IV) filled with pink and milky quartz, which have been explored since World War II (PEREIRA, 2000). In counties such as Pedra Lavrada, Picuí and Frei Martinho, in Seridó Paraiba, dozens of open pit mines are mined by artisanal mines, which left scars in the landscape, with tons of mineral waste that were not used for sale. Quartz has, in its composition, silicon, used in the computer industry for the production of computer chips, also in the gemological industry, in earrings and rings. Many spinners [1] by João Pessoa are adorned with this mineral. So, probably, the quartz that adorns the house came from some pegmatite from Seridó, in Paraíba or Rio Grande do Norte.</p>
                <hr />
                <span>[1] Rotundas.</span>
        </div>
        </>
    )
}