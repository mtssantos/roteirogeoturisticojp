import  matriz_1  from "../media/matriz_1.JPG";
import  matriz_2  from "../media/matriz_2.jpg";
import  matriz_3  from "../media/matriz_3.jpg";
import  matriz_4  from "../media/matriz_4.jpg";


export function Matriz(){
    return(
        <>
                <p className="text-article">A atual igreja, proclamada Basílica em 1997, foi a quarta edificação naquele local, a última datada de 1881. Sem um estilo arquitetônico definido, sua fachada possui duas torres avarandadas com balaústres e no centro um frontão com a imagem da padroeira (foto 1). A parte interna, sem muito lavor artístico, é formada por uma nave central, dois corredores laterais e uma pequena sacristia. Foi tombada pelo IHPAEP em 1998, através do decreto nº 20132.</p>
                <div class="text-center">
                        <figure class="figure">
                            <a href={matriz_1}><img src={matriz_1} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Foto 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">A área externa do pátio da igreja tem escultura em mármore denominada ‘Nossa Senhora das Neves’ (foto 2) que, segundo informação oral fornecida por técnicos do IPHAEP, deve datar do início do século XIX. A base, quadrada com quinas recortadas, é composto por um ortognaisse sienogranítico rico em K-feldspato e com granada, com granulometria média e minerais orientados formando um bandamento. Provavelmente essa base foi inserida posteriormente sob a estátua, já no século XX.</p>
                        <figure class="figure">
                            <a href={matriz_2}><img src={matriz_2} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 2</figcaption>
                            </figure>
                <p className="text-article">Em lâmina delgada, o ortognaisse sienogranítico apresenta granulometria média a grossa, inequigranular, com o tamanho dos minerais variando de cerca de 1 a 10 mm. Contém microclina (45%), quartzo (33%) e plagioclásio (15%), além de biotita (3%), granada (2%) e minerais opacos (2%). Como minerais acessórios, com menos de 1%, tem-se epídoto e zircão. O microclínio ocorre com tamanho variando entre 1,5 a 9 mm, com geminação do tipo tartan, além de cristais com pertitas. O quartzo ocorre como cristais anédricos, alguns com extinção ondulante e com inclusões de biotita, plagioclásio, microclina, minerais opacos e granada, além disso ocorrem intercrescidos com plagioclásio em mirmequitas (fotomicrografia 1a). O plagioclásio ocorre com geminação polissintética, em cristais anedrais a subedrais com tamanhos em torno de 5 mm. Os cristais podem conter inclusões de biotita, quartzo, opacos e granada. A biotita ocorre como grãos anedrais a subedrais tabulares com tamanho em geral entre 1 e 2 mm. Apresenta inclusões de zircão e minerais opacos. A granada ocorre com textura anedral granular, com pouquíssimos cristais apresentando forma subedral, além do tamanho ser de cerca de 2 mm. Apresentam inclusões de minerais opacos e podem estar inclusos em quartzo, plagioclásio e microclina. Os minerais opacos ocorrem como cristais anedrais a subedrais granulares de tamanho em torno de 0,1 mm. Ocorrem inclusos em biotita, granada, quartzo, microclina e plagioclásio. O epídoto ocorre como cristais de tamanho variando 0,1 a 0,55 mm, em geral subedrais, com diversas seções com forma prismática, enquanto que o zircão ocorre principalmente incluso em biotita, gerando halos pleocróicos (fotomicrografia 1b). Os cristais são diminutos, atingindo no máximo cerca de 0,5 mm e são subedrais em geral.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={matriz_3}><img src={matriz_3} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Fotomicrografia 1a</figcaption>
                        </figure>
                </div>
                <div class="text-center">
                        <figure class="figure">
                                <a href={matriz_4}><img src={matriz_4} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Fotomicrografia 1b</figcaption>
                        </figure>
                </div>
        </>
    )
}