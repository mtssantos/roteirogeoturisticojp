import busto_1 from './media/busto_1.jpg'
import busto_2 from './media/busto_2.jpg'

export function Busto(){
    return(
        <div className="container text-1">
	<p className="text-article">For the confluence of Epitácio Pessoa and Maximiano Figueiredo Avenues, in the eastern sector of the square, a bust was transferred in the 1960s in honor of President Epitácio Pessoa, who until then was at João Pessoa Square(photo 3).</p>
	<div className="text-center">
			<figure className="figure">
					<a href={busto_1}><img src={busto_1} className="img-fluid" alt="" /></a>
					<figcaption className="figure-caption">Photo 3</figcaption>
			</figure>
	</div>
  <p className="text-article">It is a bronze sculpture representing a human figure composed of the chest, upper limbs and the head of a man who points forward with the index finger of his raised right hand. The left hand rests on the edge of the tribune in white limestone with a square shape and cut corners that top the pedestal.</p>
  <p className="text-article">This, with cubic shape, is composed of a felsic ornamental rock with a dark green color, whose thin blade was made, coming from Ubatuba (SP). It has a holocrystalline and porphyritic texture, medium granulometry (0.5-5 mm), hypidiomorphic and uneven. Corresponds to a granodiorite formed by plagioclase (45%), quartz (25%) and microcline (6%). It also has biotite (7%), amphibole (7%), pyroxene (5%) as main mafias. Accessory minerals are opaque minerals (2%), apatite (1%), zircon (1%), in addition to chlorite (1%), the latter as alteration.</p>
	<p className="text-article">Plagioclase occurs as large crystals (between 2.75 and 5 mm), sometimes with polysynthetic twinning associated with Carlsbad. Myrmequita is common in the contact between plagioclase and microcline. Quartz occurs as anhydrous crystals of about 1 mm, well distributed on the blade, but in a moderate amount. The microcline occurs as anhedral crystals with some subhedral faces and Carlsbad twinning. Biotite occurs with variable size (from 2.8 mm to 0.05 mm) and tabular habit. There is a change to chlorite in the larger crystals and also small crystals included in plagioclase. The amphibole appears with good cleavage, visible in only one direction. It is apparently posterior to biotite, because, in some places, it is superimposed on it. Pyroxenes occur as anhedral crystals, with few subhedral and fractured faces. Straight extinction characterizes them as orthopyroxene. Opaque minerals, with crystals of approximately 0.8 mm, occur mainly near the amphibole. Zircon and apatite are euhedral in biotite (photomicrograph 1) and plagioclase. Chlorite is a product of alteration of biotite.</p>
	<div className="text-center">
			<figure className="figure">
					<a href={busto_2}><img src={busto_2} className="img-fluid" alt="" /></a>
					<figcaption className="figure-caption">Photomicrography 1</figcaption>
			</figure>
	</div>
  <p className="text-article">It presents a good state of conservation, despite the accumulation of dust and impregnations of solid residues (excrement of birds and insects), graffiti and advertising collage.</p>


        </div>
    )
}