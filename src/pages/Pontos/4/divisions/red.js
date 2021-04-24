import praca_10 from '../divisions/media/praca_10.JPG'
import praca_11 from '../divisions/media/praca_11.JPG'
import praca_12 from '../divisions/media/praca_12.jpg'
import praca_13 from '../divisions/media/praca_13.JPG'
import praca_14 from '../divisions/media/praca_14.jpg'
import "../../1/index.css";




export function PalacioRed(){
    return(
        <div className="container text-1">
        <p className="text-article">Segundo o IPHAEP, o Palácio da Redenção foi a edificação que mais teve modificação nas formas arquitetônicas originais, resultado de quatro intervenções: 1828, 1875, 1912 e 1929, sendo um belo exemplar da arquitetura eclética na capital. Foi tombado pelo IPHAEP em 1980, através do decreto nº 8638.</p>
		<p className="text-article">Seu interior apresenta elementos que interligam à geodiversidade ex situ ao Patrimônio Cultural. As escadas que levam do térreo ao primeiro andar são constituídas por mármore de Carrara (foto 4a), de grande beleza estética e raridade local. Entre os dois andares, um mesinha, do final do século XIX/início do XX, cuja tampa é formada por oficalcito (foto 4b), com matriz serpentinítica de cor verde escura e veios calcíticos (foto 4c), provavelmente proveniente da Itália, cujo nome comercial é Verde di Polcevera, dele Alpi, Varalo ou Susa, muito comum nos Apeninos ou Alpes. O oficalcito é uma rocha metamórfica de baixo grau e milonitizada, comum em zonas de subducção da crosta, proveniente de deformações tectônicas de rochas ultrabásicas, com a cimentação de suas brechas e detritos (STERN, 2006).</p>
				<figure className="figure">
						<a href={praca_10}><img src={praca_10} className="img-fluid" alt="" /></a>
						<figcaption className="figure-caption">Foto 4a</figcaption>
				</figure>
				<figure className="figure">
						<a href={praca_11}><img src={praca_11} className="img-fluid" alt="" /></a>
							<figcaption className="figure-caption">Foto 4b</figcaption>
				</figure>
				<figure className="figure">
						<a href={praca_12}><img src={praca_12} className="img-fluid" alt="" /></a>
							<figcaption className="figure-caption">Foto 4c</figcaption>
					</figure>
		        <p className="text-article"> As salas são adornadas por azulejos portugueses, destaque para o claustro, com um painel que retrata a chegada das Caravelas do Descobrimento do Brasil, denotando sua tipologia revivalista, obra da fábrica Francisca Constância, de Lisboa. Foi encomendada em 1912, construída por técnica majólica e moldura recortada com excelente qualidade. A argila ligeiramente avermelhada, denota a presença de óxido de ferro em contato com a água. A perda de aderência de parte do conjunto fez com que algumas peças se soltassem (foto 5a). Na porção inferior desse painel, junto ao piso, um banco foi adornado por azulejos da segunda metade do século XIX em padrão ferradura, de origem de desconhecida (foto 5b).</p>
					<figure className="figure">
							<a href={praca_13}><img src={praca_13} className="img-fluid" alt="" /></a>		
							<figcaption className="figure-caption">Foto 5a</figcaption>
					</figure>
					<figure className="figure">
							<a href={praca_14}><img src={praca_14} className="img-fluid" alt="" /></a>
								<figcaption className="figure-caption">Foto 5b</figcaption>
					</figure>
		<p className="text-article">Apesar de fazer parte do Patrimônio Cultural, o patrimônio azulejar possui uma relação intrínseca com o geopatrimônio, visto que sua matéria-prima, a argila, é um elemento da geodiversidade com elevado valor econômico e cultural. Desse modo, o patrimônio azulejar do Centro Histórico de João Pessoa foi mapeado, quando possível, em conjunto com outros elementos da geodiversidade.</p>
        </div>
    )
}