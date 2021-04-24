import NavBar from "../../../components/Navbar";
import gruta_1 from "./media/gruta_1.png";
import gruta_2 from "./media/gruta_2.jpg";
import gruta_3 from "./media/gruta_3.jpg";

export function Gruta(){
    return(
        <>
        <NavBar />
        <div className="container">
            <h2>Gruta das Marés</h2>
                <p className="text-article">O acesso ao Local de Interesse se dá através do Distrito Industrial, passando-se pelo 'Afloramento da Formação Beberibe', a 600 metros da 'Arenização da Formação Barreiras'. A Gruta das Marés (ou Caverna das Marés, como também aparece na literatura), devidamente registrada na Sociedade Brasileira de Espeleologia, faz parte de um sistema de pseudocarstes, todos próximos, formadas nos arenitos Plio-pleistocênicos da <b>Formação Barreiras</b> e associados ao horst Tabuleiro das Lagoas. Possui uma entrada, a 60 metros de altitude, estreita e íngreme, com cerca de 2,5 metros, que acessa a uma galeria por onde escoam as águas do afluente do Rio Marés. Essa galeria, com cerca de 100 metros de extensão no sentido sudoeste-nordeste, localiza-se a um desnível de 20 metros de profundidade e possui uma largura em torno de 3 a 4 metros (foto 1). Não foi encontrado qualquer tipo de registro paleontológico ou arqueológico.</p>
                <div className="text-center">
                        <figure className="figure">
                                <a href={gruta_1}><img src={gruta_1} className="img-fluid" alt="" /></a>
                                <figcaption className="figure-caption">Foto 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">A gênese desse sistemas de cavernas tem relação com um processo de desagregação denominado ‘piping’, ou erosão tubular, no qual a água percola um horizonte areno-argiloso, denominado ‘fragipan’, endurecido, provavelmente aproveitando uma zona de fraturamento, de fragilidade (porosidade estrutural) ou pela ação das raízes, e escava os níveis inferiores mais frágeis, formando condutos que se tornam rotas preferenciais do fluxo de água, intensificando, cada vez mais, a desagregação mecânica (figura 1). Por esses condutos também circulam as águas subsuperficiais quando ocorre o aumento do nível hidrostático, comumente na área a 60 metros. Por serem cavernas bastante rasas, separadas da superfície por poucos centímetros, caminhar nos trechos sobre elas torna-se arriscado. Vez por outra vê-se aberturas no solo, com a formação de pequenos condutos profundos (foto 2).</p>
                <div className="text-center">
                        <figure className="figure">
                                <a href={gruta_2}><img src={gruta_2} className="img-fluid" alt="" /></a>
                                <figcaption className="figure-caption">Foto 2</figcaption>
                        </figure>
                </div>
                <div className="text-center">
                        <figure className="figure">
                                <a href={gruta_3}><img src={gruta_3} className="img-fluid" alt="" /></a>
                                <figcaption className="figure-caption">Figura 1</figcaption>
                        </figure>
                </div>

        </div>
        </>
    )
}