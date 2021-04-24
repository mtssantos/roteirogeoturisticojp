import NavBar from '../../../components/Navbar';
import cacimba_1 from './media/cacimba_1.JPG';
import cacimba_2 from './media/cacimba_2.png';
import "../1/index.css";


export function Cacimba(){
    return(
        <>
        <NavBar />
            <div className="container">
                <h2>Cacimba do Povo</h2>
                <p className="text-article">Localiza-se no atual Bairro das Trincheiras, no interior de um sítio no Distrito Mecânico, a cerca de 50 metros da principal via de acesso, a Rua Rodrigues Chaves. Rodriguez (1962) ressalta a sua importância como fonte de abastecimento da população da região sul, destacando o ano de 1857 como o de sua construção tendo, a partir daí, referência em diversos documentos históricos do século XIX e início do XX. Com o encanamento da água, em meados de 1950, foi perdendo importância, até seu (quase) total esquecimento.</p>
                <p className="text-article">Do ponto de vista geomorfológico, toda a área do Distrito Mecânico está encaixada em um anfiteatro de cabeceira de drenagem preenchida por sedimentos aluviais finos, coberta por uma intensa vegetação de médio e grande portes. Juntamente com outras exsurgências e regatos, abastece o Rio Sanhauá e seus afluentes, como o Riacho do Pacote. Diferentemente das duas fontes anteriores, essa se localiza em uma vertente voltada para o oeste, a uma altitude de cerca de 19 metros.</p>
                <p className="text-article">A cacimba, na verdade, consiste de um tanque de acumulação, escavado no calcário, com cerca de 1,60 m x 1,30 m e 1,0 metro de profundidade (foto 1), que armazena a água proveniente de uma cota superior. Considerando que naquela altitude localiza-se a base da Formação Barreiras, responsável pelo reservatório de água, pode-se classNameificar a exsurgência tanto como uma ‘fonte de contato geológico’ (figura 1), quanto como uma ‘fonte ‘de falha’, segundo Leinz e Amaral (2001), por estar associada à falha geológica, cujo plano se posiciona a oeste dos tabuleiros da Formação Barreiras.</p>	
                        <figure className="figure">
                                <a href={cacimba_1}><img src={cacimba_1} className="img-fluid" alt="" /></a><br /><br />			
                                <figcaption className="figure-caption">Foto 1</figcaption>
                        </figure>
                        <figure className="figure">
                                <a href={cacimba_2}><img src={cacimba_2} className="img-fluid" alt="" /></a>
                                <figcaption className="figure-caption">Figura 1</figcaption>
                        </figure>

        </div>
        </>
    )
}