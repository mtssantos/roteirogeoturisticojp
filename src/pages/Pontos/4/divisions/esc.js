import praca_5 from '../divisions/media/praca_5.JPG'
import "../../1/index.css";

export function EsculJP(){
    return(
        <div className="container text-1">
            <p>O Escultório de João Pessoa (foto 2) substituiu o coreto e foi esculpido em um granito, com coloração cinza a creme, com textura fanerítica fina, composto por quartzo, plagioclásio e biotita, além de fenocristais de K-feldspato.  </p>
                    <figure className="figure">
                            <a href={praca_5}><img src={praca_5} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Foto 2</figcaption>
                    </figure>
            <p>Segundo o Jornal a União (08.09.1933), as obras de cantaria do escultório, como é conhecido o monumento no centro da praça, foram executadas no Rio de janeiro e, em 18 de maio de 1933, pesando 130 toneladas, foi trazido, pelo navio a vapor Jaceguay. A pedra fundamental foi colocada em 10 de junho e a obra inaugurada em 08 de setembro, com a presença do então presidente Getúlio Vargas.</p>
        </div>
    )
}