import domadauto from '../media/domadauto.jpg';

export function Geral(){
    return(
        <>
            <p className="text-article">Inaugurated in 1919, at the confluence of Visconde de Pelotas and D. Pedro I streets, it has already received the names Campo do Conselheiro Henriques and Praça do Carmo and today honors the first Bishop of Paraíba, D. Adaucto Henriques. It was selected for being part of a place of intense tourist visitation, the Complexo do Carmo, formed by the old Episcopal Palace (north annex), Nossa Senhora do Carmo Church (in the center) and Santa Tereza Church (south annex, photo 1), as well as as the house of Comendador Santos Coelho, known as 'Casarão dos Azulejos'.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={domadauto}><img src={domadauto} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Photo 1</figcaption> 
                    </figure>
            </div>
            <p className="text-article">The Complexo do Carmo is one of the main representatives of the Baroque style in Brazil, whose rocks used disclose the local geodiversity and present beautiful stonework. In addition, the presence of the bust in honor of Álvaro Lopes Machado, in the center of the square, with its two syenogranites, serves as an element of geodiversity, important for its rarity and cultural, scientific and pedagogical value.</p>        
        </>
    )
}