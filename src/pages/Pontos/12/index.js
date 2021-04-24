import NavBar from "../../../components/Navbar";
import areniza_1 from "./media/areniza_1.jpg";
import "../1/index.css";

export function ArenizaBarreira(){
    return(
        <>
        <NavBar />
        <div className="container">
        <h2>Arenização das Barreiras</h2>
            <p className="text-article">Esse Local de Interesse localiza-se em João Pessoa, nas proximidades da tríplice fronteira com Bayeux e Santa Rita. O acesso se dá pelo Distrito Industrial, passando pelo 'Afloramento da Formação Beberibe'. É uma área circular, com cerca de 75 mil m2, formada por um pacote arenoso com dunas e inúmeras lagoas (foto 1), no Horst Tabuleiro das Lagoas (Brito Neves et al. 2009).</p>
            <div className="text-center">
                    <figure className="figure">
                            <a href={areniza_1}><img src={areniza_1} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Foto 1</figcaption>
                    </figure>
            </div>
            <p className="text-article">Esse horst corresponde a um dos pontos mais altos da área do projeto, com cerca de 100m de altitude. O pacote sedimentar é bastante fino (cerca de 40m), formado basicamente pelos arenitos Plio-pleistocênicos da <b>Formação Barreiras</b>. O relevo plano, o alto índice pluviométrico concentrado no inverno e a geologia favorecem a infiltração da água, lixiviando os minerais hidrossolúveis e concentrando, na camada superior, o quartzo, que forma o pacote arenoso. Assim, do ponto de vista pedológico, pode ser classNameificado como <b>neossolo quartzarênico</b>, sem contato lítico no primeiro meio metro de profundidade, com baixo nível de pedogênese, passando do horizonte A diretamente para o C/R (EMBRAPA, 2013). O pacote A é formado por 95% de quartzo, calcedônia e opala. O horizonte inferior é enriquecido de ferro e alumínio (‘fragipan’), o que dificulta a infiltração da água, facilitando seu acúmulo na superfície e formando as lagoas. Essa origem pedogenética pode ser confirmada por meio da coleta de material para analisar a presença de minerais pesados instáveis ou através da avaliação da uniformidade dos materiais do solo para se identificar a filiação ao arenito por meio de parâmetros estatísticos de distribuição granulométrica e lâminas delgadas.</p>

        </div>
        </>
    )
}