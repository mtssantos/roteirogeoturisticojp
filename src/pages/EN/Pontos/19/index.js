import { Navbar } from "../../../../components/EN/Navbar";
import sao_1 from "./media/sao_1.jpg";
import sao_2 from "./media/sao_2.jpg";
import sao_3 from "./media/sao_3.jpg";
import sao_4 from "./media/sao_4.JPG";
import sao_5 from "./media/sao_5.JPG";
import sao_6 from "./media/sao_6.JPG";

export function SaoFrancisco(){
    return(
        <>
        <Navbar />
        <div class="container text-1">
                <h2>Cultural Center San Fransciso</h2>
                <p className="text-article">It is located at San Francisco Square, beginning of Duque de Caxias street. The Santo Antônio Church, the San Francisco Convent and the third order of San Francisco (figure 1) are part of the complex, plus the vegetable garden with the Santo Antônio fountain, which is a Place of Interest that will be broken down separately later. For being among the most beautiful representatives of national Baroque architecture, a beautiful artistic expression in the art of Portuguese stonework, in addition to the presence of heritage tiles on the walls of the churchyard and fossils on its floor, this place is justified as Geotourism Interest.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_1}><img src={sao_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Figure 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">The group of Franciscans, which had begun to be erected in the early days of the foundation of the city, and whose building had remained intact in the Dutch period, had its historical evolution narrated by Fr. According to Jaboatão (1861), in the middle of the 17th century, the Convent would have to be rebuilt, while the Church was restricted to a large townhouse with a corridor, towards the chancel, facing the source. Using the residents and promptly rescued, he returned to the works of the church and convent in 1718. The facade is finished in 1779, according to an inscription on the frontispiece, the tower in 1783 (PINTO, 1977) and the churchyard wall in 1788 (BARBOSA , 1953), these being the last completed works of the group.</p>
                <p className="text-article">The whole set was built on the basis of limestone, abundant on the Franciscans' own site and explored in several quarries, being an example of the “Franciscan school” in stonework, architecture, painting, carving and tiles.</p>
                <p className="text-article">The churchyard floor has 40 x 20 cm cream-colored solid limestone blocks, some with mineralized mollusk shells (photo 1a). Belonging to the Gramame Formation, of Maastrichtian age (71-66 Ma), it represents the first stages of a low energy marine environment, with tectonic calm.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_2}><img src={sao_2} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 1a</figcaption>
                        </figure>
                </div>

                <p className="text-article">However, archaeological work carried out by IPHAN, in September 2015, detected the presence of a floor below the current one, made up of ceramics and bricks, probably the original floor of the churchyard. The churchyard is flanked by two types of smooth and stucco tile panels, which are interspersed: white tiles and white and blue tiles. Among them, three niches on each side lined with decorative polychrome tiles in blue tones on a white background, representing the saga of Via Crucis. The work is attributed to the Portuguese Policarpo de Oliveira Bernardes, from the 18th century (PINHEIRO, 2005). All of these panels have serious structural defects, such as detachment of the wall, cracks and wrapping, even though, in 2010, they underwent a restoration process, carried out by the students of the Workshop-School (photo 1b). </p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_3}><img src={sao_3} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 1b</figcaption>
                        </figure>		
                </div>

                <p className="text-article">The Santo Antônio Church has works of art of inestimable value, such as the altars, richly ornamented and gold-plated; a grand panel, more than 40 meters long, that adorns the nave's ceiling; pulpit, with a frame at the entrance, topped by a golden crown, in addition to the limestone stonework on doors, stairs (photo 2a), windows, washbasin (photo 2b), pilasters, seats (photo 2c), among others, all very well executed and that denote the economic and aesthetic value of an element of geodiversity, in this case the rock, associated with the immaterial cultural heritage, the art of stonework.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_4}><img src={sao_4} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 2a</figcaption>
                            </figure>
                </div>

                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_5}><img src={sao_5} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 2b</figcaption>
                            </figure>

                </div>

                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_6}><img src={sao_6} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 2c</figcaption>
                        </figure>
                </div>


                <p className="text-article">The large atrium still preserves the original limestone floor, the lining with simple painting, the main doorway giving access to the Church's nave, the element that stands out the most for being richly worked in stone. The nave's walls are decorated with tiles dating from the 1730s, by the Portuguese artist Teotónio dos Santos, and portrays the saga of José do Egito (ESTÁCIO FERNANDES, 2016, oral information). The pulpit, with figurative elements of angels decorating the ceiling, has a guardrail garnished by a turned ballast.</p>
        </div>
        </>
    )
}