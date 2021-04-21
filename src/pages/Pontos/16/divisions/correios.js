import riobranco_1 from '../media/riobranco_1.JPG';

export function Correios(){
    return(
        <>
            <div class="container text-1">
            <p>A ‘Casa da Praça do Erário’ foi construída na administração do Governador Jeronymo de Mello e Castro, em 1782. De início serviu de açougue, devido à presença próxima da Câmara que fiscalizava a comercialização da carne e, posteriormente, tornou-se o mercado público.  A partir de 1869, no governo do Barão do Abiaí, funciona como agência dos Correios, tendo essa função até 1971, quando se transformou em depósito. Nessa época, seu estado era lamentável, chegando o teto a ruir, tendo sido restaurada em 1981. Atualmente, serve como escritório e biblioteca do IPHAN (foto 1).</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={riobranco_1}><img src={riobranco_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 1</figcaption>
                            </figure>
                </div>
		    <p>As colunas que sustentam as laterais da casa são compostas por blocos maciços de calcário de um metro de comprimento por 30 cm de espessura, enquanto as dos beirais das janelas medem 20 x 20 cm. Apresentam as mesmas características texturais e mineralógicas do calcário das paredes da ‘Casa do Erário’, também da Formação Gramame (Maastrichtiano.</p>
            </div>
        </>
    )
}