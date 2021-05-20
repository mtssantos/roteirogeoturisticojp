import praca_5 from '../divisions/media/praca_5.JPG'
import "../../1/index.css";

export function EsculJP(){
    return(
        <div className="container text-1">
            <p className="text-article">The João Pessoa Sculpture (photo 2) replaced the bandstand and was sculpted in granite, with a gray to cream color, with a fine phaneritic texture, composed of quartz, plagioclase and biotite, in addition to K-feldspar phenocrystals.</p>
                    <figure className="figure">
                            <a href={praca_5}><img src={praca_5} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Photo 2</figcaption>
                    </figure>
            <p className="text-article">According to Jornal a União (08.09.1933), the sculptural stonework, as the monument in the center of the square is known, was carried out in Rio de Janeiro and, on May 18, 1933, weighing 130 tons, was brought, by the Jaceguay steamer. The cornerstone was laid on June 10 and the work opened on September 8, with the presence of then President Getúlio Vargas.</p>
        </div>
    )
}