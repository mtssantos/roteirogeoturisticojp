import NavBar from "../../../../components/Navbar";
import gruta_1 from "./media/gruta_1.png";
import gruta_2 from "./media/gruta_2.jpg";
import gruta_3 from "./media/gruta_3.jpg";

export function Gruta(){
    return(
        <>
        <NavBar />
        <div className="container">
            <h2>Grotto of the Tides</h2>
                <p className="text-article">Access to the Place of Interest is through the Industrial District, passing through the 'Outcrop of the Beberibe Formation', 600 meters from the 'Arenização da Barreiras Formation'. The Gruta das Marés (or Caverna das Marés, as it also appears in the literature), duly registered with the Brazilian Speleology Society, is part of a system of pseudocarst, all close by, formed in the Plio-Pleistocene sandstones of the <b> Barreiras Formation </b>and associated with the horst Tabuleiro das Lagoas. It has an entrance, 60 meters high, narrow and steep, with about 2.5 meters, which leads to a gallery through which the waters of the tributary of the Marés flow. This gallery, about 100 meters long in a southwest-northeast direction, is located at an unevenness of 20 meters deep and has a width of around 3 to 4 meters (photo 1). No paleontological or archaeological record was found.</p>
                <div className="text-center">
                        <figure className="figure">
                                <a href={gruta_1}><img src={gruta_1} className="img-fluid" alt="" /></a>
                                <figcaption className="figure-caption">Photo 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">The genesis of these cave systems is related to a disaggregation process called 'piping', or tubular erosion, in which the water percolates a hardened sand-clay horizon, called 'fragipan', probably taking advantage of a fracturing zone, of fragility ( structural porosity) or by the action of the roots, and excavates the lower levels more fragile, forming conduits that become preferential routes of the water flow, intensifying, more and more, the mechanical breakdown (figure 1). Subsurface waters also circulate through these conduits when the hydrostatic level increases, commonly in the area at 60 meters. Because they are very shallow caves, separated by a few centimeters from the surface, walking on the stretches over them becomes risky. Occasionally, openings are seen in the ground, with the formation of small deep ducts (photo 2).</p>
                <div className="text-center">
                        <figure className="figure">
                                <a href={gruta_2}><img src={gruta_2} className="img-fluid" alt="" /></a>
                                <figcaption className="figure-caption">Photo 2</figcaption>
                        </figure>
                </div>
                <div className="text-center">
                        <figure className="figure">
                                <a href={gruta_3}><img src={gruta_3} className="img-fluid" alt="" /></a>
                                <figcaption className="figure-caption">Figure 1</figcaption>
                        </figure>
                </div>

        </div>
        </>
    )
}