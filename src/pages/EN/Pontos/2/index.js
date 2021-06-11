import bica_1 from './bica_1.JPG';
import fonte_1 from '../1/fonte_1.png';
import "../1/index.css";
import { Navbar } from "../../../../components/EN/Navbar";


export function BicaFeia(){
    return(
        <>
        <Navbar />
        <div className="container">
                <h2>Ugly Maria Spout</h2>
            <p className="text-article">The Ugly Maria Spout, together with Tambiá Fountain and People's Cacimba, they are the most peripheral of the colonial urban nucleus and played a leading role for the populations that lived far from the most central ones (photo 1); in the case of Ugly Maria Spout, especially the population of the eastern portion from the 19th century to the mid-1950s, being a public source (ARAÚJO, 2012).</p>
            <div className="text-center">
                    <figure className="figure">
                            <a href={bica_1}><img src={bica_1} alt="" className="img-fluid" /></a>
                            <figcaption className="figure-caption">Photo 1</figcaption>
                    </figure>
            </div>
            <p className="text-article">It is located in the current Tambiá Neighborhood, about 800 meters east of Tambiá Fountain, close to Saint Isabel Hospital, belonging to the then Cruz do Peixe site, and has been very little documented. According to Rodriguez (1962), one of the few records of its existence, from the beginning of the 20th century, refers to it as Mandacaru Spout or Mindêlo.</p>
            <p className="text-article">From a geomorphological point of view, the fluvial valley where the Big River Tambiá is located, in whose straight slope and with a high slope, the Ugly Maria Spout, at an altitude of 16 meters, is part of a structural complex that includes Arruda Câmara Park. It consists of a drainage head amphitheater filled with fine alluvial sediments overlaid by sands of the Barreiras Formation, which led to the occupation of intense vegetation of medium and large sizes. Together with other sources, it supplies the Big River Tambiá and its tributaries, such as Bombs Stream and Boa Vista Stream. According to Araújo (2012), this source, like Tambiá's, flows directly from the upper-middle portion of the Barreiras Aquifer (figure 1).</p>
            <div className="text-center">
                    <figure className="figure">
                            <a href={fonte_1}><img src={fonte_1} alt="" className="img-fluid" /></a>
                        <figcaption className="figure-caption">Figure 1</figcaption>
                    </figure>
            </div>

            </div>
        </>
    )
}