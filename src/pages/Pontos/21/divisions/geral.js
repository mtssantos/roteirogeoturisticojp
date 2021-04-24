import geral_1 from '../media/geral_1.jpg';


export function Geral(){
    return(
        <>
        <p className="text-article">Se localiza no início da Rua General Osório (ou Rua Nova, durante o período colonial, a segunda rua formada na cidade). Nessa praça, em cujo perímetro encontra-se a Basílica de Nossa Senhora das Neves, a Igreja Matriz, até o início do século XX denominava-se Largo da Matriz, quando foi renomeada, em homenagem póstuma ao benemérito prior do Mosteiro de São Bento, D. Ulrico Sonntag. Em seu entorno localiza-se, também, o antigo Colégio Nossa Senhora das Neves e sua capela, o monumento a Nossa Senhora de Lourdes e o marco geográfico da cidade (foto 1). A Ladeira da Borborema, no lado sudoeste, ainda guarda resquícios da primeira pavimentação da cidade alta, de meados do século XIX, com blocos irregulares de calcário no meio fio da rua, em partes de sua porção inicial.</p>
				<figure class="figure">
						<a href={geral_1}><img src={geral_1} alt="" /></a>
						<figcaption class="figure-caption">Foto 1</figcaption>
				</figure>
		<p className="text-article">No lado oeste da parede da igreja foi construído um marco de pedra calcária, rebocado com argamassa, que representa um marco geodésico implantado pelo Instituto Histórico e Geográfico do Rio Grande do Norte, em 1922, conforme placa anexada na lateral com os dizeres “Base do Instrumento de passagens meridianas utilizado pela Comissão que determinou as Coordenadas Geographicas nos Estados da Parahyba e do Rio Grande do Norte. 1921-1922”. </p>            
        </>
    )
}