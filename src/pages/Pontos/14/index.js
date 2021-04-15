import NavBar from "../../../components/Navbar";
import dolina_1 from "./media/dolina_1.png";
import dolina_2 from "./media/dolina_2.png";
import "../1/index.css";

export function Dolina(){
    return(
        <>
            <NavBar />
            <div class="container">
            <h2>Dolina dos Irerês</h2>
		<p>A Dolina dos Irerês é um dos principais cartões postais da cidade. Localiza-se no coração do Centro Histórico, sendo ponto de convergência de ruas e avenidas que se irradiam para todas as regiões da cidade. Desde o século XVII aparece em praticamente toda a iconografia da capital, especialmente a de origem holandesa. Ali se instalou o chamado Sítio da Lagoa, de propriedade dos jesuítas, posteriormente denominado Lagoa dos Irerês, em virtude de um marreco muito comum que nadava em suas águas. Apenas no início dos anos 1920 a área passou para as mãos do Estado.</p>
		<p>Assim, no início do século XX, sua paisagem permanecia praticamente intacta: uma grande lagoa, cercada de frondosas árvores do bioma da Mata Atlântica que colaboravam para manter sua perenidade, formando um cenário pantanoso e alguns sítios que denotavam a presença humana na área. Durante muito tempo foi um obstáculo para o avanço da urbanização, especialmente em direção à praia. </p>
		<p>A instalação de um parque nos arredores da lagoa data do governo do prefeito Guedes Pereira (1921-1924), com a plantação de palmeiras imperiais em todo o entorno, além de trabalhos de drenagem e saneamento. Pela lei nº 110 de 27 de setembro de 1924, o parque é nomeado Solon de Lucena, em homenagem ao governador da Paraíba. No governo de Argemiro de Figueiredo (1935-1940), o Parque Solon de Lucena adentra no plano sanitarista de Saturnino de Brito, que visava ampliar a rede de abastecimento de água, saneamento básico e abertura e alargamento de novas ruas, além da sua urbanização, por meio de desapropriações, terraplanagem, calçamento, instalação de uma fonte luminosa no centro da lagoa, manuseada a partir do Cassino, inaugurado nesse período, entre outras obras (foto 1a). Esse projeto possibilitou a expansão da cidade para o leste, com a abertura da Avenida Epitácio Pessoa, ainda nos anos 1930. Desse modo, a partir da ocupação dos tabuleiros litorâneos, a urbanização avançaria para a planície costeira, última unidade geomorfológica ocupada pela população. Atualmente, sua paisagem foi intensamente transformada (foto 1b).</p>
		<div class="text-center">
				<figure class="figure">
						<a href={dolina_1}><img src={dolina_1} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Foto 1a e Foto 1b</figcaption>
				</figure>
		</div>
		<p>Do ponto de vista geomorfológico, a lagoa corresponde a uma dolina, forma muito comum em toda a área do projeto, mas na maioria da vezes sem a presença de um corpo d’água. Assim, a perenidade desse espelho a torna muito especial, representativo de uma zona de recarga natural do aquífero, nesse caso suspenso, estando a uma cota de cerca de 35 metros. Seu corpo d’água mede 750 metros de perímetro, com cerca de 4,5 ha de área, pertencendo a uma bacia centrípeta com dimensões que chegam a 1,0 Km2 de área total (BARBOSA, 2015). É relativamente simétrica, estando alojada nos arenitos porosos, de idade Plio-pleistocênica, da <b>Formação Barreiras</b>. Pode ser classificada como uma dolina em concha, gerada pela subsidência lenta do sotopostos calcários da <b>Formação Gramame</b> ((Maastrichtianos), localizados a cerca de 3 a 4 metros abaixo da lâmina d’água (ARAÚJO, 2012) que não aflora nessa altitude por estar recoberta pelos sedimentos Plio-pleistocênicos da <b>Formação Barreiras</b>. Vital (2015) correlacionou essa dolina e outras na região a uma série de descontinuidades presentes no calcário Gramame. O espelho d’água evidencia a sua ligação ao lençol freático suspenso (figura 1), que é limitado na base por uma camada impermeável de fragipan, semelhante a ‘Gruta das Marés’ e ‘Arenização do Barreiras’. </p>
		<div class="text-center">
				<figure class="figure">
						<a href={dolina_2}><img src={dolina_2} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Figura 1</figcaption>
				</figure>
		</div>
		<p>Durante a época das chuvas, suas águas convergem para a lagoa, causando inundações. Em uma reforma executada pela gestão do prefeito Luciano Cartaxo (2012-2016), foi construído um novo túnel para escoar suas águas para o Rio Sanhauá, de modo a evitar tais intempéries, uma vez que inexiste calha natural que drene essas águas para jusante.</p>
		<p>Pelo seu excepcional valor estético, aliados aos altíssimos valores científico, cultural e econômico, a Dolina dos Irerês é um dos representantes do geopatrimônio da área. </p>

            </div>
        </>
    )
}