import NavBar from "../../../components/Navbar";
import beberibe_1 from './media/beberibe_1.JPG';
import beberibe_2 from './media/beberibe_2.JPG';
import "../1/index.css";


export function Beberibe(){
    return(
        <>
            <NavBar />
            <div className="container">
                <h2>Afloramento da Formação Beberibe</h2>
                    <p className="text-article">Esse afloramento localiza-se em uma estrada secundária de acentuado declive, sem pavimentação, no Bairro do Distrito Industrial, fora do Centro Histórico, a cerca de 350 metros de um loteamento em construção, com ruas pavimentadas. As rochas da formação foram expostas pelo escoamento de águas pluviais, que abriram sulcos nas laterais da estrada e a área pertence ao Horst Tabuleiro das Lagoas.</p>
                    <p className="text-article">As rochas do Local de Interesse compreendem um arenito quartzoso, com granulometria média, friável e poroso, de cor creme avermelhada, pobremente fossilífero apresentando alguns grãos maiores de quartzo e K-feldspato (foto 1a) e com laminação plano-paralela (foto 1b). Esses grãos são subarredondados a subangulosos, moderadamente selecionados, com dimensão até 2 mm e cimentados por óxido de ferro. O K-feldspato sofre argilização, liberando o óxido de ferro que dá o tom avermelhado à coloração. Pelas características texturais e mineralógicas dessa fácies, propõe-se uma origem fluviolagunar. O elevado nível de alteração impossibilitou a confecção de lâminas delgadas. Foi selecionado como um Local de Interesse por ser um dos raros afloramentos da <b>Formação Beberibe</b> (idade Santoniana), na área, representando a base estratigráfica do <b>Grupo Paraíba</b>.</p>
                    <div className="text-center">
                            <figure className="figure">
                                    <a href={beberibe_1}><img src={beberibe_1} className="img-fluid" alt="" /></a><br /><br />
                                    <figcaption className="figure-caption">Foto 1a</figcaption>
                                </figure>
                    </div>

                    <div className="text-center">
                            <figure className="figure">
                                    <a href={beberibe_2}><img src={beberibe_2} className="img-fluid" alt="" /></a>
                                    <figcaption className="figure-caption">Foto 1b</figcaption>
                                </figure>
                    </div>
            </div>
        </>
    )
}