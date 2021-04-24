import praca_1 from '../divisions/media/praca_1.jpg';
import "../../1/index.css";

export function Geral(){
    return(
        <div className="container text-1">
        <p className="text-article">Se localiza no final da Rua Duque de Caxias, com uma série de edificações de importância histórica, política e artística, em especial o Tribunal de Justiça e o Conjunto dos Jesuítas, atrai um grande fluxo de turistas (foto 1). No centro, foi erguido o Monumento a João Pessoa, formado por uma rocha granitoide que inexiste in situ na Capital. Outros tipos líticos variados e raros ornam internamente essas edificações, o que justifica a seleção dessa praça para integrar o roteiro. </p>
				<figure className="figure">
						<a href={praca_1}><img src={praca_1}  className="img-fluid" alt="" /></a>
						<figcaption className="figure-caption">Foto 1</figcaption>
				</figure>
		<p className="text-article">Na época dos jesuítas, a praça, então denominado Largo do Colégio era um grande descampado que garantia a ventilação dos prédios a oeste, além de representar o extremo sul da primitiva cidade. Logo em seguida tornou-se o primeiro Jardim Público da cidade, inaugurado em 13 de maio de 1803, no aniversário de D. João VI. Sua construção foi feita em etapas: entre 1879 - 1881, plantadas as palmeiras imperiais e os canteiros com flores, levantado um muro com cerca de 30 cm e colocado um gradil[1], com quatro portões; em 1889, construído um coreto no centro e colocado vários bancos. A partir daí, tornou-se um local de passeio e lazer para a população.</p>

		<hr />
		<span>[1] Este gradil foi transferido para o muro frontal do Cemitério Senhor da Boa Sentença (foto 8.28).</span>
        </div>

    )
}