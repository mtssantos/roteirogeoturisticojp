import NavBar from '../../../components/Navbar';
import falha_1 from './media/falha_1.jpg';
import falha_2 from './media/falha_2.jpg';
import falha_3 from './media/falha_3.jpg';
import falha_4 from './media/falha_4.jpg';
import falha_5 from './media/falha_5.jpg';


export function FalhaSanhaua(){
    return(
        <>
        <NavBar />
        <div class="container text-1">
            <h2>Falha de Sanhauá</h2>
					<p className="text-article">O ponto de visão panorâmica localiza-se em uma pequena colina, com cerca de 15 metros de altitude, entre a cidade alta e o antigo porto do Varadouro (foto 1), sendo o único exemplar de um largo existente na cidade. Esse largo contempla uma série de imóveis tombados pelo IPHAEP: a Igreja São Frei Pedro Gonçalves, o Hotel Globo e os imóveis nº 02, 10, 16, 36, 48 e 75.</p>
					<div class="text-center">
							<figure class="figure">
									<a href={falha_1}><img src={falha_1} class="img-fluid" alt=""  /></a>
									<figurecaption class="figure-caption">Foto 1</figurecaption>
							</figure>
					</div>
				
					<p className="text-article">A Igreja de São Frei Pedro Gonçalves é uma das mais antigas da cidade, mas com poucas referências na literatura colonial, talvez por ser uma pequena capela periférica ou pela iconografia da época privilegiar a cidade alta. Um dos poucos documentos em que ela foi registrada é o mapa de Grangeiro, datada de 1692 (figura 1), assim como uma referência, no Livro do Tombo do Mosteiro de São Bento, datada de 1735 (LIVRO DO TOMBO, 1948). Sua denominação está associada ao santo protetor dos homens do mar, tendo chegado ao Brasil através dos primeiros navegantes. Em João Pessoa, o trabalho dos navegantes, somado aos comerciantes do Varadouro, foi primordial para que a Igreja fosse ‘construída’ em 1843 (foto 2a). A partir do largo, tem-se uma esplendorosa vista do Rio Sanhauá e de parte do vale do Rio Paraíba (foto 2b).</p>
					<div class="text-center">
							<figure class="figure">
									<a href={falha_2}><img src={falha_2} class="img-fluid" alt="" /></a><br />
									<figurecaption class="figure-caption">Foto 2a</figurecaption>
							</figure>		
					</div>
					<div class="text-center">
							<figure class="figure">
									<a href={falha_3}><img src={falha_3} class="img-fluid" alt="" /></a>
									<figurecaption class="figure-caption">Foto 2b</figurecaption>
							</figure>	
					</div>		
					<div class="text-center">
							<figure class="figure">
									<a href={falha_4}><img src={falha_4} class="img-fluid" alt="" /></a><br />
									<figurecaption class="figure-caption">Figura 1</figurecaption>
							</figure>
					</div>		
                    <p className="text-article">O largo está assentado diretamente sobre o calcário, que aflora logo abaixo do muro de arrimo do Hotel Globo na vertente oeste que liga ao porto, ao longo dos trilhos do trem.</p>
                    <p className="text-article">Em tempos remotos, antes da conquista e consolidação da malha urbana, provavelmente o Rio Sanhauá e seus afluentes esculpiam a encosta onde aflora o calcário. Com a urbanização e posterior desmatamento, expondo a encosta oeste dos tabuleiros, o intemperismo causou o assoreamento da área do então Porto do Capim, no Varadouro, “empurrando” o Rio Sanhauá mais para oeste.</p>
                    <p className="text-article">O aperto de mãos entre o líder indígena Piragibe e João Tavares, representando a Coroa Portuguesa, que selou o acordo de paz e propiciou, posteriormente, a fundação da cidade de Nossa Senhora das Neves, se deu às margens do Rio Sanhauá, daí sua importância não apenas ecológica- ambiental, mas histórico-cultural.</p>
                    <p className="text-article">Esse rio é relativamente linear, com direção de fluxo predominantemente SW-NW e escarpas pouco sinuosas. Segundo Araújo (2012), a configuração do terreno do centro histórico em Alto e Baixo é resultado de uma falha normal que cruza o setor ocidental dos tabuleiros litorâneos, com direção nordeste. Esse falhamento, proposto após estudos utilizando um mapa geológico elaborado a partir de imagem SRTM, testemunhos de sondagem e trabalho de campo, encaixaria os rios Marés e Sanhauá, além da porção intermediária do Rio Gramame, que pode ser visualizado no mapa geológico e representado na figura 2, o que justifica o afloramento dos calcários da <b>Formação Gramame</b> (Maastrichtianos) na vertente esses tabuleiros, ao longo desse plano de falhas (ponto A na figura 2, por exemplo). O afloramento desses calcários foi responsável pelo surgimento pontual de uma série de fontes em um determinado nível dessa vertente que serviram como fontes de abastecimento da nascente Nossa Senhora das Neves, primeiro nome dado para o município de João Pessoa, em 05/08/1585, sendo alguns considerados como Local de Interesse neste site (Fonte de Santo Antônio, Cacimba do Povo e Fonte dos Milagres). Andrades Filho (2010) estudou a sub-bacia por meio de técnicas de sensoriamento remoto e sugeriu que esta região foi afetada por falhas neotectônicas, de idade Quaternária. </p>
					<div class="text-center">
							<figure class="figure">
									<a href={falha_5}><img src={falha_5} class="img-fluid" alt="" /></a><br />
									<figurecaption class="figure-caption">Figura 2</figurecaption>
								</figure>
					</div>
                    <p className="text-article">Os excepcionais valores estético e científico, aliados ao altíssimo valor funcional justifica considerar a ‘Falha do Sanhauá’ como um representante do geopatrimônio da área. </p>
                    </div>
        </>
    )
}