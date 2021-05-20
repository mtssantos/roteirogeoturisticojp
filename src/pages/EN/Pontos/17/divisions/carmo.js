import carmo_1 from '../media/carmo_1.jpg';
import carmo_2 from '../media/carmo_2.jpg';
import carmo_3 from '../media/carmo_3.JPG';


export function Carmo(){
    return(
        <>
            <p className="text-article">The Carmelite order entered the territory of Paraiba together with the other orders, at the end of the 16th century, when it began to raise its patrimony. In 1733, the Igreja do Carmo, the first to be founded in the city, was deteriorated, with the religious resorting to the Crown. The “church that has a very old one, which is also very old, and made of clay and stone”, where the works of the convent “will still be with two earthy dormitories made of clay taypa, and only with a house, new made of stone. and lime, and another beginning ”[1].</p>
            <p className="text-article">Together with the Church of Santa Tereza (or Church of the Third Order of Carmo, more modest), in its southern annex, it represents a beautiful example of Baroque architecture. It has a tower in the Quinhentist style, the facade with adornments and arabesques in the Baroque style and traces of sacred Carmelite art, with the shield of the order adorning the top of the pediment. The windows, the window and the doors are surrounded by two high relief volutes carved in limestone.</p>
            <p className="text-article">Like all buildings from the colonial period, this church has the limestone of the Gramame Formation (Maastrichtian) as its main geo-resource, with remnants of the original floor still visible at the entrance (photo 1a). The floor consists of a rough limestone slab, 20 cm thick, laid with clay mortar. This limestone has a cream color, probably associated with a more weathered, massive and poor facies, with the naked eye and the touch, of siliciclastic material.</p>
                    <figure class="figure">
                            <a href={carmo_1}><img src={carmo_1} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Photo 1a</figcaption>
                    </figure>
            <p className="text-article">On the left side of the entrance to the nave, there is a holy water sink, also in limestone, surmounted by a shell, surrounded by tiles (photo 1b). The tile panel, measuring 2.57 X 0.95 cm, probably from the second half of the 18th century, has a Baroque style, with ornamental richness, whose volumetry and drama of organic and architectural forms proliferation of concave-convex, wavy lines, shells , flowers, scrolls and cards are consequences of the illusion of light-dark contrasts. This is one of the 10 tile panels that line the walls of the Church's vestibule, nave and chancel, most of them in Rococo style (photo 1c).</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={carmo_2}><img src={carmo_2} class="img-fluid" alt="" /></a><br /><br />
                            <figcaption class="figure-caption">Photo 1b</figcaption>
                    </figure>
            </div>
                    <figure class="figure">
                            <a href={carmo_3}><img src={carmo_3} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Photo 1c</figcaption>
                    </figure>
            <p className="text-article">In an inventory of the Carmelite goods carried out by technicians from IPHAEP, about 90 deposits were identified, most of them in the right side corridor of the Igreja do Carmo. One of them, from the mid-19th century, has the epitaph sculpted in Carrara marble, one of the few rocks in the area other than limestone. </p>
            <hr />
            <span>[1] A.H.U.-ACL_CU_014, Cx 8, doc. 702, fl. 3.</span>
        </>
    )
}