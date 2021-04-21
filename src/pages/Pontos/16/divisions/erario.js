import riobranco_2 from "../media/riobranco_2.jpg";
import riobranco_3 from "../media/riobranco_3.jpg";


export function Erario(){
    return(
        <>
        <div class="container text-1">
        <p>Entre várias funções, serviu como Provedoria da Fazenda Provincial, Assembleia Provincial e Delegacia Fiscal e era reconhecida como uma das mais autênticas representações do barroco. Uma exuberante escada ornamentada na parte frontal conduzia para as entradas do primeiro e segundo andares (figura 1a). Suas linhas arquitetônicas originais foram modificadas, em virtude da reconstrução, consequência de um incêndio em dezembro de 1916 (figura 1b). </p>
		<div class="text-center">
				<figure class="figure">
						<a href={riobranco_2}><img src={riobranco_2} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Figura 1a</figcaption>
				</figure>
		</div>
		<div class="text-center">
				<figure class="figure">
						<a href={riobranco_3}><img src={riobranco_3} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Figura 1b</figcaption>
				</figure>
		</div>
		<p>Entre 2015 e 2017, foi reformada pelo IPHAN e tornou-se sua sede. Assim, durante o campo, foi possível uma visita ao interior, onde se conheceu a estrutura física do prédio, então sem o forro e com boa parte das paredes demolida. O primeiro andar mostra as paredes em alvenaria, com mistura de blocos maciços de calcário, arenito ferruginoso (algo extremamente raro nas edificações do Centro Histórico) e tijolo prensado, típico do século XIX, cimentados com argamassa de barro, areia e cal. No segundo andar as paredes são formadas basicamente de tijolos cimentados por argamassa. Isso se deve ao fato de o calcário ser resistente à compressão nos andares inferiores, diminuindo a espessura das alvenarias nos superiores, agora com novos materiais. </p>
		<p>O arenito ferruginoso, aflorante nas praias urbanas de João Pessoa, provavelmente tenha sido extraído das redondezas do Cabo Branco. São compostos por sedimentos arenosos mal consolidados, com coloração avermelhada, estratificação plano-paralela e grãos maiores milimétricos de quartzo e K-feldspato, subangulosos a subarredondados, com baixa esfericidade, com o K-feldspato alterado para uma argila acinzentada. Não foi encontrada documentação sobre o transporte desse arenito da praia para a cidade, seja por meio da mata ou por transporte aquático, via Rio Paraíba, que seria um trajeto bem mais longo. </p>
		<p>O calcário pertencente à Formação Gramame (Maastrichtiano) é da cor creme, maciço, com nódulos de calcita e, a olho nu, afossilífero, com as características texturais da fácies descrita no i) do Afloramento da Formação Gramame.  Considerando-se a época da edificação, segunda metade do século XVIII, provavelmente a proveniência desse calcário tenha sido as pedreiras expostas nas vertentes dos tabuleiros voltados para oeste, nas proximidades do Conjunto Franciscano.</p>

        </div>
        </>
    )
}