import  lourdes_1  from "../media/lourdes_1.JPG";
import  lourdes_2  from "../media/lourdes_2.JPG";


export function Lourdes(){
    return(
        <>
            <p>Segundo o Jornal a União (12.02.1922), em 11 de Fevereiro de 1922 foi inaugurado a Estátua em homenagem a Nossa Senhora de Lourdes, no centro da Praça, medindo 8 metros de altura no total, sendo que a estátua, de bronze, mede 3 metros (foto 1). Foi tombado pelo IPHAEP em dezembro de 2015.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={lourdes_1}><img src={lourdes_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 1</figcaption>
                        </figure>
                </div>
                <p>O pedestal é constituído de gnaisse facoidal (ou ‘augen’ gnaisse[1]), semelhante ao que ocorre abundantemente na cidade do Rio de Janeiro. Sua procedência é desconhecida, sendo comum também a ocorrência desse tipo de rocha no Escudo da Borborema. A rocha, de coloração cinza, leucocrática, possui textura inequigranular, com granulometria média a grossa, apresentando megaporfiroblastos de K-feldspato com até 12 cm, orientados preferencialmente, o que acarreta um hábito predominantemente ovalado (foto 2). A matriz é formada por quartzo, plagioclásio, biotita, K-feldspato e opacos. Possui um bandamento metamórfico incipiente. </p>
                        <figure class="figure">
                                <a href={lourdes_2}><img src={lourdes_2} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 2</figcaption>
                        </figure>

                <hr />
                <span>[1] Augen, do alemão, significa, ‘olho’, em virtude dos cristais de K-feldspato achatados semelhantes a olhos.</span>
            
        </>
        
    )
}