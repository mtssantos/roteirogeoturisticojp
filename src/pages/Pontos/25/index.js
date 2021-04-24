import NavBar from "../../../components/Navbar";
import casa_1 from "./media/casa_1.JPG";
import casa_2 from "./media/casa_2.JPG";

export function CasaRosa(){
    return(
        <>
        <NavBar />
        <div class="container text-1">
            <h2>Casa do Quartzo Rosa</h2>
                <p>O Local de Interesse localiza-se fora do perímetro do Centro Histórico, na esquina das Avenidas Maximiano de Figueiredo e Camilo de Holanda, no centro, há cerca de 500 metros da Praça da Independência. </p>
                            <p>Diz respeito a uma residência de dois andares, cujas paredes externas estão totalmente decoradas com milhares de fragmentos centimétricos de quartzo róseo (foto 1a), enquanto as janelas apresentam fragmentos de quartzo leitoso (foto 1b). Foi selecionado como um Local de Interesse por ser o único representante na área a apresentar minerais como elementos decorativos da estrutura de uma edificação, o que lhe confere valor científico e estético.</p>
                            <div class="text-center">
                                    <figure class="figure">
                                            <a href={casa_1}><img src={casa_1} class="img-fluid" alt="" /></a>
                                            <figcaption class="figure-caption">Foto 1a</figcaption>
                                    </figure>
                                </div>
                            <div class="text-center">
                                    <figure class="figure">
                                            <a href={casa_2}><img src={casa_2} class="img-fluid" alt="" /></a>
                                            <figcaption class="figure-caption">Foto 1b</figcaption>
                                        </figure>
                            </div>

                <p>A microrregião do Seridó, nos Estados da Paraíba e Rio Grande do Norte, apresenta uma geologia propícia à cristalização de corpos pegmatíticos heterogêneos (zonados), com núcleos (zona IV) preenchidos por quartzo róseo e leitoso, que são explorados desde a II Guerra Mundial (PEREIRA, 2000). Em municípios como Pedra Lavrada, Picuí e Frei Martinho, no Seridó paraibano, dezenas de minas a céu aberto são lavradas por garimpos artesanais, que deixaram cicatrizes na paisagem, com toneladas de rejeitos de minerais que não foram aproveitados para venda. O quartzo possui,  em  sua  composição o silício, utilizado na indústria da informática para produção de chips de computador, também na indústria gemológica, em brincos e anéis. Muitos giradores[1] de João Pessoa são enfeitadas com esse mineral. Assim, provavelmente, o quartzo que adorna a casa foi proveniente de algum pegmatito do Seridó, na Paraíba ou Rio Grande do Norte.</p>
                <hr />
                <span>[1] Rotundas.</span>
        </div>
        </>
    )
}