import geral_1 from '../media/geral_1.jpg';


export function Geral(){
    return(
        <>
        <p className="text-article">It is located at the beginning of General Osório Street (or New Street, during the colonial period, the second street formed in the city). In this square, in whose perimeter there is the Basilica of Nossa Senhora das Neves, the Mother Church, until the beginning of the 20th century it was called Largo da Matriz, when it was renamed, in posthumous homage to the praiseworthy prior of the São Bento Monastery D. Ulrico Sonntag. The former Nossa Senhora das Neves College and its chapel, the monument to Nossa Senhora de Lourdes and the city's geographic landmark are also located in its surroundings (photo 1). The Ladeira da Borborema, on the southwest side, still has traces of the first pavement of the upper city, from the mid-19th century, with irregular blocks of limestone in the middle of the street, in parts of its initial portion.</p>
				<figure class="figure">
						<a href={geral_1}><img src={geral_1} alt="" /></a>
						<figcaption class="figure-caption">Photo 1</figcaption>
				</figure>
		<p className="text-article">On the west side of the church wall, a limestone landmark was built, plastered with mortar, which represents a geodesic landmark implanted by the Historical and Geographic Institute of Rio Grande do Norte in 1922, according to the sign attached to the side with the words “Base of the Instrument of meridian passages used by the Commission that determined the Geographic Coordinates in the States of Parahyba and Rio Grande do Norte. 1921-1922 ”. </p>            
        </>
    )
}