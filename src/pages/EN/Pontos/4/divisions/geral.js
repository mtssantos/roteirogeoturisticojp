import praca_1 from '../divisions/media/praca_1.jpg';
import "../../1/index.css";

export function Geral(){
    return(
        <div className="container text-1">
        <p className="text-article">Located at the end of Duque de Caxias Street, with a series of buildings of historical, political and artistic importance, especially the Court of Justice and the Set Of Jesuits, it attracts a large flow of tourists (photo 1). In the center, the Monument to João Pessoa was erected, formed by a granite rock that does not exist in situ in the Capital. Other varied and rare lytic types decorate these buildings internally, which justifies the selection of this square to integrate the itinerary. </p>
				<figure className="figure">
						<a href={praca_1}><img src={praca_1}  className="img-fluid" alt="" /></a>
						<figcaption className="figure-caption">Foto 1</figcaption>
				</figure>
		<p className="text-article">NIn the Jesuit era, the square, then called Largo do Colégio, was a large open space that guaranteed the ventilation of the buildings to the west, in addition to representing the south end of the primitive city. Soon after, it became the first public garden in the city, inaugurated on May 13, 1803, on the anniversary of D. João VI. Its construction was carried out in stages: between 1879 - 1881, imperial palms and flower beds were planted, a wall of about 30 cm was raised and a railing was placed [1], with four gates; in 1889, a bandstand was built in the center and several benches were placed. From then on, it became a place of leisure and leisure for the population.</p>

		<hr />
		<span>[1] This railing was transferred to the front wall of the Senhor da Boa Sentença Cemetery (photo 8.28).</span>
        </div>

    )
}