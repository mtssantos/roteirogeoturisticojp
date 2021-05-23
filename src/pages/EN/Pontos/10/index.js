import NavBar from "../../../../components/Navbar";
import beberibe_1 from './media/beberibe_1.JPG';
import beberibe_2 from './media/beberibe_2.JPG';
import "../1/index.css";


export function Beberibe(){
    return(
        <>
            <NavBar />
            <div className="container">
                <h2>Outcrop Of Beberibe Formation</h2>
                    <p className="text-article">This outcrop is located on a secondary road with a steep slope, without paving, in the Bairro do Distrito Industrial, outside the Historic Center, about 350 meters from a subdivision under construction, with paved streets. The rocks of the formation were exposed by rainwater runoff, which formed grooves on the sides of the road and the area belongs to the Horst Tabuleiro das Lagoas.</p>
                    <p className="text-article">The rocks of the Place of Interest comprise a quartzite sandstone, with medium, friable and porous granulometry, of a reddish-cream color, poorly fossiliferous with some larger grains of quartz and K-feldspar (photo 1a) and with flat-parallel lamination (photo 1b) . These grains are sub-rounded to sub-angular, moderately selected, with dimensions up to 2 mm and cemented by iron oxide. K-feldspar undergoes argilization, releasing the iron oxide that gives the color a reddish hue. Due to the textural and mineralogical characteristics of this facies, a fluviolagunar origin is proposed. The high level of alteration made it impossible to make thin blades. It was selected as a Place of Interest because it is one of the rare outcrops of the <b> Beberibe Formation </b> (Santonian age) in the area, representing the stratigraphic base of the <b> Paraíba Group </b>.</p>
                    <div className="text-center">
                            <figure className="figure">
                                    <a href={beberibe_1}><img src={beberibe_1} className="img-fluid" alt="" /></a><br /><br />
                                    <figcaption className="figure-caption">Photo 1a</figcaption>
                                </figure>
                    </div>

                    <div className="text-center">
                            <figure className="figure">
                                    <a href={beberibe_2}><img src={beberibe_2} className="img-fluid" alt="" /></a>
                                    <figcaption className="figure-caption">Photo 1b</figcaption>
                                </figure>
                    </div>
            </div>
        </>
    )
}