import NavBar from '../../../components/Navbar';
import fonte_1 from './fonte_1.png';
import fonte_2 from './fonte_2.JPG';
import "./index.css"

export function FonteTambia(){
    return(
		<>
		<NavBar />
        <div className="container">
			<h2>Fonte Tambiá</h2>
			<p className="text-article">Foi amplamente iconografada desde o século XVIII quando documentos e imagens dão conta de sua existência, e da sua importância para a população, especialmente a de alta renda, uma vez que se localizava na cidade alta.</p>
			<p className="text-article">Localiza-se no atual Parque Arruda Câmara, popularmente conhecido como ‘Bica’, com 26,4ha, administrado pela Prefeitura Municipal e que pode facilmente ser acessado por várias linhas de ônibus. É um ponto de descanso e lazer dos moradores e de visitação turística, possuindo um jardim zoológico, um lago com pedalinhos, frondosas árvores e uma história centenária. Esse parque se localiza no Bairro do Alto Roger e seu acesso se dá tanto pela Av. Gouveia da Nóbrega quanto pela Av. Bandeirantes.</p>
			<p className="text-article">A área de entorno da fonte foi transformada em parque, em homenagem ao botânico paraibano, pelo prefeito Guedes Pereira, em 1922. A reserva florestal tem papel fundamental na proteção do manancial e encontra-se fora do perímetro do Centro Histórico, mas nas proximidades de seu limite norte.</p>
			<p className="text-article">Enquanto a água encanada não chegou à cidade, o papel dessa fonte foi crucial, especialmente no século XIX, em virtude de sua boa vazão e qualidade. A data de aprovação para a edificação da Fonte de Tambiá é de março de 1782 (PINTO, 1977), na gestão do governador Jeronymo de Castro e Melo. Entretanto, desde a década de 1730 existem documentos trocados entre o provedor da Fazenda Real e o rei D. João V acerca da necessidade de reconstrução da fonte em Tambiá, o que permite inferir que algum tipo de edificação havia antes no local[1].</p>
			<p className="text-article">O nome dessa fonte está associado a uma lenda local, denotando o aspecto folclórico de seu valor cultural. Segundo Rodriguez (1962), uma jovem virgem indígena de nome Aipré, da tribo Potiguara, teria se apaixonado por um guerreiro Cariri, inimigo de sua tribo, chamado Tambiá. Após a morte desse pelos seus parentes, a jovem chorou durante 50 luas sobre o túmulo, e seu pranto deu origem às águas da fonte. Essa é a lenda mais conhecida e divulgada pelos tempos. Entretanto, existe outra em que uma índia tabajara suplica à mãe água para que seu amor, o índio Tambiá, não vá embora. No dia de sua ida, o índio é picado por uma centopeia e a esmaga. A Mãe Terra, assim, é rasgada, e de suas fendas brotam as águas que deu origem à fonte (MEDEIROS, 1994).</p>
			<p className="text-article">No século XIX, com o aumento da demanda por suas águas, intensificou-se a preocupação com a preservação de seu entorno, em especial suas matas, e várias foram as obras de conserto de sua edificação, conforme documentos históricos. No início do século XX, com o encanamento da água para o público, a fonte foi perdendo espaço, mas diferentemente de outras, conseguiu preservar-se como um registro do abastecimento de água da cidade, tendo sido tombada pelo IPHAN em 26 de setembro de 1941 e pelo IPHAEP, em 1980, esse último abrangendo todo o conjunto do Parque.</p>
			<p className="text-article">Suas péssimas condições atuais, como rachaduras e inclinação, obrigaram a Prefeitura a colocar um anteparo de madeira (foto 1).</p>
			<div className="text-center">
					<figure className="figure">
							<a href={fonte_2}><img src={fonte_2} alt="" className="img-fluid" /></a>
						<figcaption className="figure-caption">Foto 1</figcaption>
					</figure>
			</div>
			<p className="text-article">Segundo Araújo (2012), ela verte da Formação Barreiras, a cerca de 7 metros acima do calcário Gramame (figura 1), com altitude aproximada de 19 metros. O autor propõe que o setor nordeste, onde essa fonte e a de Maria Feia brotam, possui uma profundidade do calcário maior que a vertente oeste e que são fontes oriundas da porção médio-superior do Aquífero Barreiras. Pode ser considerado um exemplo de bem geopatrimonial pelo seu excepcional valor cultural, associado aos altíssimos valores científico e econômico.</p>
			<div className="text-center">
					<figure className="figure">
							<a href={fonte_1}><img src={fonte_1} alt=""  className="img-fluid" /></a>
						<figcaption className="figure-caption">Figura 1</figcaption>
					</figure>
			</div>

	<hr />
	<span>[1] A.H.U.-ACL_CU_014, Cx 10, doc. 791, fl 3 e A.H.U.-ACL_CU_014, Cx 13, doc. 1085, fl 2.</span>
	
	</div>
	</>
    )
}