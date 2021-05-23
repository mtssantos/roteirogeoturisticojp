import NavBar from '../../../../components/Navbar';
import falha_1 from './media/falha_1.jpg';
import falha_2 from './media/falha_2.jpg';
import falha_3 from './media/falha_3.jpg';
import falha_4 from './media/falha_4.jpg';
import falha_5 from './media/falha_5.jpg';


export function FalhaSanhaua(){
    return(
        <>
        <NavBar />
        <div class="container text-1">
            <h2>Sanhauá Failure</h2>
					<p className="text-article">The panoramic view point is located on a small hill, about 15 meters high, between the upper city and the old port of Varadouro (photo 1), being the only example of an existing square in the city. This square includes a series of properties listed by IPHAEP: Igreja São Frei Pedro Gonçalves, Hotel Globo and properties nº 02, 10, 16, 36, 48 and 75.</p>
					<div class="text-center">
							<figure class="figure">
									<a href={falha_1}><img src={falha_1} class="img-fluid" alt=""  /></a>
									<figurecaption class="figure-caption">Photo 1</figurecaption>
							</figure>
					</div>
				
					<p className="text-article">The Church of São Frei Pedro Gonçalves is one of the oldest in the city, but with few references in colonial literature, perhaps because it is a small peripheral chapel or because of the iconography of the time, privileging the upper city. One of the few documents in which it was registered is the Grangeiro map, dated 1692 (figure 1), as well as a reference, in the Book of Tombo of the São Bento Monastery, dated 1735 (BOOK OF TOMBO, 1948). Its denomination is associated with the holy protector of the men of the sea, having arrived in Brazil through the first navigators. In João Pessoa, the work of the navigators, added to the traders of Varadouro, was essential for the Church to be 'built' in 1843 (photo 2a). From the square, there is a splendid view of the Sanhauá River and part of the Paraíba River valley (photo 2b). </p>
					<div class="text-center">
							<figure class="figure">
									<a href={falha_2}><img src={falha_2} class="img-fluid" alt="" /></a><br />
									<figurecaption class="figure-caption">Photo 2a</figurecaption>
							</figure>		
					</div>
					<div class="text-center">
							<figure class="figure">
									<a href={falha_3}><img src={falha_3} class="img-fluid" alt="" /></a>
									<figurecaption class="figure-caption">Photo 2b</figurecaption>
							</figure>	
					</div>		
					<div class="text-center">
							<figure class="figure">
									<a href={falha_4}><img src={falha_4} class="img-fluid" alt="" /></a><br />
									<figurecaption class="figure-caption">Figure 1</figurecaption>
							</figure>
					</div>		
                    <p className="text-article">The square is located directly on the limestone, which emerges just below the retaining wall of Hotel Globo on the west side that connects to the port, along the train tracks.</p>
                    <p className="text-article">In remote times, before the conquest and consolidation of the urban network, the Sanhauá River and its tributaries probably carved the slope where the limestone touches. With urbanization and subsequent deforestation, exposing the western slope of the plateaus, the weathering caused the silting of the area of ​​the then Porto do Capim, in Varadouro, “pushing” the Sanhauá River further west.</p>
                    <p className="text-article">The handshake between the indigenous leader Piragibe and João Tavares, representing the Portuguese Crown, which sealed the peace agreement and later provided the foundation of the city of Nossa Senhora das Neves, took place on the banks of the Sanhauá River, hence its importance not just ecological-environmental, but historical-cultural.</p>
                    <p className="text-article">This river is relatively linear, with a predominantly SW-NW flow direction and shallow escarpments. According to Araújo (2012), the configuration of the land in the historic center in Alto and Baixo is the result of a normal fault that crosses the western sector of the coastal boards, with a northeast direction. This failure, proposed after studies using a geological map elaborated from SRTM image, drilling testimonies and fieldwork, would fit the Marés and Sanhauá rivers, in addition to the intermediate portion of the Gramame River, which can be viewed on the geological map and represented in figure 2, which justifies the outcrop of the <b> Gramame Formation </b> limestone (Maastrichtians) in these slopes, along this fault plane (point A in figure 2, for example). The outcrop of these limestones was responsible for the punctual appearance of a series of sources at a certain level of this strand that served as sources of supply for the spring Nossa Senhora das Neves, the first name given to the municipality of João Pessoa, on 08/05/1585, some of which are considered a Place of Interest on this site (Fonte de Santo Antônio, Cacimba do Povo and Fonte dos Milagres). Andrades Filho (2010) studied the sub-basin using remote sensing techniques and suggested that this region was affected by neotectonic flaws, of Quaternary age.</p>
					<div class="text-center">
							<figure class="figure">
									<a href={falha_5}><img src={falha_5} class="img-fluid" alt="" /></a><br />
									<figurecaption class="figure-caption">Figure 2</figurecaption>
								</figure>
					</div>
                    <p className="text-article">The exceptional aesthetic and scientific values, combined with the extremely high functional value, justify considering the 'Sanhauá Fault' as a representative of the area's geopatrimony. </p>
                    </div>
        </>
    )
}