import carmo_1 from '../media/carmo_1.jpg';
import carmo_2 from '../media/carmo_2.jpg';
import carmo_3 from '../media/carmo_3.JPG';


export function Carmo(){
    return(
        <>
            <p>A ordem carmelita adentrou no território paraibano juntamente com as demais ordens, ao final do século XVI, quando começou a erguer seu patrimônio. Em 1733, a Igreja do Carmo, a primeira a ser fundada na cidade, apresentava-se deteriorada, tendo os religiosos recorrido à Coroa. A “igreja que de prezente tem a qual tambem he muito antiga, e de barro e pedra”, onde as obras do convento “se achão ainda com dous dormitorios térreos de taypa de barro, e só com hum de sobrado, novo feito de pedra e cal, e outro principiado”[1]. </p>
            <p>Juntamente com a Igreja de Santa Tereza (ou Igreja da Ordem Terceira do Carmo, mais modesta), em seu anexo sul, representa um belo exemplar da arquitetura barroca. Possui uma torre em estilo Quinhentista, a fachada com adornos e arabescos no estilo Barroco e traços da arte sacra carmelita, com o escudo da ordem ornamentando o topo do frontão. As janelas, óculo e as portas são circundadas por duas volutas de alto relevo esculpidas em calcário.</p>
            <p>Como todas as edificações do período colonial, essa igreja tem o calcário da Formação Gramame (Maastrichtiano)  como georecurso principal, com remanescentes do piso original ainda visíveis na entrada (foto 1a). O piso consiste em um lajedo de calcário bruto, com espessura de 20 cm, assentado com argamassa de barro. Esse calcário possui uma coloração creme, provavelmente associada a uma fácies mais intemperisada, maciça e pobre, a olho nu e pelo tato, de material siliciclástico.</p>
                    <figure class="figure">
                            <a href={carmo_1}><img src={carmo_1} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Foto 1a</figcaption>
                    </figure>
            <p>Ao lado esquerdo da entrada para a nave, destaca-se uma pia de água benta, também em calcário, encimada por uma concha, cercada por azulejos (foto 1b). O painel de azulejos, medindo 2,57 X 0,95 cm, provavelmente da segunda metade do século XVIII, tem estilo barroco, com riqueza ornamental, cuja volumetria e dramaticidade das formas orgânicas e arquitetônicas proliferação de côncavos-convexos, linhas ondulantes, concheamentos, flores, volutas e cartela são consequências da ilusão dos contrastes claro-escuro. Esse é um dos 10 painéis de azulejos que revestem as paredes do vestíbulo, nave e capela-mor da Igreja, a maior parte em estilo rococó (foto 1c).</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={carmo_2}><img src={carmo_2} class="img-fluid" alt="" /></a><br /><br />
                            <figcaption class="figure-caption">Foto 1b</figcaption>
                    </figure>
            </div>
                    <figure class="figure">
                            <a href={carmo_3}><img src={carmo_3} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Foto 1c</figcaption>
                    </figure>
            <p>Em inventário dos bens dos carmelitas executado por técnicos do IPHAEP, foram identificados cerca de 90 jazigos, a maior parte no corredor lateral direito da Igreja do Carmo. Um deles, de meados do século XIX, tem o epitáfio esculpido em mármore de Carrara, uma das poucas rochas na área diferentes do calcário. </p>
            <hr />
            <span>[1] A.H.U.-ACL_CU_014, Cx 8, doc. 702, fl. 3.</span>
        </>
    )
}