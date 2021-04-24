import NavBar from "../../../components/Navbar";
import sao_1 from "./media/sao_1.jpg";
import sao_2 from "./media/sao_2.jpg";
import sao_3 from "./media/sao_3.jpg";
import sao_4 from "./media/sao_4.JPG";
import sao_5 from "./media/sao_5.JPG";
import sao_6 from "./media/sao_6.JPG";

export function SaoFrancisco(){
    return(
        <>
        <NavBar />
        <div class="container text-1">
                <h2>Centro Cultural São Francisco</h2>
                <p>Localiza-se na Praça São Francisco, início da rua Duque de Caxias. Faz parte do Conjunto a Igreja de Santo Antônio, o Convento de São Francisco e a ordem Terceira de São Francisco (figura 1), acrescido do horto com a fonte de Santo Antônio, essa um Local de Interesse que será discriminado à parte posteriormente. Por estar entre os mais belos representantes da arquitetura barroca nacional, uma belíssima expressão artística na arte da cantaria portuguesa, além da presença do patrimônio azulejar nas paredes do adro e fósseis em seu piso, justifica-se esse local como Interesse Geoturísico.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_1}><img src={sao_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Figura 1</figcaption>
                        </figure>
                </div>
                <p>O conjunto dos franciscanos, que começara a ser erguido nos primórdios da fundação da cidade, e cuja edificação ficara intacta no período holandês, teve sua evolução histórica narrada pelo frei Jaboatão, no ‘Orbe Seráfico’. Segundo Jaboatão (1861), em meados do século XVII, o Convento teria de ser reedificado, enquanto a Igreja estava restrita a um amplo sobrado com um corredor, em direção à capela-mor, voltado para o nascente. Recorrendo aos moradores e prontamente socorridos, retornou-se às obras da igreja e convento em 1718. A fachada é finalizada em 1779, segundo uma inscrição no frontispício, a torre em 1783 (PINTO, 1977) e o muro do adro em 1788 (BARBOSA, 1953), sendo essas as últimas obras concluídas do conjunto.</p>
                <p>Todo o conjunto foi erguido tendo como base o calcário, abundante no próprio sítio dos franciscanos e explorado em várias pedreiras, sendo um exemplo da “escola franciscana” na cantaria, arquitetura, na pintura, na talha e na azulejaria.</p>
                <p>O piso do adro apresenta blocos de calcário maciço, de coloração creme, de 40 x 20 cm, alguns exibindo conchas de moluscos mineralizadas (foto 1a). Pertencente à Formação Gramame, de idade Maastrichtiana (71-66 Ma), representa os primeiros estágios de um ambiente marinho de baixa energia, com calmaria tectônica.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_2}><img src={sao_2} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 1a</figcaption>
                        </figure>
                </div>

                <p>Entretanto, trabalhos arqueológicos executados pelo IPHAN, em setembro de 2015, detectaram a presença de um piso abaixo do atual, formado por cerâmica e tijolos, provavelmente o piso original do adro. O adro é ladeado por dois tipos de painéis de azulejos lisos e enxaquetados, que se intercalam: azulejos brancos e azulejos brancos e azuis. Entre eles, três nichos em cada lado revestidos por azulejos decorativos policrômicos em tons azuis sobre fundo branco, representando a saga da Via Crucis. O trabalho é atribuído ao português Policarpo de Oliveira Bernardes, do século XVIII (PINHEIRO, 2005). Todos esses painéis apresentam graves defeitos estruturais, a exemplo de desprendimento da parede, rachaduras e embrechamentos, mesmo tendo passado, em 2010, por um processo de restauração, executada pelos alunos da Oficina-Escola (foto 1b). </p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_3}><img src={sao_3} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 1b</figcaption>
                        </figure>		
                </div>

                <p>A Igreja de Santo Antônio possui obras de arte de inestimável valor, a exemplo dos altares, ricamente ornamentados e banhados a ouro; um grandioso painel, com mais de 40 metros de comprimento, que orna o forro da nave; púlpito, com uma moldura na entrada, encimado por coroa dourada, além das cantarias em calcário em portas, escadas (foto 2a), janelas, lavatório (foto 2b), pilastras, assentos (foto 2c), entre outras, todos muito bem executados e que denotam o valor econômico e estético de um elemento da geodiversidade, nesse caso a rocha, associado ao patrimônio cultural imaterial, a arte da cantaria.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_4}><img src={sao_4} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 2a</figcaption>
                            </figure>
                </div>

                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_5}><img src={sao_5} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 2b</figcaption>
                            </figure>

                </div>

                <div class="text-center">
                        <figure class="figure">
                                <a href={sao_6}><img src={sao_6} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 2c</figcaption>
                        </figure>
                </div>


                <p>O amplo átrio conserva ainda o piso original em calcário, o forro com pintura simples, sendo a portada principal, que dá acesso à nave da Igreja, o elemento que mais se destaca por ser ricamente trabalhada em pedra. As paredes da nave são ornamentadas por azulejos datados da década de 1730, de autoria do artista português Teotónio dos Santos, e retrata a saga de José do Egito (ESTÁCIO FERNANDES, 2016, informação oral). O púlpito, com elementos figurativos de anjos decorando o teto, possui um guarda-corpo guarnecido por uma balastrada torneada.</p>
        </div>
        </>
    )
}