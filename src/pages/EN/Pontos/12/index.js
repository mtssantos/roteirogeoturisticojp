import { Navbar } from "../../../../components/EN/Navbar";
import areniza_1 from "./media/areniza_1.jpg";
import "../1/index.css";

export function ArenizaBarreira(){
    return(
        <>
        <Navbar />
        <div className="container">
        <h2>Barreiras Sandstorm</h2>
            <p className="text-article">This Place of Interest is located in João Pessoa, close to the triple border with Bayeux and Santa Rita. Access is through the Industrial District, passing through the 'Outcrop of the Beberibe Formation'. It is a circular area, with about 75 thousand m2, formed by a sandy package with dunes and numerous lagoons (photo 1), in the Horst Tabuleiro das Lagoas (Brito Neves et al. 2009).</p>
            <div className="text-center">
                    <figure className="figure">
                            <a href={areniza_1}><img src={areniza_1} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Photo 1</figcaption>
                    </figure>
            </div>
            <p className="text-article">This horst corresponds to one of the highest points in the project area, with an altitude of about 100m. The sedimentary package is quite thin (about 40m), formed basically by the Plio-Pleistocene sandstones of the <b> Barreiras Formation </b>. The flat relief, the high rainfall index concentrated in the winter and the geology favor the infiltration of the water, leaching the water-soluble minerals and concentrating, in the upper layer, the quartz, which forms the sandy package. Thus, from a pedological point of view, it can be classified as <b> quartzene neossol </b>, without lithic contact in the first half meter of depth, with a low level of pedogenesis, passing from the A horizon directly to the C / R (EMBRAPA , 2013). Package A consists of 95% quartz, chalcedony and opal. The lower horizon is enriched with iron and aluminum (‘fragipan’), which makes it difficult for water to infiltrate, facilitating its accumulation on the surface and forming the lagoons. This pedogenetic origin can be confirmed by collecting material to analyze the presence of unstable heavy minerals or by assessing the uniformity of soil materials to identify sandstone affiliation by means of statistical parameters of particle size distribution and thin sheets.</p>

        </div>
        </>
    )
}