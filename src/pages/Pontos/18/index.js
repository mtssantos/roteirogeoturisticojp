import NavBar from "../../../components/Navbar";
import academia_paraibana from "./media/academia_paraibana.jpg"


export function Academia(){
    return(
        <>
        <NavBar />
        <div class="container text-1">
            <h2>Academia Paraibana de Letras</h2>
            <p>Situa-se na Rua Duque de Caxias, nº 25, na esquina com a Rua D. Ulrico, defronte ao átrio do Complexo São Francisco. O terreno pertencia à Ordem Terceira de São Francisco e em 1947 foi vendido para a Academia. O prédio então existente teve de ser demolido e reconstruído devido às péssimas condições em que se encontrava.</p>
            <p>Por se tratar de um prédio do século XX construído com elementos arquitetônicos de residência civil do período colonial (foto 1) e que também utiliza blocos maciços de calcário nas paredes e cercaduras, provavelmente extraído da pedreira da Ilha do Bispo, já em atividade na década de 1940, justifica-se sua seleção como Local de Interesse enquanto exemplo do valor cultural e econômico do elemento da geodiversidade ex situ supramencionado. O valor estético pode ser visualizado nos belos nichos de cantaria esculpidos nessa rocha, nas cercaduras das portas e janelas, resultado em um trabalho artesanal primoroso. O prédio foi tombado pelo IPHAEP em 1980, a partir do decreto nº 8643.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={academia_paraibana}><img src={academia_paraibana} class="img-fluid" alt="" /></a><br />
                            <figurecaption class="figure-caption">Foto 1</figurecaption>
                    </figure>
            </div>
        </div>
        </>
    )
}