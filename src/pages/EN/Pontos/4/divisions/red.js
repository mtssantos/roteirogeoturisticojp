import praca_10 from '../divisions/media/praca_10.JPG'
import praca_11 from '../divisions/media/praca_11.JPG'
import praca_12 from '../divisions/media/praca_12.jpg'
import praca_13 from '../divisions/media/praca_13.JPG'
import praca_14 from '../divisions/media/praca_14.jpg'
import "../../1/index.css";




export function PalacioRed(){
    return(
        <div className="container text-1">
        <p className="text-article">According to IPHAEP, the Redemption Pallace was the building that had the most changes in the original architectural forms, the result of four interventions: 1828, 1875, 1912 and 1929, being a beautiful example of eclectic architecture in the capital. It was listed by IPHAEP in 1980, through decree nº 8638.</p>
		<p className="text-article">Its interior features elements that connect geodiversity ex situ to Cultural Heritage. The stairs leading from the ground floor to the first floor are made of Carrara marble (photo 4a), of great aesthetic beauty and local rarity. Between the two floors, a small table, from the end of the 19th century / beginning of the 20th, whose cover is formed by oficalcito (photo 4b), with a serpentinitic matrix of dark green color and calcitic veins (photo 4c), probably from Italy, whose trade name is Verde di Polcevera, from him Alpi, Varalo or Susa, very common in the Apennines or Alps. Oficalcite is a low-grade and myonitized metamorphic rock, common in areas of subduction of the crust, resulting from tectonic deformations of ultrabasic rocks, with the cementation of its cracks and debris (STERN, 2006).</p>
				<figure className="figure">
						<a href={praca_10}><img src={praca_10} className="img-fluid" alt="" /></a>
						<figcaption className="figure-caption">Photo 4a</figcaption>
				</figure>
				<figure className="figure">
						<a href={praca_11}><img src={praca_11} className="img-fluid" alt="" /></a>
							<figcaption className="figure-caption">Photo 4b</figcaption>
				</figure>
				<figure className="figure">
						<a href={praca_12}><img src={praca_12} className="img-fluid" alt="" /></a>
							<figcaption className="figure-caption">Photo 4c</figcaption>
					</figure>
		        <p className="text-article"> The rooms are adorned with Portuguese tiles, highlighting the cloister, with a panel that portrays the arrival of the Caravels of the Discovery of Brazil, denoting its revivalist typology, a work by the Francisca Constância factory, in Lisbon. It was commissioned in 1912, built by majolica technique and cut out frame with excellent quality. The slightly reddish clay denotes the presence of iron oxide in contact with water. The loss of adhesion of part of the set caused some pieces to come loose (photo 5a). In the lower portion of this panel, next to the floor, a bench was adorned with tiles from the second half of the 19th century in a horseshoe pattern, of unknown origin (photo 5b).</p>
					<figure className="figure">
							<a href={praca_13}><img src={praca_13} className="img-fluid" alt="" /></a>		
							<figcaption className="figure-caption">Photo 5a</figcaption>
					</figure>
					<figure className="figure">
							<a href={praca_14}><img src={praca_14} className="img-fluid" alt="" /></a>
								<figcaption className="figure-caption">Photo 5b</figcaption>
					</figure>
		<p className="text-article">Despite being part of the Cultural Heritage, the tile heritage has an intrinsic relationship with the geopatrimony, since its raw material, clay, is an element of geodiversity with high economic and cultural value. In this way, the tile heritage of the Historic Center of João Pessoa was mapped, when possible, together with other elements of geodiversity.</p>
        </div>
    )
}