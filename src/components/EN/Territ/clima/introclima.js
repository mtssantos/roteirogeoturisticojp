import grafico from '../media/gráfico.png';


export function ENIntroclima(){
    return(
        <>
        <p class="paragraphy">Segundo a Organização Meteorológica Mundial (OMM), o clima consiste na sucessão do tempo atmosférico, com um determinado conjunto de variações, durante um longo período, que os climatologistas consideram entre 35 a 40 anos, em um domínio espacial localizado (CONTI, 1993). O clima de um determinado local possui uma série de elementos, que fazem parte do tempo meteorológico, e que acabam por apresentar características que são influenciadas por uma série de fatores, como a posição geográfica do local, a altitude, as correntes marítimas, a presença, ou não, de vegetação, o grau de urbanização, a distância do litoral, a dinâmica das massas de ar e o relevo (AYOADE, 2002). Estes fatores influenciam na temperatura, na umidade, nas precipitações e na direção dos ventos, entre outras, sendo estas as variáveis que serão caracterizadas neste capítulo.</p>
        <p class="paragraphy">No Estado da Paraíba, estão localizadas seis Estações Meteorológicas de Observação (EMO-Areia, Campina Grande, João Pessoa, Monteiro, Patos e Sousa)<sup>1</sup> , sendo que a de João Pessoa é a única inserida na área do trabalho, estando as mais próximas a mais de 100 Km de distância, o que, pela distância, impossibilita a utilização de seus dados. Assim, a caracterização das variáveis climáticas será elaborada a partir de dados estatísticos fornecidos por esta estação, a partir da coleta de dados entre 1977 e 2014, período superior aos 30 anos sugeridos pela OMM como o necessário para coleta de dados contínuos, de maneira a fornecer uma Normal Climatológica. Cabe ressaltar que alguns dados permaneceram lacunares, como o ano de 1980, que não foi contabilizado.</p>
        <p class="paragraphy">A <b>Estação Meteorológica de João Pessoa</b> possui como coordenadas geográficas 34º52’ long. Oeste e 07º06’ lat. Sul e uma altitude de 7,4 m. Pelo fato de a área de estudo apresentar um relevo plano a ligeiramente ondulado, ou seja, de manter uma homogeneidade espacial, as informações contidas nessa fonte serão suficientes para o entendimento da dinâmica climática da área como um todo.</p>
        <p class="paragraphy">Após o tratamento dos dados fornecidos pela EMO para o período 1977-2014, montou-se um climograma para a cidade de João Pessoa, que pode ser visualizado no gráfico 1.</p>
        <div class="text-center">
            <figure class="figure">
                <figurecaption class="figure-caption">Gráfico 1 - Climograma de João Pessoa.</figurecaption><br /><br />
                <a href={grafico}><img src={grafico} alt="" class="img-fluid" /></a><br /><br />
                <figurecaption class="figure-caption">Fonte: o autor.</figurecaption>
            </figure>
        </div>
        <p class="paragraphy">Segundo a classificação de Strahler (1982), a área de estudo está incluído no clima tropical ‘litorâneo úmido exposto às massas tropicais marítimas’, ou seja, possui uma sazonalidade marcada por duas estações bem distintas; verões quentes e secos (média térmica de 28ºC) e invernos suaves e chuvosos (temperatura média de 25ºC), com pluviosidade anual em torno de 1800 mm e umidade relativa do ar média de 80%, conforme já referido.</p>
        <p class="paragraphy">Estas características são decorrentes dos fatores climáticos citados anteriormente. É uma região de baixas latitudes e altitudes, o que lhe proporciona médias térmicas relativamente altas durante o ano e, basicamente, duas estações: um verão quente e seco e um inverno ameno e chuvoso. A proximidade do litoral proporciona amplitudes térmicas, sazonais e diárias, relativamente baixas, assim como uma umidade alta. A circulação de correntes marítimas quentes pelo seu oceano, proporciona águas quentes o ano todo, aumentando a evaporação de suas águas e, consequentemente, a umidade do ar.</p>
        <hr />
        <span>
            <sup>1</sup>Dados do site da INMET
        </span>
        </>
    )
}