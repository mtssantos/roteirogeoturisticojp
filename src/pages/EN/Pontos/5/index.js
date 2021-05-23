import NavBar from '../../../../components/Navbar'
import pedra_1 from './media/pedra_1.JPG'
import pedra_2 from './media/pedra_2.JPG'
import pedra_3 from './media/pedra_3.jpg';
import "../1/index.css";


export function PracaPedra(){
    return(
		<>
		<NavBar />
        <div class="container text-1">

            <h2>Stone Square</h2>
			
			<p className="text-article">It concerns a square, located in the extreme southern part of the Historic Center, without meeting the Republic Street and San Miguel Street, with the presence of a monolith inside (photo 1). Despite the xerosere [1], the rock can be identified as a porphyritic granodiorite, with centimetric phenocrystals of K-feldspar and abundant presence of biotite. In fact, this monolith, according to the newspaper A União (10.07.1931), was brought to the place on July 12, 1931, from the Borborema Region. In informal conversations with residents, two versions of the place of origin were arrived at. In the first, the rock would have been brought from the municipality of Cruz do Espírito Santo (25 km away from the capital) to the Sanhauá River, by train, and by carts, to the square. The problem with this version is that this type of granite does not emerge in that municipality, which sits on a sedimentary basin.</p>
					<figure class="figure">
							<a href={pedra_1}><img src={pedra_1} class="img-fluid" alt="" /></a>
							<figcaption class="figure-caption">Photo 1</figcaption>
					</figure>
			<p className="text-article">The second version is that the monolith, located in the municipality of Bananeiras, 130 km from the capital, was brought in honor of the anniversary of the death of President João Pessoa, who at one point, in his travels to the interior, would have rested at your shadow. The municipality of Bananeiras registers the presence of granodioritic rocks similar to that of Praça da Pedra, in outcrops along the PB-105 highway, which would corroborate this version (PEREIRA et al., 2013a). The geological mapping in the scale 1: 500.000 (BRASIL, 2002), places the rocks of the region in the Granitic Calcialcalina Suite of medium to high Potassium Itaporanga, represented by granites and coarse granodiorites to porphyritic associated with diorites, dated 584 Ma by the U- method PB in zircons by Brito Neves et.al. (2003). Photo 2 shows the Granodiorito Itaporanga (left, in hand) and the granodiorite from Praça da Pedra (right).</p>
					<figure class="figure">
							<a href={pedra_2}><img src={pedra_2} class="img-fluid" alt="" /></a>
							<figcaption class="figure-caption">Photo 2</figcaption>
					</figure>
			<p className="text-article"> A thin blade of the monolith shows medium, unequigranular, hypidiomorphic granulometry, with the size of the minerals varying from 0.1 to 4 mm. Corresponds to a granodiorite biotite containing quartz (35%), andesine (35%) and microcline (23%), in addition to biotite (3%), apatite, sphene (2%) and secondary minerals (sericite, epidote, carbonate and chlorite , which together do not reach 2%).</p>
			<p className="text-article">Quartz (1-3 mm) occurs as anhydrous crystals, with an ameboid to elongated shape, intensely subdivided, with straight lobed contacts and locally with polygonal arrangements. In some areas the deformation is a little more intense because we see recrystallized (polygonal) quartz. The andesine (0.4 to 1.6 mm), intensely zoned, is prismatic, subhedral, elongated and quadratic, with sericitized nuclei and the albite skin. Locally included in biotite and apatite, it presents metamorphic recrystallization marked by the formation of fine granoblastic aggregates (about 0.1 mm), with straight to lobed contacts and intense formation of myrmequites and, locally, lepidoblastic texture (photomicrograph 1). In deformation, biotite is preserved with local formation of chlorite and / or fine muscovite + chlorite + epidote. The microcline is euhedral to subhedral (0.4-4 mm), rich in inclusions of biotite, quartz and plagioclase and with mymequitic texture. The smaller crystals have recrystallization and polygonal shape, as a granoblastic arrangement. The biotite (0.2-0.4 mm) is brown, prismatic, subhedral, and may be interstitial or be included in the microcinium, which can occur as aggregates of 3 to 4 grains and appear associated titanite. It tends to be aligned, marking an incipient foliation, usually associated with quartz and andesine, and may also be included in the latter.</p>
					<figure class="figure">
							<a href={pedra_3}><img src={pedra_3} class="img-fluid" alt="" /></a>
							<figcaption class="figure-caption">Photomicrography 1</figcaption>
					</figure>
		<hr />
		<span>[1] Fixation of small vegetable bodies that evolved in a dry environment, in this case on the rock.</span>

        </div>
		</>
    )
}