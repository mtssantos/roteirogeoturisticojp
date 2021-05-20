import NavBar from "../../../../components/Navbar";
import PDF from './media/Pereira2019_Article_GeotouristicTrailInTheSenhorDa.pdf'
import "../1/index.css";




export function Cemiterio(){
    return(
        <>
        <NavBar />
        <div className="container">
            <h2>Senhor da Boa Sentença Cemetery</h2>
			<p className="text-article">The Senhor da Boa Sentença Cemetery (CBS), founded by Holy House Of Mercy in 1856 (AQUINO, 1985) and administered by the City Hall since 1936, is the first municipal cemetery in João Pessoa. It has 6,677 perpetual tombs, 385 rotating and hundreds of drawers for bones, arranged in an area with a relatively square shape measuring 56,220 m2 (SEDURB / PMJP). Located in the Bishop Island neighborhood, outside the perimeter of the Historic Center, it has free access via Sebastião Oliveira Lima Street and is open daily from 7 am to 6 pm.</p>
			<p className="text-article">A summary of the cemetery, the patrimonial values ​​evaluated and the proposal for geotouristic itineraries can be found in the article by Pereira et al. (2019), published in Geoheritage magazine and made available for download and reading at the link below.</p>
			<a href={PDF} download={PDF} className="card-link">Click Here to Download the Article</a>
        </div>
        </>
    )
}