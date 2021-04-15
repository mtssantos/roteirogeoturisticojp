import NavBar from "../../../components/Navbar";
import misericordia_1 from "./media/misericordia_1.jpg"
import misericordia_2 from "./media/misericordia_2.JPG"
import misericordia_3 from "./media/misericordia_3.JPG"


export function Misericordia(){
    return(
        <>
        <NavBar />
        <div class="container">
        <h2>Santa Casa da Misericórdia</h2>
		<p>Localizada numa das ruas mais antigas de João Pessoa, a Rua Direita, atual Rua Duque de Caxias, na porção central da cidade alta, com a fachada principal voltada para a Rua Peregrino de Carvalho, antigo Beco da Misericórdia, representa o local de residência da aristocracia rural e sede do poder religioso, uma vez que seu papel central na administração era enfatizado por sua localização.</p>
		<p>Num primeiro momento, a arquitetura da Santa Casa da Misericórdia era simples e rústica, possuindo uma capela-mor e nave (foto 1). Em 1609, o prédio já era citado nos relatos de Diogo de Campos Moreno como uma obra “mui bem lavrada[1]”. Em 1618, segundo o relato do autor do “Diálogo das Grandezas do Brasil”, “e tratou mais [...] de fazer a casa de Santa Misericórdia da própria cidade, cousa de grandíssimo custo pela grandeza e nobreza do edifício do templo, que tem já quase acabado” (BRANDÃO, 1977, p. 137).</p>
		<div class="text-center">
				<figure class="figure">
						<a href={misericordia_1}><img src={misericordia_1} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Foto 1</figcaption>
				</figure>
		</div>
		<p>Entretanto, Herckmans (1982) escreveu que</p>
		<cite class="container"> [...] Segue-se a Misericórdia. Está quase acabada; os portugueses servem-se dela em lugar da matriz. O seu fundador foi Duarte Gomes da Silveira, Senhor de Engenho, que à construiu às suas custas, assim como tem promovido a edificação desta cidade, auxiliando com dinheiro a muitos moradores que desejavam construir casas. Ele próprio levantou um magnífico prédio do lado ocidental de São Bento para lhe servir de casa (HERCKMANS, 1982, p. 14).</cite>
		<p>No interior, a nave única, ampla, sem pinturas ou azulejos, está separada da Capela-mor por um Arco-Cruzeiro sobre colunas exibindo um delicado trabalho de cantaria com motivos florais na base e, no alto, um brasão português (foto 2a). A capela lateral, à esquerda, denominada Salvador do Mundo, com seu arco e o brasão da família Duarte da Silveira; nas parede, sustentadas por grossos blocos de calcário, tribunas-colaterais, onde a do lado direito foi executado em pedra de cantaria (foto 2b) e coro alto posterior é sustentado por duas pilastras de calcário, em estilo toscano. </p>
		<div class="text-center">
				<figure class="figure">
						<a href={misericordia_2}><img src={misericordia_2} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Foto 2a</figcaption>
					</figure>
		</div>
		<div class="text-center">
				<figure class="figure">
						<a href={misericordia_3}><img src={misericordia_3} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Foto 2b</figcaption>
					</figure>
		</div>
		<p>Construída em calcário em blocos paralelepipédicos com cerca de 40cm de comprimento por 25cm de espessura, em algumas paredes assentados sem utilização de argamassa.</p>
		<p>Esse calcário pertence à Formação Gramame, do Grupo Paraíba, com fácies visível a olho nu, semelhante à fácies i) aflorante na pedreira da Intercement. As características mineralógicas em lâmina delgada podem ser vistas na descrição do citado Local de Interesse. Na época da construção, era extraído de pedreiras localizadas no pátio do Conjunto Franciscano e na vertente dos tabuleiros voltada para o Rio Sanhauá.</p>
		<p>Atualmente, as linhas austeras, as cicatrizes do calcário expostas nas paredes de alvenaria, as extremidades das entradas dos ambientes com sua cantaria e as reformas que obliteraram os traços, rebocados com argamassa expressam a mistura de sentimentos que se tem ao adentrar em uma das igrejas mais antigas da Capital. </p>
		<p>Essa edificação foi tombada pelo IPHAN, em 25 de abril de 1938, inscrita no nº 103 do Livro de Tombo das Belas Artes.</p>
		<hr />
		<span>[1] Ministério do Reino, Colecção de plantas, mapas e outros documentos iconográficos, doc. 68, Torre do Tombo (referência PT/TT/MR/1/68).</span>

        </div>
        </>
    )
}