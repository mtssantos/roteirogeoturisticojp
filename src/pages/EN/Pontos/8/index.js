import { Navbar } from "../../../../components/EN/Navbar";
import cacimba_1 from './media/cacimba_1.JPG';
import cacimba_2 from './media/cacimba_2.png';
import "../1/index.css";


export function Cacimba(){
    return(
        <>
        <Navbar />
            <div className="container">
                <h2>People's Cacimba</h2>
                <p className="text-article">It is located in the current Bairro das Trincheiras, inside a site in the Mechanical District, about 50 meters from the main access road, Rua Rodrigues Chaves. Rodriguez (1962) emphasizes its importance as a source of supply for the population of the southern region, highlighting the year 1857 as the year of its construction, having, since then, a reference in several historical documents of the 19th and early 20th centuries. With the plumbing of the water, in the middle of 1950, it was losing importance, until its (almost) total oblivion.</p>
                <p className="text-article">From the geomorphological point of view, the entire area of ​​the Mechanical District is embedded in a drainage head amphitheater filled with fine alluvial sediments, covered by intense vegetation of medium and large sizes. Together with other exsurgencies and streams, it supplies the Sanhauá River and its tributaries, such as the Riacho do Package. Unlike the two previous sources, this one is located on a slope facing west, at an altitude of about 19 meters.</p>
                <p className="text-article">The cacimba, in fact, consists of an accumulation tank, dug in the limestone, about 1.60 m x 1.30 m and 1.0 meter deep (photo 1), which stores water from an upper level. Considering that at that altitude is located the base of the Barreiras Formation, responsible for the water reservoir, the exsurgence can be classified both as a 'source of geological contact' (figure 1) and as a 'source' of failure ', according to Leinz and Amaral (2001), for being associated with the geological fault, whose plan is positioned west of the boards of the Barreiras Formation.</p>	
                        <figure className="figure">
                                <a href={cacimba_1}><img src={cacimba_1} className="img-fluid" alt="" /></a><br /><br />			
                                <figcaption className="figure-caption">Photo 1</figcaption>
                        </figure>
                        <figure className="figure">
                                <a href={cacimba_2}><img src={cacimba_2} className="img-fluid" alt="" /></a>
                                <figcaption className="figure-caption">Figure 1</figcaption>
                        </figure>

        </div>
        </>
    )
}