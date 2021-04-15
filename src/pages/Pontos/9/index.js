import NavBar from "../../../components/Navbar";
import bala_1 from "./media/bala_1.JPG";
import bala_2 from "./media/bala_2.jpg";
import "../1/index.css";


export function Balaustrada(){
    return(
        <>
        <NavBar />
        <div className="container">
            <h2>Balaustrada das Trincheiras</h2>
                    <p>Esse Local de Interesse foi selecionado por seus elementos patrimoniais de cunho cultural e natural, principalmente a visão panorâmica de um vale, no caso um anfiteatro de cabeceira de drenagem, um abismo, em que a construção da referida ‘balaustrada’, no início do século XX, visou proteger os transeuntes na Avenida João da Mata (foto 1). Assim, esse Local, com altitude de 44 metros, tem-se uma vista privilegiada dessa forma de relevo. Ademais, na retaguarda da balaustrada, diversas edificações datadas no início do século XX em estilo eclético e art nouveau, incrementam a importância cultural do Local de Interesse, tendo todo o conjunto arquitetônico sido tombado pelo IPHAEP em 1980, através do decreto nº 8627, além de um busto em homenagem a Camilo de Holanda.</p>
                    <div className="text-center">
                            <figure className="figure">
                                    <a href={bala_1}><img src={bala_1} className="img-fluid" alt="" /></a>
                                    <figcaption className="figure-caption">Foto 1</figcaption>
                            </figure>
                    </div>
                    <p>Desse modo, esse ponto foi selecionado como um Local de Interesse por agregar elementos patrimoniais em uma área pequena: culturais, a partir das edificações contemporâneas à construção da balaustrada e da geodiversidade, no caso uma forma de relevo que possui um papel crucial no entendimento da história geológica da Bacia da Paraíba e que não pode ser desagregado dos aspectos histórico-culturais.</p>
                    <p>A via em que foi construída a balaustrada era, em meados do século XX, um local de passeio da classNamee rica. A partir de um belvedere com bancos, no atual girador, se tinha uma bela vista do Rio Sanhauá à distância, separado por um penhasco coberto por árvores frondosas. Dessa época para hoje, restou o girador, com o citado busto homenageando o responsável pela obra, em um terreno que mostra sinais de afundamento[1], além do vale, com a floresta desmatada e substituída por residências e ao fundo, a fábrica da Intercement.</p>
                    <p>A balaustrada, construída no governo de Camilo de Holanda, em 1917, utilizou calcário de proveniência desconhecida. Não consta na literatura a exploração de calcário na Ilha do Bispo. Pode ser que tenha vindo das pedreiras na vertente do Roger, as mesmas que forneceram para a edificação das igrejas do período colonial ou, mais provavelmente, pela proximidade, da Ilha Tiriri, onde desde o final do século XIX havia uma fábrica de cimento, a mais antiga da América Latina. Esse calcário é predominantemente maciço e sua descrição mineralógica pode ser vista, em lâmina delgada, na facies i) do Local 'Afloramento da Formação Gramame'. O busto, em bronze, encima um pedestal formado por um granito com textura fanerítica fina, a duas micas, com os cristais ligeiramente alinhados.</p>
                    <p>A balaustrada tangencia parte de um anfiteatro extremamente encaixado, cujas vertentes convexo-retilíneas, mostram terraços estruturais que delimitam o contato do calcário Maastrichtianos da <b>Formação Gramame</b>, abaixo, dos arenitos Plio-pleistocênicos da <b>Formação Barreiras</b>, o topo. A partir desses terraços afloram as exsurgências que deram origem, por exemplo, à fonte Cacimba do Povo, selecionada como um Local de Interesse (foto 2).</p>
                    <div className="text-center">
                            <figure className="figure">
                                    <a href={bala_2}><img src={bala_2} className="img-fluid" alt="" /></a>
                                    <figcaption className="figure-caption">Foto 2</figcaption>
                            </figure>
                    </div>

                    <hr />
                    <span>[1] O pedestal e o busto estão visivelmente inclinados, consequência da fase inicial de um ravinamento, logo atrás da construção, assim como parte da balaustrada mostra fissuras.</span>

        </div>
        </>
    )
}