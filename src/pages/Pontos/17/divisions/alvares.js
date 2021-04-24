import alvares_1 from '../media/alvares_1.JPG';
import alvares_2 from '../media/alvares_2.JPG';
import alvares_3 from '../media/alvares_3.JPG';
import alvares_4 from '../media/alvares_4.jpg';
import alvares_5 from '../media/alvares_5.jpg';

export function Alvares(){
    return(
        <>
            <p className="text-article">Segundo o Jornal a União (30.11.1923), em 29 de novembro de 1923, a pedido do Governador Solon de Lucena (1920-1924), amigos e familiares, a estátua em homenagem ao ex-governador Álvaro Lopes Machado (1892-1896) talhada em bronze maciço, proveniente da Europa, inaugurada em 03 de fevereiro do ano seguinte (foto 1a).</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_1}><img src={alvares_1} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Foto 1a</figcaption>
                    </figure>
            </div>
            <p className="text-article">Ambos os volumes do pedestal são compostos por um sienogranito, de proveniência desconhecida, com textura fanerítica fina a média, e matriz composta por quartzo, plagioclásio, biotita e opacos (provavelmente titanita) e por fenocristais de K-feldspato (foto 1b, c). O volume superior apresentam mais plagioclásio e quartzo e menos K-feldspato que o inferior.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_2}><img src={alvares_2} class="img-fluid" alt="" /></a><br /><br />
                            <figcaption class="figure-caption">Foto 1b</figcaption>
                    </figure>
            </div>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_3}><img src={alvares_3} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Foto 1c</figcaption>
                    </figure>
            </div>
            <p className="text-article">Foi elaborada uma lâmina delgada do volume inferior. A rocha possui granulometria média, inequigranular, com o tamanho dos minerais variando de 0,2 a 3 mm. Corresponde a um biotita sienogranito contendo quartzo (34%), microclina (22%) e plagioclásio (13%), além de biotita (17%), minerais opacos (3%), epídoto (3%), zircão (2%) e hornblenda (1%). Como minerais de transformação são encontrados ainda moscovita (3%) e clorita (2%). O quartzo ocorre como cristais anédricos, muitas vezes associados aos demais félsicos (fotomicrografia 1a), tendo a microclina geminação tartan e o plagioclásio geminação polissintética. A biotita, marrom, ocorre como palhetas subédricas. Por vezes a biotita mostra cor verde, resultado da alteração para clorita. A hornblenda ocorre como cristais alongados de cor verde. O zircão aparece de forma euédrica, com relevo forte e inclusa em biotita (fotomicrografia 1b), enquanto que moscovita e clorita são produto de alteração da biotita.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_4}><img src={alvares_4} alt="" /></a><br /><br />
                            <figcaption class="figure-caption">Fotomicrografia 1a</figcaption>
                    </figure>
            </div>
            <div class="text-center">
                    <figure class="figure">
                            <a href={alvares_5}><img src={alvares_5} alt="" /></a>
                            <figcaption class="figure-caption">Fotomicrografia 1b</figcaption>
                    </figure>
            </div>

        </>
    )
}