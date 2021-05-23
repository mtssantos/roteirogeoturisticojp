import alvares_1 from '../media/alvares_1.JPG';
import alvares_2 from '../media/alvares_2.JPG';
import alvares_3 from '../media/alvares_3.JPG';
import alvares_4 from '../media/alvares_4.jpg';
import alvares_5 from '../media/alvares_5.jpg';

export function Alvares(){
    return(
        <>
            <p className="text-article">According to the Jornal a União (30.11.1923), on November 29, 1923, at the request of Governor Solon de Lucena (1920-1924), friends and family, the statue in honor of former governor Álvaro Lopes Machado (1892-1896 ) carved in solid bronze from Europe, opened on February 3 of the following year (photo 1a).</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_1}><img src={alvares_1} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Photo 1a</figcaption>
                    </figure>
            </div>
            <p className="text-article">Both volumes of the pedestal are composed of a syenogranite, of unknown origin, with a fine to medium phaneritic texture, and a matrix composed of quartz, plagioclase, biotite and opaques (probably titanite) and K-feldspar phenocrystals (photo 1b, c) . The upper volume has more plagioclase and quartz and less K-feldspar than the lower one.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_2}><img src={alvares_2} class="img-fluid" alt="" /></a><br /><br />
                            <figcaption class="figure-caption">Photo 1b</figcaption>
                    </figure>
            </div>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_3}><img src={alvares_3} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Photo 1c</figcaption>
                    </figure>
            </div>
            <p className="text-article">A thin sheet of the lower volume was made. The rock has a medium, uneven grain size, with the size of the minerals varying from 0.2 to 3 mm. Corresponds to a syenogranite biotite containing quartz (34%), microcline (22%) and plagioclase (13%), in addition to biotite (17%), opaque minerals (3%), epidote (3%), zircon (2%) and hornblende (1%). Muscovite (3%) and chlorite (2%) are also found as transformation minerals. Quartz occurs as anhedral crystals, often associated with other felsics (photomicrograph 1a), with the microcline tartan twinning and the plagioclase polysynthetic twinning. The biotite, brown, occurs as subhedral reeds. Sometimes the biotite shows a green color, resulting from the change to chlorite. The hornblende occurs as elongated crystals of green color. Zircon appears euhedrally, with strong relief and included in biotite (photomicrograph 1b), while muscovite and chlorite are the product of altering biotite.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_4}><img src={alvares_4} alt="" /></a><br /><br />
                            <figcaption class="figure-caption">Photomicrography 1a</figcaption>
                    </figure>
            </div>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_5}><img src={alvares_5} alt="" /></a>
                            <figcaption class="figure-caption">Photomicrography 1b</figcaption>
                    </figure>
            </div>

        </>
    )
}