import NavBar from '../../../../components/Navbar';
import fonte_1 from './fonte_1.png';
import fonte_2 from './fonte_2.JPG';
import "./index.css"

export function FonteTambia(){
    return(
		<>
		<NavBar />
        <div className="container">
			<h2>Tambiá Fountain</h2>
			<p className="text-article">It has been widely iconographed since the 18th century when documents and images give an account of its existence, and of its importance for the population, especially the high income, since it was located in the upper city.</p>
			<p className="text-article">It is located in the current Arruda Câmara Park, popularly known as ‘Bica’, with 26.4 ha, managed by the City Hall and which can be easily accessed by several bus lines. It is a point of rest and leisure for residents and tourists, with a zoo, a lake with pedal boats, leafy trees and a century-old history. This park is located in Bairro do Alto Roger and can be accessed both through Gouveia da Nóbrega Avenue and Bandeirantes Avenue.</p>
			<p className="text-article">The area surrounding the fountain was transformed into a park, in honor of the Paraiba botanist, by Mayor Guedes Pereira, in 1922. The forest reserve has a fundamental role in protecting the spring and is located outside the perimeter of the Historic Center, but in the vicinity of its northern boundary.</p>
			<p className="text-article">While piped water did not reach the city, the role of this source was crucial, especially in the 19th century, due to its good flow and quality. The approval date for the construction of Fonte de Tambiá is March 1782 (PINTO, 1977), under the management of Governor Jeronymo de Castro e Melo. However, since the 1730s, documents have been exchanged between the provider of Real Farm and King D. João V about the need to reconstruct the fountain in Tambiá, which allows us to infer that some type of building was previously in place [1].</p>
			<p className="text-article">The name of this source is associated with a local legend, denoting the folkloric aspect of its cultural value. According to Rodriguez (1962), a young indigenous virgin named Aipré, from the Potiguara tribe, would have fallen in love with a Cariri warrior, an enemy of his tribe, called Tambiá. After the death of this one by her relatives, the young woman cried for 50 moons over the tomb, and her weeping gave rise to the waters of the spring. This is the most well-known and publicized legend of the times. However, there is another one in which a Tabajara Indian begs her mother for water so that her love, the Tambiá Indian, does not go away. On the day of his departure, the Indian is bitten by a centipede and smashes it. Mother Earth is thus torn, and from its cracks the waters that gave rise to the source spring (MEDEIROS, 1994).</p>
			<p className="text-article">In the 19th century, with the increase in the demand for its waters, the concern with the preservation of its surroundings, especially its forests, intensified, and several works were carried out to repair its building, according to historical documents. At the beginning of the 20th century, with the plumbing of water for the public, the fountain was losing space, but unlike others, it managed to preserve itself as a record of the city's water supply, having been listed by IPHAN on September 26, 1941 and by IPHAEP, in 1980, the latter covering the entire Park.</p>
			<p className="text-article">Its terrible current conditions, such as cracks and inclination, forced the City to place a wooden screen (photo 1).</p>
			<div className="text-center">
					<figure className="figure">
							<a href={fonte_2}><img src={fonte_2} alt="" className="img-fluid" /></a>
						<figcaption className="figure-caption">Photo 1</figcaption>
					</figure>
			</div>
			<p className="text-article">According to Araújo (2012), it flows from the Barreiras Formation, about 7 meters above the Gramame limestone (figure 1), with an approximate altitude of 19 meters. The author proposes that the northeastern sector, where this source and Maria Feia spring, has a calcareous depth greater than the west slope and that they are sources originating from the upper-middle portion of the Barreiras Aquifer. It can be considered an example of a geopatrimonial asset due to its exceptional cultural value, associated with the extremely high scientific and economic values.</p>
			<div className="text-center">
					<figure className="figure">
							<a href={fonte_1}><img src={fonte_1} alt=""  className="img-fluid" /></a>
						<figcaption className="figure-caption">Figure 1</figcaption>
					</figure>
			</div>

	<hr />
	<span>[1] A.H.U.-ACL_CU_014, Cx 10, doc. 791, fl 3 e A.H.U.-ACL_CU_014, Cx 13, doc. 1085, fl 2.</span>
	
	</div>
	</>
    )
}