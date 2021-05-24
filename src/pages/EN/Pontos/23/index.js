import { Navbar } from "../../../../components/EN/Navbar";
import milagres from './media/milagres.JPG';

export function Milagres(){
    return(
        <>
        <Navbar />
        <div class="container text-1">
        <h2>Miracle Fountain</h2>
            <p className="text-article">On the south side of those who descend the Ladeira de São Francisco, at Rua Augusto Simões, 59, former Beco dos Milagres, it is assumed that it had great importance in the initial period of formation of the city, as it is located close to the first streets of the upper city, where a good part of the population lived, in the Ladeira do São Francisco, which connected the upper city to the lower city, on the land of the first vicar of the Mother Church. </p>
            <p className="text-article">Schmalz (1966) presents the figure of this vicar, named João Vaz Salem dos Santos, who arrived in the city a year after its foundation. Interestingly, the land where the Benedictine Convent is located and part of his property belonged to the aforementioned priest, who was confiscated by the Crown (Pinto, 1977). It cannot be confused with Cacimba da Jaqueira, located on the same site and considered the oldest in the city. </p>
            <p className="text-article">According to Pinto (1977), the said place of Father João Vaz to the corner of the street that goes to the fountain and Varadouro, running down the said street until it gets bored with the fountain that this City is now used for, source give you 3rd part of the time of the can that is done with conditions that in no time do another one I can deeper or another wellbeing that does damage to the water, neither cover nor tolerate the people, except for the said third part that fits you serving from the said I can only with Cauldron. The Cerca do Mosteiro will go from where the said water flows directly to the Mangroves and from the said mangroves it will run to test with the ground and land that was given to the Capuchin Fathers with a declaration that the quarry of the Cantaria that the said Father João Vaz discovered will be freed for the people with a path to serventia della outside the Fence, which for some time they will tolerate, because they do not give or take it for granted by the Her Majesty's Service [...] (PINTO, 1977, p. 31, emphasis added) ).</p>
            <p className="text-article">The name ‘dos Milagres’ is related to a local legend, from where the name of the Alley descends. According to Aguiar (1992), it was from this source that, in 1801, the Franciscan friar José de Jesus Maria Lopes would have murdered his mestizo lover, Tereza, after impaling her for a bath in the moonlight. Considering that there is no ‘miracle’ in this fact, Araújo (2012) proposes another origin for the name: the miraculous medicinal properties of its waters, reported in the “Book that gives reason for the State of Brazil”.</p>
            <p className="text-article">In 1849 the fountain's facade was built, in this case a fountain, according to historical documents cited by Araújo (2012), to improve water distribution to the population, without having to resort to the Tambiá Fountain, but which was not very successful due to the small size of its accumulation tank and low water flow. According to Rodriguez (1962), it had two bronze taps and limestone pilasters with capitals topped by a semicircular cornice, with a symbol of the imperial weapons at the top, which was removed after the Proclamation of the Republic.</p>
            <p className="text-article">What remains of this fountain, incorporated into a wall (photo 1), without spilling any more water, are the limestone pilasters, the holes where the two taps were and, in high relief, the indication of the year of construction, all plastered with lime and white paint, which demonstrates the little case that is made of the natural and cultural heritage of the city.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={milagres}><img src={milagres} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 1</figcaption>
                        </figure>
                </div>
            <p className="text-article">It has the same characteristics as the Fonte de Santo Antônio. With a height of around 17 meters, located at the contact of the Barreiras sandstone and the Gramame limestone, it is a 'source of geological contact', as well as a 'source of failure', as it is located on the slope that represents a failure plane.</p>
            <p className="text-article">It was selected as an important element of local geodiversity for its high scientific value as a representative of the Barreiras Aquifer outcrop and for being part of the city's supply history. Its name is a classic example of the cultural value of geodiversity in its mythological bias.</p>
        </div>
        </>
    )
}