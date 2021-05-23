import riobranco_2 from "../media/riobranco_2.jpg";
import riobranco_3 from "../media/riobranco_3.jpg";


export function Erario(){
    return(
        <>
        <div class="container text-1">
        <p className="text-article">Among various functions, he served as Provincial Treasury, Provincial Assembly and Fiscal Police and was recognized as one of the most authentic representations of the Baroque. An exuberant ornate staircase at the front led to the entrances of the first and second floors (figure 1a). Its original architectural lines were modified, due to the reconstruction, as a result of a fire in December 1916 (figure 1b).</p>
		<div class="text-center">
				<figure class="figure">
						<a href={riobranco_2}><img src={riobranco_2} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Figure 1a</figcaption>
				</figure>
		</div>
		<div class="text-center">
				<figure class="figure">
						<a href={riobranco_3}><img src={riobranco_3} class="img-fluid" alt="" /></a>
						<figcaption class="figure-caption">Figure 1b</figcaption>
				</figure>
		</div>
		<p className="text-article">Between 2015 and 2017, it was renovated by IPHAN and became its headquarters. Thus, during the camp, it was possible to visit the interior, where the physical structure of the building was known, then without the ceiling and with most of the walls demolished. The first floor shows the masonry walls, with a mixture of solid blocks of limestone, ferruginous sandstone (something extremely rare in the buildings of the Historic Center) and pressed brick, typical of the 19th century, cemented with clay, sand and lime mortar. On the second floor, the walls are basically made of bricks cemented by mortar. This is due to the fact that the limestone is resistant to compression on the lower floors, reducing the thickness of the masonry on the upper floors, now with new materials. </p>
		<p className="text-article">The ferruginous sandstone, outcropping on the urban beaches of João Pessoa, was probably extracted from the surroundings of Cabo Branco. They are composed of poorly consolidated sandy sediments, with reddish color, flat-parallel stratification and larger millimeter grains of quartz and K-feldspar, subangular to sub-rounded, with low sphericity, with the K-feldspar changed to a grayish clay. No documentation was found on the transportation of this sandstone from the beach to the city, either through the forest or by water transport, via the Paraíba River, which would be a much longer route. </p>
		<p className="text-article">The limestone belonging to the Gramame Formation (Maastrichtian) is cream colored, massive, with calcite nodules and, with the naked eye, aphosiliferous, with the textural characteristics of the facies described in i) of the Gramame Formation Outcrop. Considering the time of the building, second half of the 18th century, probably the source of this limestone was the quarries exposed on the slopes of the west-facing trays, near the Franciscan Complex.</p>

        </div>
        </>
    )
}