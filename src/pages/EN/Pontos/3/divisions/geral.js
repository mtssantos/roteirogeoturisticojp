import indep_1 from './media/indep_1.jpg';
import "../../1/index.css"

export function Geral(){
    return(
        <>
            <div className="container text-1">
                        <p className="text-article">Located in the Tambiá Neighborhood, it is located at the junction for several directions: Epitácio Pessoa Avenue, which connects the center to the beach; Maximiano de Figueiredo Avenue, southbound, and Avenues Monsignor Walfredo Leal and D. Pedro I, towards the center.</p>
                        <p className="text-article">Its origin dates back to the opening of Epitácio Pessoa Avenue, in the 1920s, when the then mayor Guedes Pereira (1921-1924), owner of a site in that place, decided to donate it to the city hall, in celebration of the centenary of Brazil's independence ( 1922). The deed of donation contains a reversal clause, that is, it must remain as a square indefinitely so that it is not returned to the heirs.</p>
                        <p className="text-article">In its surroundings there are buildings and monuments of undeniable cultural and historical importance: to the north, the bandstand in an eclectic style, which is contemporary to the erection of the obelisk in the center, both listed by IPHAEP, on August 26, 1980; to the south, the residence where President João Pessoa lived; to the east, the bust in honor of President Epitácio Pessoa, at the beginning of the homonymous avenue; and to the west, Colégio Marista Pio X and its eclectic architecture (photo 1). The obelisk in the center of the square and the bust of Epitácio Pessoa were selected for the qualitative evaluation, because they have rocks that are not found in the physical substrate of the capital.</p>

                            <figure className="figure">
                                    <a href={indep_1}><img src={indep_1} className="img-fluid" alt="" /></a>
                                    <figcaption className="figure-caption">Photo 1</figcaption>
                            </figure>

            </div>
        </>
    )
}