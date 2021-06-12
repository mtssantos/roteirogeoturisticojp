import grafico2 from '../media/grafico2.png';
import grafico3 from '../media/grafico3.png';
import grafico4 from '../media/grafico4.png';
import grafico5 from '../media/grafico5.png';
import grafico6 from '../media/grafico6.png';



export function ENElementosclimaticos(){
    return(
        <>
            <h3>Temperature</h3>
                <p class="paragraphy">Throughout the year, the temperature can vary according to a number of factors such as, for example, the amount of sunlight and the passage of sea currents and air masses, for example.</p>
                <p class="paragraphy">According to EMO data from João Pessoa, for the period between 1977 and 2014, expressed in graph 1, there is the presence of two seasons of the year: a hot summer, between October and March, with maximum thermal averages around 31ºC and a mild winter, between April and September, with minimum averages around 22ºC. Thus, the seasonal thermal amplitude is around 3ºC, varying between 25ºC and 28ºC. This thermal variation is directly related to insolation in the area where, between the spring and autumn equinoxes, when the sun reaches its zenith twice, the maximum heat is reached, 31ºC. After the autumnal equinox in the Southern Hemisphere, in March, the position of the Earth in relation to the sun causes the sun's rays to reach João Pessoa at a greater inclination, reducing temperatures. The proximity of the equator, however, makes these averages relatively high, unlike regions with higher latitudes in Brazil.</p>
                <div class="text-center">
                    <figure class="figure">
                        <figurecaption class="figure-caption">Graph 1 - Average maximum and minimum temperature curves for João Pessoa, for the period 1977-2014.</figurecaption><br /><br />
                        <a href={grafico2}><img src={grafico2} alt="" class="img-fluid" /></a><br /><br />
                        <figurecaption class="figure-caption">Source: the author.</figurecaption>
                    </figure>
                </div>
                <p class="paragraphy">Despite the intense fluctuations during the sampled period (graph 2), the average annual temperatures showed an increase of around 1.5ºC, between 26ºC and 27.5ºC, probably associated with urbanization and, consequently, deforestation, which generates heat islands . Note, however, the presence of atypical years, such as 1998 and 1985/2009, with temperatures much higher and lower than the average, respectively.</p>
                <div class="text-center">
                    <figure class="figure">
                        <figurecaption class="figure-caption">Graph 2 - Variation in average annual temperature for the period 1977-2014.</figurecaption><br /><br />
                        <a href={grafico3}><img src={grafico3} alt="" class="img-fluid" /></a><br /><br />
                        <figurecaption class="figure-caption">Source: the author.</figurecaption>
                    </figure>
                </div>
                <h3>Humidity and Precipitation</h3>
                <p class="paragraphy">Air humidity corresponds to the volume of water present in the atmosphere in the form of vapor. This volume can be quantified in an absolute (g/m3) or relative (%) way, having a direct relationship with cloudiness and, consequently, with precipitation, that is, the higher the air humidity, the greater the possibility of precipitation , whether in the form of snow, frost, dew, rain or hail. Considering that the mapped area has low latitudes, rainfall occurs in the form of rain. EMO data were expressed as a percentage and will be presented here.</p>
                <p class="paragraphy">According to these data, for the period 1977-2014, the average air humidity in João Pessoa is 75.5%. Graph 3 shows that summer has the lowest humidity rates, between 72% and 74%, increasing with a decrease in temperature, up to 82%.</p>
                <p class="paragraphy">This increase in humidity is reflected in the concentration of rain in autumn-winter, as shown in Graph 4. The concentration of rain in this period is a consequence of the circulation of hot air masses (Atlantic tropical, through the southeast trade winds) and cold ( Atlantic polar), which move to the low pressure zone formed on the northeastern coast in winter and which end up colliding in the middle of the year on the eastern coast of the region, generating intense frontogenic rains, concentrated between the months of May and August. Frontogenesis ends up inducing the formation of a <b>Cyclonic Vortex in the Upper Troposphere</b>, which corresponds to an intense cloudiness in the upper troposphere (PARAÍBA, 2000, apud NÓBREGA, 2002). According to the author, the performance of Convective Clusters associated with eastern undulatory disturbances, or 'eastern waves', which correspond to winds moving from Africa, in the EW direction, with a speed of 10º longitude per day and a length of 4000 km. However, as we will see below, the role of these winds is reduced in the production of rainfall, since they do not circulate in the area during the rainy season, being restricted to the hottest and driest months (October to March).</p>
                <div class="text-center">
                    <figure class="figure">
                        <figurecaption class="figure-caption">Graph 3 - Variation of monthly average relative humidity for the period 1977-2014.</figurecaption><br /><br />
                        <a href={grafico4}><img src={grafico4} alt="" class="img-fluid" /></a><br /><br />
                        <figurecaption class="figure-caption">Source: the author.</figurecaption>
                    </figure>
                </div>
                <div class="text-center">
                    <figure class="figure">
                        <figurecaption class="figure-caption">Graph 4 - Variation in average annual precipitation for the period 1977-2014.</figurecaption><br /><br />
                        <a href={grafico5}><img src={grafico5} alt="" class="img-fluid" /></a><br /><br />
                        <figurecaption class="figure-caption">Source: the author.</figurecaption>
                    </figure>
                </div>
                <p class="paragraphy">The average annual rainfall, in the aforementioned period, was 1838 mm, with its peak in the months of April to July (between 261 mm and 326 mm) and its minimum between October and December (around 30 mm/month). Corroborating the data from Vasconcelos (2010), however, some years showed significant anomalies, either in annual rainfall or in monthly rainfall, which does not reduce the reliability of the data, since the '<i>outliers</i>' were disregarded in the average calculations.</p>
                <p class="paragraphy">Table 1 shows some of these ‘<i>outliers</i>’, with respect to a monthly amount of rain above or below the average.</p>
                <p class="paragraphy">From the tables below, it can be seen that, in some years, there is a concentration of anomalies, which ended up affecting the total rainfall. In 1982, for example, an extremely strong <b>El Niño</b> phenomenon (GLYNN, 1990) affected the climate of the northeastern coast, recording a rainfall of only 500 mm, practically a third of the average value, repeating what there was. the previous year, with an accumulated rainfall of only 635 mm. In fact, the sum of rainfall for the years 1981, 1982 and 1983 was 2330 mm, that is, only 25% more than it normally rains in a year. According to historical documents, these droughts had already plagued João Pessoa in other centuries, but in the 20th century nothing similar had been reported. Other atypical years were 1979, 1993, 1999, 2001 and 2006, with total rainfall around 1000 mm. In these years of rainfall deficit, the <b>South Atlantic Subtropical Anticyclone</b> and the southeast trade winds were more intense, pushing the Intertropical Convergence Zone, responsible for cloudiness and rain on the coast, further north (PARAÍBA , 2000 apud NÓBREGA, 2002).</p>
                <div class="container text-center">
                    <figurecaption class="figure-caption">Table 1 - Anomalous years with respect to rainfall for the period 1977-2014.</figurecaption><br />
                    <figurecaption class="figure-caption">Above average rains</figurecaption>
                    <table class="table table-bordered">
                        <tr>
                            <th>Month/Year</th>
                            <th>Normal monthly average</th>
                            <th>Registered Quantity</th>
                        </tr>
                        <tr>
                            <td>Mar/1984</td>
                            <td>164 mm</td>
                            <td>654,7 mm</td>
                        </tr>
                        <tr>
                            <td>Aug/1985</td>
                            <td>287 mm</td>
                            <td>675,8 mm</td>
                        </tr>
                        <tr>
                            <td>Apr/1989</td>
                            <td>261 mm</td>
                            <td>680,6 mm</td>
                        </tr>
                        <tr>
                            <td>May/1994</td>
                            <td>270 mm</td>
                            <td>620,5 mm</td>
                        </tr>
                        <tr>
                            <td>Jun/1994</td>
                            <td>326 mm</td>
                            <td>709,4 mm</td>
                        </tr>
                        <tr>
                            <td>Jan/2004</td>
                            <td>74 mm</td>
                            <td>303,2 mm</td>
                        </tr>
                        <tr>
                            <td>Sep/2013</td>
                            <td>76,5 mm</td>
                            <td>287,5 mm</td>
                        </tr>
                    </table>
                    <figurecaption class="figure-caption">Below average rains</figurecaption>
                    <table class="table table-bordered">
                        <tr>
                            <th>Month/Year</th>
                            <th>Normal monthly average</th>
                            <th>Quantity registered</th>
                        </tr>
                        <tr>
                            <td>Mar/1981</td>
                            <td>164 mm</td>
                            <td>10,9 mm</td>
                        </tr>
                        <tr>
                            <td>Apr/1982</td>
                            <td>161 mm</td>
                            <td>1,2 mm</td>
                        </tr>
                        <tr>
                            <td>May/1982</td>
                            <td>270 mm</td>
                            <td>22,2 mm</td>
                        </tr>
                        <tr>
                            <td>Jun/1982</td>
                            <td>326 mm</td>
                            <td>9,2 mm</td>
                        </tr>
                        <tr>
                            <td>Jul/1982</td>
                            <td>287 mm</td>
                            <td>1,1 mm</td>
                        </tr>
                        <tr>
                            <td>Aug/1982</td>
                            <td>151 mm</td>
                            <td>21,5 mm</td>
                        </tr>
                        <tr>
                            <td>Oct/1985</td>
                            <td>32 mm</td>
                            <td>1,1 mm</td>
                        </tr>
                        <tr>
                            <td>Dec/1987</td>
                            <td>31 mm</td>
                            <td>1,5 mm</td>
                        </tr>
                        <tr>
                            <td>Feb/1989</td>
                            <td>102 mm</td>
                            <td>11,3 mm</td>
                        </tr>
                        <tr>
                            <td>Jan/2006</td>
                            <td>74 mm</td>
                            <td>7,2 mm</td>
                        </tr>
                        <tr>
                            <td>Nov/2012</td>
                            <td>27 mm</td>
                            <td>2 mm</td>
                        </tr>
                    </table>
                    <figurecaption class="figure-caption">Source: the author.</figurecaption>
                    

                </div>
                <p class="paragraphy">The wettest year in the analyzed period was 1985, with values exceeding 3000 mm. Above 2300 mm, 1978, 1994, 1996, 2000 and 2009 stand out. In these years, the <b>North Atlantic Subtropical Anticyclone</b> and the northeast trade winds are more intense, pushing the Zone of Intertropical Convergence further to the south, 'parking' on the northeast coast for a longer period than normal.</p>
                <h3>Winds</h3>
                <p class="paragraphy">Winds correspond to the movement of air, caused by differences in atmospheric pressure, whose direction is from high to low pressures. The wind has the role of working as an exogenous agent, modeling the landforms, being a disperser of sediments along the surface, as well as pollutants to the upper atmosphere, also serving as a generator of waves in the ocean, with a direct relationship in the morphology of the coast. Sea breezes, too, play a fundamental role in the urban climate as a softener of high temperatures and, in the case of João Pessoa, special state and municipal legislation<sup>1</sup> , prohibiting the construction of buildings with more than 12 .90 m, in a first line of lots, at 35 m, in a last line, up to 500 m from the high tide, provides reduced interference in the direction and speed of the winds. Understanding atmospheric dynamics through this bias is important and will be described in this chapter.</p>
                <p class="paragraphy">From the EMO data, the direction and speed of the winds that crossed the area between 1997 and 2014 were identified. Regarding the direction of the winds (Graph 5), there is an absolute predominance of winds from SE direction, especially from 2005 onwards. , reaching 100% frequency in 2012, followed by NE, E and S quadrant winds, which marked an equilibrium in frequency in the years 2001 to 2003, with the exception of 2001, when NE direction winds did not circulate in the region. The SE winds have an average speed of 2.91 m/s, while the E and S winds have an average speed of 2.96 m/s and 2.97 m/s, respectively.</p>
                <div class="text-center">
                    <figure class="figure">
                        <figurecaption class="figure-caption">Graph 5-Frequency of dominant winds according to direction for the period 1997-2014.</figurecaption><br /><br />
                        <a href={grafico6}><img src={grafico6} alt="" class="img-fluid" /></a><br /><br />
                        <figurecaption class="figure-caption">Source: the author.</figurecaption>
                    </figure>
                </div>
                <p class="paragraphy">The E winds also circulate, preferably, between the months of October and March. Its average speed is 2.96 m/s, while the S quadrant winds, in the form of polar masses, circulate in the middle of the year, thus having a direct relationship with the heavy rains at this time, as well as with the falls of temperature. Its average speed is 2.97 m/s.</p>
                <p class="paragraphy">Climatic elements play a fundamental role in the configuration of the relief of an area, acting as an exogenous agent that sculpts the rocks through weathering, whether chemical or physical, forming and eroding the soil, in times of intense rainfall, for example, they cause landslides and, thus, inconvenience the civilian population, usually the low-income ones. Furthermore, they directly influence the distribution of vegetation over the territory, its morphological characteristics and the configuration of the coastline. Thus, its analysis, present in this subchapter, plays an important role in the selection of some Places of Interest, mainly located in the coastal area of the thesis.</p>
                <hr />
                <span>
                    <sup>1</sup> Constitution of the State of Paraíba (Art. 229), Organic Law for the Municipality of João Pessoa (Art. 175) and the Master Plan of João Pessoa (Art. 25).
                </span>
        </>
    )
}