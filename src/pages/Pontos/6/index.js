import NavBar from "../../../components/Navbar";
import PDF from './media/Pereira2019_Article_GeotouristicTrailInTheSenhorDa.pdf'
import "../1/index.css";




export function Cemiterio(){
    return(
        <>
        <NavBar />
        <div className="container">
            <h2>Cemitério Senhor da Boa Sentença</h2>
			<p className="text-article">O Cemitério Senhor da Boa Sentença (CBS), fundado pela Santa Casa da Misericórdia em 1856 (AQUINO, 1985) e administrado pela Prefeitura desde 1936, é o primeiro cemitério municipal de João Pessoa. Possui 6.677 túmulos perpétuos, 385 rotativos e centenas de gavetas para ossadas, dispostos em uma área com forma relativamente quadrada medindo 56.220 m2 (SEDURB/PMJP). Localizado no bairro da Ilha do Bispo, fora do perímetro do Centro Histórico, tem acesso gratuito pela Rua Sebastião Oliveira Lima e está aberto diariamente das 7 às 18h.</p>
			<p className="text-article">Um resumo acerca do cemitério, os valores patrimoniais avaliados e a proposta de roteiros geoturísticos pode ser encontrado no artigo de Pereira et al. (2019), publicado na revista Geoheritage e disponibilizado para download e leitura no link abaixo.</p>
			<a href={PDF} download={PDF} className="card-link">Clique Aqui para Baixar o artigo</a>
        </div>
        </>
    )
}