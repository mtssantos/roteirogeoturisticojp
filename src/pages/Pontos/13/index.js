import NavBar from "../../../components/Navbar";
import fossil_1 from "./media/fossil_1.JPG"

export function Fossil(){
    return(
        <>
        <NavBar />
        <div class="container">
            <h2>Fóssil das Trincheiras</h2>
                <p className="text-article">Situa-se na Rua das Trincheiras, nº 194. Diz respeito a um piso de calcário laminado com a presença de um fóssil de peixe do gênero Dastilbe (dastilbe elongatus Santos), com as dimensões de 7 cm x 2 cm (foto 1).</p>
                <div class="text-center">
                        <figure class="figure">
                                <a href={fossil_1}><img src={fossil_1} class="img-fluid" alt="" /></a>
                                <figcaption class="figure-caption">Foto 1</figcaption>
                        </figure>
                </div>
                <p className="text-article">Essa rocha ornamental é conhecida como ‘Pedra Cariri’, amplamente vendida nas casas de materiais de construção e marmorarias da cidade, utilizados para revestimentos de paredes, pisos e calçadas. As pedreiras localizam-se no Ceará, nos municípios de Porteiras, Barbalha, Crato, Nova Olinda e Santana do Cariri, no interior do Geoparque Araripe, no Geossítio Pedra Cariri, associados ao Membro Crato, da Formação Santana, setor leste da Bacia do Araripe.</p>
                <p className="text-article">O Membro Crato corresponde a calcários micríticos laminados e ritmitos argila-carbonatos que se intercalam a folhelhos e arenitos finos, de idade Cretácea (112 Ma), associados a um ambiente lacustre carbonatado, com águas calmas e brejos, cujos abundantes e diversificados registros fósseis são explicados pela intensa biodiversidade local (insetos, aracnídeos, peixes, algas, entre outros) em bom estado de fossilização (VIANA e NEUMAN, 2002).</p>
                <p className="text-article">Uma rocha fossilífera é algo raro nas rochas, mesmo ornamentais, presentes no Centro Histórico de João Pessoa. Essa característica per se lhe confere importância enquanto elemento da geodiversidade de caráter geológico (paleontológico).</p>
	

        </div>
        </>
    )
}