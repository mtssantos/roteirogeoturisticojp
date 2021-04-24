import NavBar from '../../../components/Navbar';
import mosteiro from './media/mosteiro.JPG';

export function Mosteiro(){
    return(
        <>
        <NavBar />
        <div class="container text-1">
            <h2>Mosteiro de São Bento</h2>
            <p>Localiza-se no início da Rua Nova (atual Rua General Osório), nas proximidades da Praça D. Ulrico.</p>
            <p>Durante a invasão holandesa, segundo relatos de Herc kmans, apenas as paredes haviam sido erguidas, tendo os holandeses a utilizado como baluartes devido à excelente posição estratégica, após a construção de uma trincheira em torno do mosteiro. Entretanto, foi apenas no século XVIII que a edificação se aproximou das características atuais, com a inserção dos ornamentos da nave e capela-mor, inclusive o frontispício, com data de finalização de 1761, tendo o calcário como matéria prima predominante na estrutura. Em 1743, estava concluído o púlpito e a escada em espiral que dava acesso ao salão nobre do convento.</p>
            <p>Corresponde a uma das mais belas representações da arquitetura barroca brasileira, com o brasão da Ordem Beneditina no frontão, suas três portas em arco pleno, margeadas por óculos e primorosos trabalhos de cantaria tanto no exterior quanto no interior (foto 1). No topo, o cata-vento de cobre em forma de leão caracteriza a ordem beneditina. A Igreja foi tombada pelo IPHAN em 1957, por meio do decreto nº 63.</p>
            <div class="text-center">
                    <figure class="figure">
                            <a href={mosteiro}><img src={mosteiro} class="img-fluid" alt="" /></a>
                            <figcaption class="figure-caption">Foto 1</figcaption>
                    </figure>
            </div>
            <p>Como em todas as edificações do período colonial, sejam públicas, religiosas ou residenciais, o calcário da Formação Gramame foi o georecurso utilizado na construção do Mosteiro de São Bento. Esse calcário provavelmente foi extraído de pedreiras localizadas nas proximidades do mosteiro, especificamente na vertente oeste por detrás do Conjunto Franciscano. O calcário, maciço e pobre em material siliciclástico, de coloração creme acinzentado, possui características texturais e mineralógicas semelhantes à facies i) do 'Afloramento da Formação Gramame'.</p>
        </div>
        </>
    )
}