import NavBar from "../../../../components/Navbar";
import misericordia_1 from "./media/misericordia_1.jpg"
import misericordia_2 from "./media/misericordia_2.JPG"
import misericordia_3 from "./media/misericordia_3.JPG"


export function Misericordia(){
    return(
        <>
        <NavBar />
        <div class="container">
        <h2>Holy House Of Mercy</h2>
		<p className="text-article">Located in one of the oldest streets in João Pessoa, Direita Street, now Duque de Caxias Street, in the central portion of the upper city, with the main facade facing Peregrino de Carvalho Street, former Beco da Misericórdia, represents the place of residence of rural aristocracy and seat of religious power, since its central role in administration was emphasized by its location.</p>
		<p className="text-article">At first, the architecture of Holy House Of Mercy was simple and rustic, with a chancel and nave (photo 1). In 1609, the building was already mentioned in the reports of Diogo de Campos Moreno as a “very well worked out [1]” work. In 1618, according to the report of the author of the “Dialogue of the Greatnesses of Brazil”, “and he tried more [...] to make the house of Santa Misericórdia of the city itself, something of great cost due to the grandeur and nobility of the temple building, that is almost over ”(BRANDÃO, 1977, p. 137).</p>
		<div class="text-center">
				<figure class="figure">
						<a href={misericordia_1}><img src={misericordia_1} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Photo 1</figcaption>
				</figure>
		</div>
		<p className="text-article">However, Herckmans (1982) wrote that</p>
		<cite class="container"> [...]Mercy follows. It is almost finished; the Portuguese use it instead of the matrix. Its founder was Duarte Gomes da Silveira, Senhor de Engenho, who built it at his expense, as well as promoting the building of this city, helping with money to many residents who wanted to build houses. He himself built a magnificent building on the western side of San Benedict to serve as his home (HERCKMANS, 1982, p. 14).</cite>
		<p className="text-article">Inside, the single, large nave, without paintings or tiles, is separated from the main chapel by a cross-arch over columns displaying delicate stonework with floral motifs at the base and, at the top, a Portuguese coat of arms (photo 2a) . The side chapel, on the left, called Salvador do Mundo, with its arch and the coat of arms of the Duarte da Silveira family; on the walls, supported by thick limestone blocks, collateral tribunes, where the one on the right side was made of stonework (photo 2b) and the rear high choir is supported by two limestone pilasters, in Tuscan style.</p>
		<div class="text-center">
				<figure class="figure">
						<a href={misericordia_2}><img src={misericordia_2} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Photo 2a</figcaption>
					</figure>
		</div>
		<div class="text-center">
				<figure class="figure">
						<a href={misericordia_3}><img src={misericordia_3} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Photo 2b</figcaption>
					</figure>
		</div>
		<p className="text-article">Built in limestone in parallelepiped blocks about 40cm long by 25cm thick, on some walls without mortar.</p>
		<p className="text-article">This limestone belongs to the Gramame Formation, of the Paraíba Group, with facies visible to the naked eye, similar to facies i) outcropping in the Intercement quarry. The mineralogical characteristics in thin blade can be seen in the description of the aforementioned Place of Interest. At the time of construction, it was extracted from quarries located in the patio of Conjunto Franciscano and on the side of the trays facing the Sanhauá River.</p>
		<p className="text-article">Currently, the austere lines, the scars of the limestone exposed on the masonry walls, the ends of the entrances of the environments with their stonework and the reforms that obliterated the lines, plastered with mortar express the mixed feelings that one has when entering one of the churches oldest in the Capital.</p>
		<p className="text-article">This building was listed by IPHAN, on April 25, 1938, inscribed in nº 103 of the Book of Tombo das Belas Artes.</p>
		<hr />
		<span>[1]Kingdom Ministry, Collection of plans, maps and other iconographic documents, doc. 68, Torre do Tombo (reference PT / TT / MR / 1/68).</span>

        </div>
        </>
    )
}