import busto_1 from './media/busto_1.jpg'
import busto_2 from './media/busto_2.jpg'

export function Busto(){
    return(
        <div className="container text-1">
<p>Para a confluência das Avenidas Epitácio Pessoa e Maximiano Figueiredo, no setor leste da praça, foi transferido, nos anos 1960, um busto em homenagem ao presidente Epitácio Pessoa, que até então estava na Praça João Pessoa (foto 3).</p>
	<div className="text-center">
			<figure className="figure">
					<a href={busto_1}><img src={busto_1} className="img-fluid" alt="" /></a>
					<figcaption className="figure-caption">Foto 3</figcaption>
			</figure>
	</div>
  <p>Trata-se de uma escultura em bronze representando figura humana composta por tórax, membros superiores e cabeça de um homem que aponta para diante com o dedo indicador da mão direita erguida. A mão esquerda repousa na borda da tribuna em calcário branco com formato quadrado e quinas recortadas, que encima o pedestal.</p>
  <p>Esse, com formato cúbico, é composto por uma rocha ornamental félsica com coloração verde escura, cuja lâmina delgada foi confeccionada, proveniente de Ubatuba (SP). Apresenta textura holocristalina e porfirítica, granulometria média (0,5-5 mm), hipidiomórfica e inequigranular. Corresponde a um granodiorito formado por plagioclásio (45%), quartzo (25%) e microclina (6%). Tem ainda biotita (7%), anfibólio (7%), piroxênio (5%) como principais máficos. Os minerais acessórios são minerais opacos (2%), apatita (1%), zircão (1%), além de clorita (1%), esse último como de alteração.</p>
	<p>O plagioclásio ocorre como cristais grandes (entre 2,75 e 5 mm), por vezes com geminação polissintética associada a Carlsbad. É comum ocorrência de mirmequita no contato entre plagioclásio e microclina. O quartzo ocorre como cristais anédricos com cerca de 1 mm, bem distribuídos na lâmina, porém em quantidade moderada. A microclina ocorre como cristais anédricos com algumas faces subédricas e geminação Carlsbad. A biotita ocorre com tamanho variável (de 2,8 mm a 0,05 mm) e hábito tabular. Há alteração para clorita nos cristais de maior tamanho e também pequenos cristais inclusos em plagioclásio. O anfibólio aparece com clivagem boa, visível em apenas uma direção. É aparentemente posterior à biotita, pois, em alguns locais, está a ela sobreposto. Os piroxênios ocorrem como cristais anédricos, com poucas faces subédricas e fraturados. A extinção reta caracteriza-os como ortopiroxênio. Os minerais opacos, com cristais de aproximadamente 0,8 mm, ocorrem principalmente próximo ao anfibólio. O zircão e apatita são euédricos inclusos em biotita (fotomicrografia 1) e plagioclásio. A clorita é produto de alteração da biotita.</p>
	<div className="text-center">
			<figure className="figure">
					<a href={busto_2}><img src={busto_2} className="img-fluid" alt="" /></a>
					<figcaption className="figure-caption">Fotomicrografia 1</figcaption>
			</figure>
	</div>
  <p>Apresenta um bom estado de conservação, apesar do acúmulo de poeira e impregnações de resíduos sólidos (excrementos de aves e de insetos), pichações e colagem de propaganda.</p>


        </div>
    )
}