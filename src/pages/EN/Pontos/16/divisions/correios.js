import riobranco_1 from '../media/riobranco_1.JPG';

export function Correios(){
    return(
        <>
            <div class="container text-1">
            <p className="text-article">The 'Casa da Praça do Erário' was built under the administration of Governor Jeronymo de Mello e Castro, in 1782. At first it served as a butcher shop, due to the close presence of the Chamber that oversaw the sale of meat and later became the market public. From 1869, in the government of Barão do Abiaí, it functions as a post office, having this function until 1971, when it became a deposit. At that time, its condition was regrettable, with the roof falling apart, having been restored in 1981. Currently, it serves as an office and library for IPHAN (photo 1).</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={riobranco_1}><img src={riobranco_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 1</figcaption>
                            </figure>
                </div>
		    <p className="text-article">The columns that support the sides of the house are composed of solid blocks of limestone one meter long and 30 cm thick, while those on the eaves of the windows measure 20 x 20 cm. They have the same textural and mineralogical characteristics as the limestone on the walls of the 'Casa do Erário', also from the Gramame Formation (Maastrichtian).</p>
            </div>
        </>
    )
}