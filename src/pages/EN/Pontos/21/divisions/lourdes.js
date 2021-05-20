import  lourdes_1  from "../media/lourdes_1.JPG";
import  lourdes_2  from "../media/lourdes_2.JPG";


export function Lourdes(){
    return(
        <>
            <p className="text-article">According to the Jornal da União (February 12, 1922), on February 11, 1922, the Statue in honor of Our Lady of Lourdes was inaugurated, in the center of the Square, measuring a total height of 8 meters, with the bronze statue measures 3 meters (photo 1). It was listed by IPHAEP in December 2015.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={lourdes_1}><img src={lourdes_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">The pedestal consists of facoidal gneiss (or ‘augen’ gneiss [1]), similar to what occurs abundantly in the city of Rio de Janeiro. Its origin is unknown, and the occurrence of this type of rock in the Borborema Shield is also common. The gray-colored, leucocratic rock has an uneven texture, with medium to coarse granulometry, showing K-feldspar megaporphyroblasts up to 12 cm, preferably oriented, which leads to a predominantly oval habit (photo 2). The matrix is ​​formed by quartz, plagioclase, biotite, K-feldspar and opaque. It has an incipient metamorphic bandage. </p>
                        <figure class="figure">
                                <a href={lourdes_2}><img src={lourdes_2} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Photo 2</figcaption>
                        </figure>

                <hr />
                <span>[1] Augen, from German, means ‘eye’ because of the flat, eye-like K-feldspar crystals.</span>
            
        </>
        
    )
}