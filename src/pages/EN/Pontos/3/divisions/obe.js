import obelisco_1 from './media/obelisco_1.jpg';
import obelisco_2 from './media/obelisco_2.jpg';
import "../../1/index.css";

export function Obelisco(){
    return(
        <>
            <div className="container text-1">
            <p className="text-article">The obelisk was inaugurated on September 7, 1923, under the administration of Mayor Guedes Pereira, the obelisk in celebration of the Centenary of Independence under the administration of Mayor Guedes Pereira (1921-1924), is 10.5m from the bottom to the top. According to ‘Jornal A União’ (05.05.1923), the base had been laid for some time and the granite came from outside the State, of unknown origin, and the work was elaborated by Pernambuco sculptor Rodolpho Lima.</p>
	<p className="text-article">The shoe is made up of irregular blocks of limestone (photo 2a). On top of it, the bottom of the base is a wide and square block made up of various types of granite, with variable textures: some thicker, with plagioclase, biotite, muscovite and quartz and without alkaline feldspar (K-feldspar); others finer, pink and oxidized, with K-feldspar. This wider block is on top of a smaller block, composed of the same material.</p>
	<div className="text-center">
			<figure className="figure">
					<a href={obelisco_1}><img src={obelisco_1} className="img-fluid" alt="" /></a>			
					<figcaption className="figure-caption">Photo 2a</figcaption>
			</figure>
	</div>
	<p className="text-article">The middle part is a trapezoidal block with slightly curved sides. This portion, the upper and the obelisk are composed of sensu strictu granite with millimetric grains of K-feldspar immersed in a fine phaneritic matrix, cut by aplite dikes and with enclaves rich in biotite (photo 2b).</p>
	<div className="text-center">
			<figure className="figure">
					<a href={obelisco_2}><img src={obelisco_2} alt="" /></a>
				<figcaption className="figure-caption">Photo 2b</figcaption>
			</figure>
	</div>
  <p className="text-article">The limestone of the shoe, belonging to the Gramame Formation (Maastrichtian), considering that it was built in the 1920s, was probably removed from some outcrop on Bishop island or Tiriri Island, which was, at the time, the major supplier of raw material for the manufacture of cement in the capital.</p>
  <p className="text-article">The revitalizations in 2000, during the administration of Mayor Cícero Lucena and, in 2015, in the administration of Mayor Luciano Cartaxo, improved the situation of the monument, with the cleaning and removal of the intense graffiti. Even so, despite the current good state of conservation, it presents impregnations of insect droppings, night birds and bats, loss of grout and edges, hatching of vegetables and accumulation of dry leaves, paper and other residues.</p>

            </div>
        </>
    )
}