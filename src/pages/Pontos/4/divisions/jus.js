import praca_6 from '../divisions/media/praca_6.jpg';
import praca_7 from '../divisions/media/praca_7.jpg';
import praca_8 from '../divisions/media/praca_8.jpg';
import praca_9 from '../divisions/media/praca_9.jpg';
import "../../1/index.css";

export function TriJUS(){
    return(
        <div className="container text-1">
                <p className="text-article">O Tribunal de Justiça, no setor sul da praça, situa-se no local onde existiu, até 1936, a Escola Normal, que havia sido construída entre 1917 e 1919 (foto 3a).</p>
				<figure className="figure">
						<a href={praca_6}><img src={praca_6} className="img-fluid" alt="" /></a><br />
					<figcaption className="figure-caption">Foto 3a</figcaption>
				</figure>
		        <p className="text-article">Desde 1965 abriga os restos mortais do ex-presidente Epitácio Pessoa, patrono do Tribunal de Justiça e de sua esposa. A cripta localiza-se no subsolo do prédio, sendo composto, no piso e na parede traseira por um mármore branco nacional, na parede lateral por um mármore laminado cinza nacional e o túmulo por um gabro ou diorito (foto 3b). Essa rocha, com granulometria fina (entre 0,2 a 1,5 mm), inequigranular, melanocrática, apresenta como mineralogia principal plagioclásio, piroxênio, anfibólio, biotita e, raramente, quartzo. Se o teor de anortita do plagioclásio for superior a 50, a rocha pode ser classNameificada como diorito, mas é necessário, para essa averiguação, a elaboração de uma lâmina delgada, o que não foi possível.</p>
				<figure className="figure">
						<a href={praca_7}><img src={praca_7} className="img-fluid" alt="" /></a><br />
							<figcaption className="figure-caption">Foto 3b</figcaption>
				</figure>
		            <p className="text-article">Foi possível, entretanto, elaborar uma lâmina delgada do mármore branco nacional. A rocha possui granulometria fina a média, inequigranular, com o tamanho dos minerais variando entre 0,5 a 2 mm. Sua mineralogia principal é calcita (90%), tremolita (5%), talco (3%) e quartzo (2%).</p>
		            <p className="text-article">A calcita ocorre como cristais equigranulares e hipidioblásticos (fotomicrografia 1a), variando de incolor a castanho claro, podendo alcançar até 2,2 mm. A tremolita apresenta-se incolor, com grande nu´mero de fraturas e alterações em sua borda. Possui forma xenoblástica (fotomicrografia 1b), com cristais de tamanho médio de 2 mm e em contato com a calcita. O talco, por sua vez, apresenta-se incolor, textura xenoblástica e tamanho médio de 0,8mm, em contato com a tremolita e com a calcita. O quartzo em pequena quantidade e na forma de grãos incolores, é distinguido pelo seu sinal ótico de caráter uniaxial positivo.</p>
				<figure className="figure">
						<a href={praca_8}><img src={praca_8} className="img-fluid" alt=""/></a><br />
							<figcaption className="figure-caption">Fotomicrografia 1a</figcaption>
				</figure>
				<figure className="figure">
						<a href={praca_9}><img src={praca_9} className="img-fluid" alt="" /></a><br />
							<figcaption className="figure-caption">Fotomicrografia 1b</figcaption>
				</figure>
        </div>
    )
}