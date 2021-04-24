import bica_1 from './bica_1.JPG';
import fonte_1 from '../1/fonte_1.png';
import "../1/index.css";
import NavBar from '../../../components/Navbar';


export function BicaFeia(){
    return(
        <>
        <NavBar />
        <div className="container">
                <h2>Bica da Maria Feia</h2>
            <p className="text-article">A Bica da Maria Feia, juntamente com a Fonte de Tambiá e a Cacimba do Povo, são as mais periféricas do núcleo urbano colonial e tiveram um papel preponderante para as populações que viviam longe das mais centrais (foto 1); no caso da Bica da Maria Feia, especialmente a população da porção oriental desde o século XIX até meados dos anos 1950, sendo uma fonte pública (ARAÚJO, 2012).</p>
            <div className="text-center">
                    <figure className="figure">
                            <a href={bica_1}><img src={bica_1} alt="" className="img-fluid" /></a>
                            <figcaption className="figure-caption">Foto 1</figcaption>
                    </figure>
            </div>
            <p className="text-article">Localiza-se no atual Bairro de Tambiá, a cerca de 800 metros a leste da Fonte de Tambiá, nas proximidades do Hospital Santa Isabel, pertencente ao então sítio Cruz do Peixe, e foi muito pouco documentada. Segundo Rodriguez (1962), um dos poucos registros de sua existência, a partir do início do século XX, refere-se a ela como Bica do Mandacaru ou do Mindêlo.</p>
            <p className="text-article">Do ponto de vista geomorfológico, o vale fluvial onde está localizado o Rio Tambiá Grande, em cuja vertente retilínea e com alta declividade aflora a Bica da Maria Feia, a uma altitude de 16 metros, faz parte de um conjunto estrutural que inclui Parque Arruda Câmara. Consiste em um anfiteatro de cabeceira de drenagem preenchida por sedimentos aluviais finos sobrepostos por areias da Formação Barreiras, o que propiciou a ocupação de uma intensa vegetação de médio e grande portes. Juntamente com outras fontes, abastece o Rio Tambiá Grande e seus afluentes, como o Riacho das Bombas e o Riacho Boa Vista. Segundo Araújo (2012), essa fonte, assim como a de Tambiá, flui diretamente da porção média-superior do Aquífero Barreiras (figura 1).</p>
            <div className="text-center">
                    <figure className="figure">
                            <a href={fonte_1}><img src={fonte_1} alt="" className="img-fluid" /></a>
                        <figcaption className="figure-caption">Figura 1</figcaption>
                    </figure>
            </div>

            </div>
        </>
    )
}