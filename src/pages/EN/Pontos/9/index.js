import NavBar from "../../../../components/Navbar";
import bala_1 from "./media/bala_1.JPG";
import bala_2 from "./media/bala_2.jpg";
import "../1/index.css";


export function Balaustrada(){
    return(
        <>
        <NavBar />
        <div className="container">
            <h2>Trench Balustrade</h2>
                    <p className="text-article">This Place of Interest was selected for its cultural and natural heritage elements, mainly the panoramic view of a valley, in this case a drainage amphitheater, an abyss, in which the construction of the aforementioned 'balustrade', at the beginning of the century XX, aimed at protecting passers-by on Avenida João da Mata (photo 1). Thus, this place, with an altitude of 44 meters, has a privileged view of this form of relief. In addition, at the rear of the balustrade, several buildings dating from the early 20th century in eclectic and art nouveau style, increase the cultural importance of the Place of Interest, with the entire architectural ensemble being listed by IPHAEP in 1980, through decree No. 8627, in addition to of a bust in honor of Camilo de Holanda.</p>
                    <div className="text-center">
                            <figure className="figure">
                                    <a href={bala_1}><img src={bala_1} className="img-fluid" alt="" /></a>
                                    <figcaption className="figure-caption">Photo 1</figcaption>
                            </figure>
                    </div>
                    <p className="text-article">Thus, this point was selected as a Place of Interest for adding heritage elements in a small area: cultural, from contemporary buildings to the construction of the balustrade and geodiversity, in this case a form of relief that plays a crucial role in understanding the geological history of the Paraíba Basin and that cannot be disaggregated from the historical-cultural aspects.</p>
                    <p className="text-article">The path on which the balustrade was built was, in the mid-twentieth century, a walking place for the wealthy classNamee. From a belvedere with benches, in the current spinner, there was a beautiful view of the Sanhauá River in the distance, separated by a cliff covered with leafy trees. From that time to today, the spinner remained, with the aforementioned bust honoring the person responsible for the work, on a land that shows signs of sinking [1], in addition to the valley, with the forest cleared and replaced by residences and in the background, the factory of the Intercement.</p>
                    <p className="text-article">The balustrade, built in the government of Camilo de Holanda in 1917, used limestone of unknown origin. The exploration of limestone in Ilha do Bispo does not appear in the literature. It may be that it came from the quarries on the Roger side, the same ones that they provided for the building of the churches of the colonial period or, more likely, due to the proximity, to Tiriri Island, where since the end of the 19th century there was a cement factory, the oldest in Latin America. This limestone is predominantly massive and its mineralogical description can be seen, in a thin layer, in facies i) of the Site 'Outcrop of the Gramame Formation'. The bust, in bronze, tops a pedestal formed by a granite with a fine phaneritic texture, in two micas, with the crystals slightly aligned.</p>
                    <p className="text-article">The balustrade touches part of an extremely fitted amphitheater, whose convex-rectilinear slopes, show structural terraces that delimit the contact of the Maastrichtian limestone of the <b> Gramame Formation </b>, below, of the Plio-Pleistocene sandstones of the <b> Barreiras Formation </b>, the top. From these terraces, the exurgencies that gave rise, for example, to the Cacimba do Povo fountain, were selected as a Place of Interest (photo 2).</p>
                    <div className="text-center">
                            <figure className="figure">
                                    <a href={bala_2}><img src={bala_2} className="img-fluid" alt="" /></a>
                                    <figcaption className="figure-caption">Photo 2</figcaption>
                            </figure>
                    </div>

                    <hr />
                    <span>[1] The pedestal and the bust are visibly tilted, a consequence of the initial phase of a ravination, just behind the construction, as well as part of the balustrade showing cracks.</span>

        </div>
        </>
    )
}