import obelisco_1 from './media/obelisco_1.jpg';
import obelisco_2 from './media/obelisco_2.jpg';
import "../../1/index.css";

export function Obelisco(){
    return(
        <>
            <div className="container text-1">
            <p className="text-article">O obelisco foi inaugurado em 07 de setembro de 1923, na gestão do prefeito Guedes Pereira, o obelisco em comemoração ao Centenário da Independência na gestão do prefeito Guedes Pereira (1921-1924), possui 10,5m da base ao topo. Segundo o ‘Jornal A União’ (08.05.1923), a base já estava colocada há algum tempo e o granito veio de fora do Estado, de proveniência desconhecida, sendo a obra elaborada pelo escultor pernambucano Rodolpho Lima.</p>
	<p className="text-article">A sapata é composta de blocos irregulares de calcário (foto 2a).Sobre ela, a parte inferior da base é um bloco largo e quadrangular constituído por vários tipos de granito, com texturas variáveis: alguns mais grossos, com plagioclásio, biotita, moscovita e quartzo e sem feldspato alcalino (K-feldspato); outros mais finos, rosados e oxidados, com K-feldspato. Esse bloco mais largo encima um bloco menor, composto pelo mesmo material.</p>
	<div className="text-center">
			<figure className="figure">
					<a href={obelisco_1}><img src={obelisco_1} className="img-fluid" alt="" /></a>			
					<figcaption className="figure-caption">Foto 2a</figcaption>
			</figure>
	</div>
	<p className="text-article">A parte mediana é um bloco trapezoidal com os lados ligeiramente encurvados. Essa porção, a superior e o obelisco são compostas por um granito sensu strictu com grãos milimétricos de K-feldspato imersos em uma matriz fanerítica fina, cortada por diques de aplito e com enclaves ricos em biotita (foto 2b).</p>
	<div className="text-center">
			<figure className="figure">
					<a href={obelisco_2}><img src={obelisco_2} alt="" /></a>
				<figcaption className="figure-caption">Foto 2b</figcaption>
			</figure>
	</div>
  <p className="text-article">O calcário da sapata, pertencente à Formação Gramame (Maastrichtiano), considerando que foi construído na década de 1920, provavelmente foi retirado de algum afloramento na Ilha do Bispo ou da Ilha Tiriri, que era, na época, o grande fornecedor de matéria-prima para a fabricação de cimento na capital.</p>
  <p className="text-article">As revitalizações em 2000, na gestão do prefeito Cícero Lucena e, em 2015, na gestão do prefeito Luciano Cartaxo, melhoraram a situação do monumento, com a limpeza e retirada da intensa pichação. Ainda assim, apesar do atual bom estado de conservação, apresenta impregnações de excrementos de insetos, aves noturnas e morcegos, perda de rejunte e bordas, eclosão de vegetais e acúmulo de folhas secas, papeis e outros resíduos.</p>

            </div>
        </>
    )
}