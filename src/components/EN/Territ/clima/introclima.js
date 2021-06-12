import grafico from '../media/gráfico.png';


export function ENIntroclima(){
    return(
        <>
        <p class="paragraphy">According to the World Meteorological Organization (WMO), climate consists of the succession of atmospheric time, with a certain set of variations, over a long period, which climatologists consider between 35 to 40 years, in a localized spatial domain (CONTI, 1993) . The climate of a given location has a series of elements, which are part of the meteorological time, and which end up presenting characteristics that are influenced by a series of factors, such as the geographical position of the location, the altitude, the ocean currents, the presence , or not, of vegetation, the degree of urbanization, the distance from the coast, the dynamics of air masses and the relief (AYOADE, 2002). These factors influence temperature, humidity, precipitation and wind direction, among others, and these are the variables that will be characterized in this chapter.</p>
        <p class="paragraphy">In the State of Paraíba, six Meteorological Observation Stations are located (EMO-Areia, Campina Grande, João Pessoa, Monteiro, Patos and Sousa)<sup>1</sup> , and João Pessoa is the only one inserted in the area the closest ones are more than 100 km away, which, due to the distance, makes it impossible to use their data. Thus, the characterization of climate variables will be elaborated from statistical data provided by this station, from data collection between 1977 and 2014, a period exceeding the 30 years suggested by the OMM as necessary for continuous data collection, in order to provide a Climatological Normal. It is noteworthy that some data remained incomplete, such as the year 1980, which was not counted.</p>
        <p class="paragraphy">The <b>João Pessoa Meteorological Station</b> has as geographic coordinates 34º52’ long. West and 07º06’ lat. South and an altitude of 7.4 m. Because the study area presents a flat to slightly undulating relief, that is, it maintains spatial homogeneity, the information contained in this source will be sufficient to understand the climate dynamics of the area as a whole.</p>
        <p class="paragraphy">After processing the data provided by EMO for the period 1977-2014, a climogram was set up for the city of João Pessoa, which can be seen in Graph 1.</p>
        <div class="text-center">
            <figure class="figure">
                <figurecaption class="figure-caption">Graph 1 - João Pessoa's Climogram.</figurecaption><br /><br />
                <a href={grafico}><img src={grafico} alt="" class="img-fluid" /></a><br /><br />
                <figurecaption class="figure-caption">Source: the author.</figurecaption>
            </figure>
        </div>
        <p class="paragraphy">According to Strahler's classification (1982), the study area is included in the tropical climate ‘wet coastal exposed to tropical maritime masses’, that is, it has a seasonality marked by two very distinct seasons; hot, dry summers (thermal average of 28ºC) and mild, rainy winters (average temperature of 25ºC), with annual rainfall around 1800 mm and average relative humidity of 80%, as mentioned above.</p>
        <p class="paragraphy">These characteristics are due to the climatic factors mentioned above. It is a region of low latitudes and altitudes, which provides relatively high thermal averages throughout the year and, basically, two seasons: a hot, dry summer and a mild, rainy winter. The proximity to the coast provides relatively low thermal, seasonal and daily ranges, as well as high humidity. The circulation of warm sea currents through its ocean, provides warm water throughout the year, increasing the evaporation of its waters and, consequently, the humidity of the air.</p>
        <hr />
        <span>
            <sup>1</sup>INMET website data
        </span>
        </>
    )
}