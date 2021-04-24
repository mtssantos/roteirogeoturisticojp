import NavBar from "../../../components/Navbar";
import santo_antonio_1 from './media/santo_antonio_1.JPG';
import santo_antonio_2 from './media/santo_antonio_2.jpg';


export function Antonio(){
    return(
        <>
            <NavBar />
            <div class="container text-1">
                <h2>Fonte de Santo Antônio</h2>
                <p>Localiza-se no terreno dos franciscanos, interior do horto anexo, na vertente noroeste dos tabuleiros. Para acessá-la, deve-se descer por um caminho relativamente íngreme por cerca de 350 metros. Desde os primórdios da conquista da capitania suas águas abasteciam a população. Na iconografia holandesa, a dimensão com que era retratada parecia ter grande porte, com um regato que fluía em direção ao Rio Sanhauá.</p>
                <p>Entretanto, apesar dessa abundância no volume de água, a população só teve acesso irrestrito a ela até 1609, quando o guardião da Igreja de São Francisco, Frei Cosmo de São Damião construiu o muro circundando a Igreja, representado na iconografia da época (PINTO, 1977). Em 1717, é edificada a fachada da fonte (PINTO, 1977), de acordo com o ano talhado em uma cornija com volutas e folhas de acanto na parte superior. O acesso será restrito à comunidade franciscana, exceto em casos de calamidades públicas, como secas ou doenças, quando seria aberta à população (RODRIGUEZ, 1962). Até hoje, seu acesso se dá apenas com autorização dos frades.</p>
                <p>O registro elaborado pelo frei Antonio Jaboatam mostra, entre outros, os aspectos naturais do sítio onde se assentou a Igreja de São Francisco, incluindo sua fonte e sua abundante pedra calcária, região de onde saiu a matéria-prima para as edificações nas primeiras décadas de evolução urbana. </p>
                <p>A fachada, simétrica e trabalhada em calcário, mantém as características originais em barroco (foto 1) e apresenta várias pequenas cartelas com sentenças em latim, entre elas ‘S. Antoni Ora Pro Nobis’ (“Santo Antônio orai por nós”). A base é composta por um tanque, com 1,8 m de comprimento por 40 cm de altura, paralelo ao muro de arrimo que se prolonga para as laterais do conjunto que forma o frontispício. Esse é formado por blocos de calcário com 50 cm de comprimento por 30 cm de altura. Segundo fotos antigas, a água jorrava do frontão para o tanque através de um golfinho esculpido em calcário. Entretanto, essa peça se perdeu, restando apenas a parte mais próxima da parede.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={santo_antonio_1}><img src={santo_antonio_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 1</figcaption>
                        </figure>
                </div>
                <p>O que resta da escultura de golfinho é circundado por quatro colunas estreitas, com cerca de 10 cm de largura, formando um andar inferior, com dois mordilhões, com cerca de meio metro de altura, nas extremidades. O andar superior, mais estreito, é mais adornado, reduzindo-se a dimensão dos mordilhões nas extremidades e adicionando pequenas carrancas e folhas de acanto que compõem duas colunas estreitas. No centro, o nicho onde estava localizado a imagem de Santo António que se perdeu com o tempo.</p>
                <p>Foi tombada, juntamente com todo o Complexo do São Francisco, pelo IPHAN, em 16 de outubro de 1952.</p>
                <p>Do ponto de vista geomorfológico, assim como a Cacimba do Povo, está localizada nas vertentes voltadas para oeste, a uma altitude de cerca de 22 metros, em uma grande depressão, assentada diretamente sobre o calcário (figura 1), que aflorava abundantemente no terreno dos franciscanos. Assim, pode ser classificada como uma ‘fonte de contato geológico’. Segundo Araújo (2012), essas vertentes são complexas, com perfis de segmentos diferenciados. Nas porções superior e inferior o perfil, do tipo reto, apresenta alta declividade que diminui na porção intermediária, onde está localizada a fonte, no contato do arenito Barreiras (topo) com o calcário Gramame (base). Essa zona é constituída pelo anfiteatro de cabeceira de drenagem, que tende a reduzir a velocidade do fluxo das águas e até mesmo retê-las, formando pequenos regatos e lagoas.</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={santo_antonio_2}><img src={santo_antonio_2} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Figura 1</figcaption>
                        </figure>
                </div>
            </div>
        </>
    )
}