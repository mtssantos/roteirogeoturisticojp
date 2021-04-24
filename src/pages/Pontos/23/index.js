import NavBar from "../../../components/Navbar";
import milagres from './media/milagres.JPG';

export function Milagres(){
    return(
        <>
        <NavBar />
        <div class="container text-1">
        <h2>Fonte dos Milagres</h2>
            <p className="text-article">No lado sul de quem desce a Ladeira de São Francisco, na Rua Augusto Simões, 59, antigo Beco dos Milagres, presume-se que teve grande importância no período inicial de formação da cidade, por se localizar próxima das primeiras ruas da cidade alta, onde boa parte da população residia, na Ladeira do São Francisco, que ligava a cidade alta à cidade baixa, no terreno do primeiro vigário da Igreja Matriz. </p>
            <p className="text-article">Schmalz (1966) apresenta a figura desse vigário, de nome João Vaz Salem dos Santos, chegado à cidade um ano depois da fundação. Curiosamente, o terreno onde está assentado o Convento Beneditino e parte dos seus bens pertencia ao citado padre, que sofreu confisco da Coroa (Pinto, 1977). Não pode ser confundida com a Cacimba da Jaqueira, situada no mesmo terreno e considerada a mais antiga da cidade. </p>
            <p className="text-article">Segundo Pinto (1977), o  [...] dito sitio do Padre João Vaz até o canto da rua que vae para a fonte e Varadouro, correndo pela dita rua abaixo até entestar com fonte de que ora se serve esta Cidade, da qual fonte lhe dão 3a parte da agoa do posso que está feito com condições que em tempo algum não façam outro posso mais fundo nem outro bemfeitoria que faça prejuízo a dita Agua, nem tapem nem tolham ao povo, salvo a dita terça parte que lhe couber servindo-se do dito posso somente com Caldeirão. A Cerca do Mosteiro irá donde a dita Agua corre directa aos Mangues e dos ditos mangues irá correndo até emtestar com o chão e terras que foi dadas aos Padres Capuchos com declaração que a pedreira da Cantaria que o dita Padre João Vaz descobriu ficará liberta para o povo com caminho para serventia della fora da Cerca, a qual tempo algum tolharão, por que lha não dão nem darão por dada por assim o aver por Serviço de Sua Majestade [...] (PINTO,1977, p. 31, grifo nosso). </p>
            <p className="text-article">O nome ‘dos Milagres’ está relacionado a uma lenda local, de onde descende o nome do Beco. Segundo Aguiar (1992), foi nessa fonte que, em 1801, o frei franciscano José de Jesus Maria Lopes teria assassinado barbaramente, por empalamento, sua amante mestiça Tereza, após atraí-la para um banho à luz do luar. Considerando não haver nenhum ‘milagre’ nesse fato, Araújo (2012) propõe outra origem para o nome: das propriedades medicinais miraculosas de suas águas, relatada no “Livro que dá razão do Estado do Brasil”.</p>
            <p className="text-article">Em 1849 teria ocorrido a edificação da fachada da fonte, no caso um chafariz, conforme documentos históricos citados por Araújo (2012), para melhorar a distribuição de água para a população, sem precisar recorrer à Fonte de Tambiá, mas que não teve muito sucesso pela pequena dimensão do seu tanque de acumulação e pouca vazão d’água. Segundo Rodriguez (1962), ela possuía duas torneiras de bronze e pilastras de calcário com capitéis rematados por uma cornija em semicírculo, com um símbolo das armas imperiais no topo, que foi retirada após a Proclamação da República.</p>
            <p className="text-article">O que resta dessa fonte, incorporada a um muro (foto 1), sem verter mais água alguma, são as pilastras de calcário, os orifícios onde estavam as duas torneiras e, em alto-relevo, a indicação do ano da construção, todos rebocados com cal e tinta branca, o que demonstra o pouco caso que se faz do patrimônio natural e cultural da cidade.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={milagres}><img src={milagres} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 1</figcaption>
                        </figure>
                </div>
            <p className="text-article">Apresenta as mesmas características da Fonte de Santo Antônio. Com altidude em torno de 17 metros, localizada no contato do arenito Barreiras e do calcário Gramame, é uma ‘fonte de contato geológico’, assim como uma ‘fonte de falha’, por se localizar na vertente que representa um plano de falha.</p>
            <p className="text-article">Foi selecionado como um importante elemento da geodiversidade local pelo seu alto valor científico como representante do afloramento do Aquífero Barreiras e por fazer parte da história do abastecimento da cidade. Sua denominação é um clássico exemplo do valor cultural da geodiversidade em seu viés mitológico.</p>
        </div>
        </>
    )
}