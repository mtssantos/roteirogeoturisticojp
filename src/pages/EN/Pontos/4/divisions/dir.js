import "../../1/index.css";
import praca_2 from '../divisions/media/praca_2.jpg';
import praca_3 from '../divisions/media/praca_3.jpg';
import praca_4 from '../divisions/media/praca_4.jpg';

export function FaculDireito(){
    return(
        <div className="container text-1">
                <p className="text-article">The entire west sector of the square is occupied by the Conjunto dos Jesuítas, which comprises the current Faculty of Law, the tower of the São Gonçalo Church and the Palácio da Redenção (photo 4).</p>
                    <figure className="figure">
                            <a href={praca_2}><img src={praca_2} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Photo 4</figcaption>
                    </figure>
            <p className="text-article">The interior contains a landscaped courtyard, surrounded by an arcade gallery supported by tiled columns, the pattern of which probably refers to the 1950s and comes from the São Paulo Matarazzo factory. On the upper floor, the hexagonal-shaped pillars support the covers and the staircases feature stonework on their volutes. The whole set was built with limestone and mortar with whale oil (NÓBREGA, 1985). It was listed by IPHAEP in 1980, through decree nº 8630.</p>
            <p className="text-article">In 1923, a bronze bust was inserted in the courtyard in honor of Epitácio Pessoa, by the sculptor Humberto Cozzo. The base of the bust is made up of a monzogranite biotite, leukocratic and allotriomorphic rock, from which a thin blade was made. It presents medium phaneritic texture (0.5 to 3 mm), whose main mineralogy is microcline (33%), quartz (32%), plagioclase (17%; photomicrograph 2a). It also has biotite (12%) and titanite (3%) as main mafic minerals. The accessories are zircon, apatite and opaque (adding on average 1%), and those with chlorite, muscovite and sericite alterations with less than 1%.</p>
                    <figure className="figure">
                            <a href={praca_3}><img src={praca_3} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Photomicrograph 2a</figcaption>
                    </figure>
            <p className="text-article">The microcline crystals are anhedric in shape and, in most cases, the absolute size of the grains is greater than or equal to 3 mm. They are associated with tartan and carlsbad twinning. Quartz has an anhydrous shape ranging in size from fine to coarse, and shows fractures in some grains. Plagioclase crystals vary from anhedral to subhedral, the latter being more common. They have an average size, ranging between 0.2 and 1mm and polysynthetic twinning. Predominantly anhedral with subhedral point crystals, biotite has an absolute grain size ranging between 0.2 and 1mm. Titanite occurs in crystals with an anecdotal shape and an average size of 1.5 mm, with small fractures. Zircon and apatite occur as euhedral crystals less than 0.2mm in size, included in felsic minerals and biotite. Chlorite, muscovite and sericite are alteration products, the first two of which are biotite (photomicrograph 2b) and the third of microcline.</p>
                    <figure className="figure">
                            <a href={praca_4}><img src={praca_4} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Photomicrograph 2b</figcaption>
                    </figure>
            </div>
	
	
    )
}