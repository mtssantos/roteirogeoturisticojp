import { Navbar } from "../../../../components/EN/Navbar";
import santo_antonio_1 from './media/santo_antonio_1.JPG';
import santo_antonio_2 from './media/santo_antonio_2.jpg';


export function Antonio(){
    return(
        <>
            <Navbar />
            <div class="container text-1">
                <h2>San Antônio Fountain</h2>
                <p className="text-article">It is located on the land of the Franciscans, inside the attached garden, on the northwest side of the boards. To access it, you must go down a relatively steep path for about 350 meters. Since the beginning of the conquest of the captaincy, its waters have supplied the population. In Dutch iconography, the dimension with which it was portrayed appeared to be large, with a stream that flowed towards the Sanhauá River.</p>
                <p className="text-article">However, despite this abundance in the volume of water, the population only had unrestricted access to it until 1609, when the guardian of the Church of São Francisco, Frei Cosmo de San Damião built the wall surrounding the Church, represented in the iconography of the time (PINTO, 1977). In 1717, the facade of the fountain was built (PINTO, 1977), according to the year carved on a cornice with volutes and acanthus leaves on the upper part. Access will be restricted to the Franciscan community, except in cases of public calamities, such as droughts or diseases, when it would be open to the population (RODRIGUEZ, 1962). Until today, their access is only with the authorization of the friars.</p>
                <p className="text-article">The record prepared by Brother Antonio Jaboatam shows, among others, the natural aspects of the site where the Church of San Francisco was based, including its source and its abundant limestone, the region from which the raw material for buildings in the first decades of urban evolution. </p>
                <p className="text-article">The façade, symmetrical and worked in limestone, maintains the original characteristics in Baroque (photo 1) and has several small cards with Latin sentences, among them ‘S. Antoni Ora Pro Nobis ’(“ Saint Anthony prays for us ”). The base consists of a tank, 1.8 m long and 40 cm high, parallel to the retaining wall that extends to the sides of the set that forms the frontispiece. This is formed by limestone blocks 50 cm long by 30 cm high. According to old photos, water gushed from the pediment to the tank through a dolphin carved out of limestone. However, this piece was lost, leaving only the part closest to the wall.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={santo_antonio_1}><img src={santo_antonio_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">What remains of the dolphin sculpture is surrounded by four narrow columns, about 10 cm wide, forming a lower floor, with two nipples, about half a meter high, at the ends. The narrower upper floor is more ornate, reducing the size of the nipples at the ends and adding small scowls and acanthus leaves that make up two narrow columns. In the center, the niche where the image of Santo António was located, which was lost over time.</p>
                <p className="text-article">It was listed, along with the entire São Francisco Complex, by IPHAN, on October 16, 1952.</p>
                <p className="text-article">From the geomorphological point of view, like the Cacimba do Povo, it is located on the slopes facing west, at an altitude of about 22 meters, in a great depression, sitting directly on the limestone (figure 1), which flourished abundantly on the ground of the Franciscans. Thus, it can be classified as a 'source of geological contact'. According to Araújo (2012), these aspects are complex, with different segment profiles. In the upper and lower portions the profile, of the straight type, presents a high slope that decreases in the intermediate portion, where the source is located, in the contact of the Barreiras sandstone (top) with the Gramame limestone (base). This zone is constituted by the drainage amphitheater, which tends to reduce the speed of the water flow and even retain it, forming small streams and ponds.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={santo_antonio_2}><img src={santo_antonio_2} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Figure 1</figcaption>
                        </figure>
                </div>
            </div>
        </>
    )
}