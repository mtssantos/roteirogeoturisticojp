import NavBar from '../../../components/Navbar'
import pedra_1 from './media/pedra_1.JPG'
import pedra_2 from './media/pedra_2.JPG'
import pedra_3 from './media/pedra_3.jpg';
import "../1/index.css";


export function PracaPedra(){
    return(
		<>
		<NavBar />
        <div class="container text-1">

            <h2>Praça da Pedra</h2>
			
			<p>Diz respeito a uma praça, localizada na porção extremo-meridional do Centro Histórico, no encontro das Ruas da República e Rua São Miguel, com a presença de um monólito em seu interior (foto 1). Apesar da xerossere[1], a rocha pode ser identificada como um granodiorito porfirítico, com fenocristais centimétricos de K-feldspato e presença abundante de biotita. Na verdade, esse monólito, segundo o Jornal A União (10.07.1931), foi trazido para o local em 12 de julho de 1931, proveniente da Região da Borborema. Em conversas informais com os moradores, chegou-se a duas versões do local de proveniência. Na primeira, a rocha teria sido trazida do município de Cruz do Espírito Santo (distante 25 Km da capital) até o Rio Sanhauá, de trem, e através de charretes, até à praça. O problema dessa versão é que esse tipo de granitoide não aflora no referido município, assentado sobre uma bacia sedimentar.</p>
					<figure class="figure">
							<a href={pedra_1}><img src={pedra_1} class="img-fluid" alt="" /></a>
							<figcaption class="figure-caption">Foto 1</figcaption>
					</figure>
			<p>A segunda versão é de que o monólito, localizado no município de Bananeiras, distante 130 Km da capital, tenha sido trazido como homenagem ao aniversário de falecimento do presidente João Pessoa, que num dado momento, em suas andanças para o interior, teria descansado à sua sombra. O município de Bananeiras registra a presença de rochas granodioríticas semelhantes àquela da Praça da Pedra, em afloramentos ao longo da rodovia PB-105, o que corroboraria essa versão (PEREIRA et al., 2013a). O mapeamento geológico na escala 1:500.000 (BRASIL, 2002), posiciona as rochas da região na Suíte Granítica Calcialcalina de médio a alto Potássio Itaporanga, representada por granitos e granodioritos grossos a porfiríticos associados a dioritos, datado de 584 Ma pelo método U-PB em zircões por Brito Neves et.al. (2003). A foto 2 mostra o Granodiorito Itaporanga (esquerda, na mão) e o granodiorito da Praça da Pedra (à direita).</p>
					<figure class="figure">
							<a href={pedra_2}><img src={pedra_2} class="img-fluid" alt="" /></a>
							<figcaption class="figure-caption">Foto 2</figcaption>
					</figure>
			<p> Uma lâmina delgada do monólito mostra granulometria média, inequigranular, hipidiomórfica, com o tamanho dos minerais variando de 0,1 a 4 mm. Corresponde a um biotita granodiorito contendo quartzo (35%), andesina (35%) e microclínio (23%), além de biotita (3%), apatita, esfeno (2%) e minerais secundários (sericita, epidoto, carbonato e clorita, que somados não chegam a 2%).</p>
			<p>O quartzo (1-3 mm) ocorre como cristais anédricos, com formato amebóide a alongado, intensamente subdividido, com contatos lobados a retos e localmente com arranjos poligonais. Em algumas zonas a deformação é um pouco mais intensa pois vemos quartzo recristalizado (poligonal). A andesina (0,4 a 1,6 mm), intensamente zonada, apresnta-se prismática, subédrica, alongada e quadrática, com núcleos sericitizados e macla da albita. Incluso na biotita e apatita, localizadamente, apresenta recristalização metamórfica marcada pela formação de agregados  granoblásticos finos (cerca de 0,1 mm), com contatos retos a lobados e intensa formação de mirmequitas e, localmente, textura lepidoblástica (fotomicrografia 1). Na deformação, a biotita está preservada ocorrendo formação local de clorita e/ou moscovita fina+clorita+ epidoto. O microclínio é euédrico a subédrico (0,4-4 mm), rico em inclusões de biotita, quartzo e plagioclásio e com textura mirmequítica. Os cristais menores apresentam recristalização e formato poligonal, como um arranjo granoblástico. A biotita (0,2-0,4 mm) é castanha, prismática, subédrica, podendo ser intersticial ou estar inclusa no microcínio, podendo ocorrer como agregados de 3 a 4 grãos e aparecer titanita associada. Tende a estar alinhada, marcando uma foliação incipiente, geralmente associada ao quartzo e a andesina, podendo também estar inclusa nessa última.</p>
					<figure class="figure">
							<a href={pedra_3}><img src={pedra_3} class="img-fluid" alt="" /></a>
							<figcaption class="figure-caption">Fotomicrografia 1</figcaption>
					</figure>
		<hr />
		<span>[1] Fixação de pequenos corpos vegetais que evoluíram em ambiente seco, no caso sobre a rocha.</span>

        </div>
		</>
    )
}