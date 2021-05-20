import praca_6 from '../divisions/media/praca_6.jpg';
import praca_7 from '../divisions/media/praca_7.jpg';
import praca_8 from '../divisions/media/praca_8.jpg';
import praca_9 from '../divisions/media/praca_9.jpg';
import "../../1/index.css";

export function TriJUS(){
    return(
        <div className="container text-1">
                <p className="text-article">The Court of Justice, in the south sector of the square, is located in the place where, until 1936, the Normal School existed, which had been built between 1917 and 1919 (photo 3a).</p>
				<figure className="figure">
						<a href={praca_6}><img src={praca_6} className="img-fluid" alt="" /></a><br />
					<figcaption className="figure-caption">Photo 3a</figcaption>
				</figure>
		        <p className="text-article">Since 1965 it houses the remains of ex-president Epitácio Pessoa, patron of the Court of Justice and his wife. The crypt is located in the basement of the building, being composed, on the floor and on the back wall, by a national white marble, on the side wall by a national gray laminated marble and the tomb by a gabbro or diorite (photo 3b). This rock, with fine granulometry (between 0.2 to 1.5 mm), unequigranular, melanocratic, presents as main mineralogy plagioclase, pyroxene, amphibole, biotite and, rarely, quartz. If the anagrite content of plagioclase is greater than 50, the rock can be classified as diorite, but it is necessary, for this investigation, the elaboration of a thin sheet, which was not possible.</p>
				<figure className="figure">
						<a href={praca_7}><img src={praca_7} className="img-fluid" alt="" /></a><br />
							<figcaption className="figure-caption">Photo 3b</figcaption>
				</figure>
		            <p className="text-article">It was possible, however, to make a thin sheet of national white marble. The rock has fine to medium granulometry, unequal, with the size of the minerals varying between 0.5 to 2 mm. Its main mineralogy is calcite (90%), tremolite (5%), talc (3%) and quartz (2%).</p>
		            <p className="text-article">Calcite occurs as equigranular and hypidioblastic crystals (photomicrograph 1a), ranging from colorless to light brown, reaching up to 2.2 mm. Tremolite is colorless, with a large number of fractures and changes in its border. It has a xenoblastic form (photomicrograph 1b), with medium-sized crystals of 2 mm and in contact with calcite. Talc, on the other hand, is colorless, has a xenoblastic texture and an average size of 0.8 mm, in contact with tremolite and calcite. Quartz in small quantities and in the form of colorless grains, is distinguished by its positive uniaxial optical signal.</p>
				<figure className="figure">
						<a href={praca_8}><img src={praca_8} className="img-fluid" alt=""/></a><br />
							<figcaption className="figure-caption">Photomicrography 1a</figcaption>
				</figure>
				<figure className="figure">
						<a href={praca_9}><img src={praca_9} className="img-fluid" alt="" /></a><br />
							<figcaption className="figure-caption">Photomicrography 1b</figcaption>
				</figure>
        </div>
    )
}