import "../../1/index.css";
import praca_2 from '../divisions/media/praca_2.jpg';
import praca_3 from '../divisions/media/praca_3.jpg';
import praca_4 from '../divisions/media/praca_4.jpg';

export function FaculDireito(){
    return(
        <div className="container text-1">
                <p>Todo o setor oeste da praça é ocupado pelo Conjunto dos Jesuítas, que compreende a atual Faculdade de Direito, a torre da Igreja São Gonçalo e o Palácio da Redenção (foto 4).</p>
                    <figure className="figure">
                            <a href={praca_2}><img src={praca_2} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Foto 4</figcaption>
                    </figure>
            <p>O interior contém um pátio ajardinado, circundado por uma galeria de arcadas sustentadas por colunas com azulejos, cujo padrão provavelmente remete aos anos 1950 e é proveniente da fábrica paulista Matarazzo. No andar superior, os pilares de lâmina hexagonal suportam as cobertas e as escadarias apresentam trabalhos de cantaria em suas volutas. Todo o conjunto foi construído com calcário e argamassa com óleo de baleia (NÓBREGA, 1985). Foi tombado pelo IPHAEP em 1980, através do decreto nº 8630.</p>
            <p>Em 1923, foi inserido no pátio um busto em bronze em homenagem a Epitácio Pessoa, de autoria do escultor Humberto Cozzo. A base do busto é composta por um biotita monzogranito, rocha leucocrática e alotriomórfica, da qual foi confeccionada uma lâmina delgada. Apresenta textura fanerítica média (0,5 a 3 mm), cuja mineralogia principal é microclina (33%), quartzo (32%), plagioclásio (17%; fotomicrografia 2a). Tem ainda biotita (12%) e titanita (3%) como minerais máficos principais. Os acessórios são zircão, apatita e opacos (somando em média 1%), e os de alteração clorita, moscovita e sericita com menos de 1%.</p>
                    <figure className="figure">
                            <a href={praca_3}><img src={praca_3} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Fotomicrografia 2a</figcaption>
                    </figure>
            <p>Os cristais de microclina apresentam forma anédrica e, em sua maioria, tem tamanho absoluto dos grãos maior ou igual a 3 mm. Estão associados a geminação tartan e carlsbad. O quartzo tem forma anédrica com tamanho variando de fino a grosso, e exibe fraturas em alguns grãos. Os cristais de plagioclásio variam de anédrico a subédrico, sendo essa segunda forma mais comum. Possuem um tamanho médio, que varia entre 0,2 e 1mm e geminação polissintética. Predominantemente anédrica com cristais pontuais subédricos, a biotita tem tamanho absoluto dos grãos variando entre 0,2 e 1mm. A titanita ocorre em cristais em formato anedral e tamanho médio de 1,5mm, com pequenas fraturas. Zircão e apatita ocorrem como cristais euédricos com tamanho inferior a 0,2mm, inclusos em minerais félsicos e em biotita. Clorita, moscovita e sericita são produtos de alteração, sendo os dois primeiros de biotita (fotomicrografia 2b) e o terceiro da microclina.</p>
                    <figure className="figure">
                            <a href={praca_4}><img src={praca_4} className="img-fluid" alt="" /></a>
                            <figcaption className="figure-caption">Fotomicrografia 2b</figcaption>
                    </figure>
            </div>
	
	
    )
}