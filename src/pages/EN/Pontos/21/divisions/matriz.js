import  matriz_1  from "../media/matriz_1.JPG";
import  matriz_2  from "../media/matriz_2.jpg";
import  matriz_3  from "../media/matriz_3.jpg";
import  matriz_4  from "../media/matriz_4.jpg";


export function Matriz(){
    return(
        <>
                <p className="text-article">The current church, proclaimed Basilica in 1997, was the fourth building in that location, the last one dating from 1881. Without a defined architectural style, its facade has two balconied towers with balusters and in the center a pediment with the image of the patron (photo 1) . The internal part, without much artistic flair, is formed by a central nave, two side aisles and a small sacristy. It was listed by IHPAEP in 1998, through decree nº 20132.</p>
                <div class="text-center">
                        <figure class="figure">
                            <a href={matriz_1}><img src={matriz_1} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Photo 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">The external area of ​​the church's courtyard has a marble sculpture called 'Nossa Senhora das Neves' (photo 2) which, according to oral information provided by IPHAEP technicians, must date from the beginning of the 19th century. The base, square with cut corners, is composed of a syenogranitic orthogneissis rich in K-feldspar and with garnet, with medium granulometry and oriented minerals forming a bandage. This base was probably inserted later under the statue, already in the 20th century.</p>
                        <figure class="figure">
                            <a href={matriz_2}><img src={matriz_2} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 2</figcaption>
                            </figure>
                <p className="text-article">In a thin blade, the syenogranitic orthognaisse presents medium to coarse granulometry, uneven, with the size of the minerals varying from about 1 to 10 mm. Contains microcline (45%), quartz (33%) and plagioclase (15%), in addition to biotite (3%), garnet (2%) and opaque minerals (2%). As accessory minerals, with less than 1%, there is an epidote and zircon. The microcline occurs with size varying between 1.5 to 9 mm, with twinning of the tartan type, in addition to crystals with pertitas. Quartz occurs as anhedral crystals, some with undulating extinction and with inclusions of biotite, plagioclase, microcline, opaque minerals and garnet, in addition they occur intergrown with plagioclase in myrmites (photomicrograph 1a). Plagioclase occurs with polysynthetic twinning, in anhedral to subedral crystals with sizes around 5 mm. The crystals may contain inclusions of biotite, quartz, opaque and garnet. Biotite occurs as anhedral grains to tabular subedrals with a size generally between 1 and 2 mm. Features inclusions of zircon and opaque minerals. The garnet occurs with a granular anonymous texture, with very few crystals having a subedral shape, in addition to the size being about 2 mm. They have inclusions of opaque minerals and may be included in quartz, plagioclase and microcline. Opaque minerals occur as anhedral crystals to granular subedrals around 0.1 mm in size. They occur included in biotite, garnet, quartz, microcline and plagioclase. The epidote occurs as crystals of size varying from 0.1 to 0.55 mm, generally subedral, with several sections with a prismatic shape, while zircon occurs mainly included in biotite, generating pleochroic halos (photomicrograph 1b). The crystals are tiny, reaching a maximum of about 0.5 mm and are subedral in general.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={matriz_3}><img src={matriz_3} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photomicrography 1a</figcaption>
                        </figure>
                </div>
                <div class="text-center">
                        <figure class="figure">
                                <a href={matriz_4}><img src={matriz_4} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photomicrography 1b</figcaption>
                        </figure>
                </div>
        </>
    )
}