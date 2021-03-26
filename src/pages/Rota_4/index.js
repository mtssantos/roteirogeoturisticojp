import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Link } from 'react-router-dom';
import "../Rota_1/maps.css";
import { roteiro_4 } from '../Maps/arq'


export function Rota_4(){
    
    const roteiro1 = [
        [-7.11459, -34.87739],
        [-7.11560, -34.87765],
        [-7.11595, -34.87580],
        [-7.11670, -34.874600],
        [-7.11870, -34.870000],
        [-7.1245, -34.8729]
        ]   
        const roteiro2 = [
            [-7.12139,-34.88925],
            [-7.12120, -34.89045],
            [-7.12440, -34.89070],
            [-7.12538, -34.88804],
            [-7.1258, -34.88630],
            [-7.12765, -34.88630],
            [-7.12920, -34.88625],
            [-7.12680, -34.88550],
            [-7.12680, -34.88470],
            [-7.12800, -34.88430],
            [-7.12960, -34.88318],
            [-7.13115, -34.88181]

        ]
        const roteiro3 = [
            [-7.12019, -34.88114],
            [-7.11987, -34.88316],
            [-7.12160, -34.88340],
            [-7.12147, -34.88420],
            [-7.11755, -34.88375],
            [-7.11750, -34.88300],
            [-7.11650, -34.8828]
        ]

        const roteiro4 = [
            [-7.11555, -34.88300],
            [-7.11480, -34.88300],
            [-7.1155, -34.88331],
            [-7.11594, -34.88348],
            [-7.11630, -34.88354],
            [-7.11618, -34.88439],
            [-7.11657, -34.88444],
            [-7.11600, -34.88436],
            [-7.11550, -34.88465],
            [-7.11500, -34.88478],
            [-7.11442, -34.88468],
            [-7.11400, -34.88611],
            [-7.11395, -34.88720],
            [-7.11315, -34.88844],
            [-7.11273, -34.88882],
        ]

        const roteiro5 = [
            [-7.11454, -34.88266],
            [-7.11351, -34.88253],
            [-7.11275, -34.88370]
        ]
    return(
        <>
            <Map center={[-7.11454, -34.88410]} zoom={17}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 <Polyline color={"#3388ff"} positions={roteiro1} weight={8}>
                    <Popup>
                        <div className="link-roteiro">
                            <Link to="/rota_1">
                            Roteiro 1
                            </Link>
                        </div>
                    </Popup>                           
                </Polyline>
                <Polyline color={"#2e7d2d"} positions={roteiro2} weight={8}>
                    <Popup>
                        <div className="link-roteiro">
                            <Link to="/rota_2">
                                Roteiro 2
                            </Link>
                        </div>
                    </Popup>
                </Polyline>
                <Polyline color={"#ff6a00"} positions={roteiro3} weight={8}>
                    <Popup>
                        <div className="link-roteiro">
                            <Link to="/rota_3">
                                Roteiro 3
                            </Link>
                        </div>
                    </Popup>
                </Polyline>
                <Polyline color={"#f51d1d"} positions={roteiro4} weight={8}>
                    <Popup>
                        <div className="link-roteiro">
                            <Link to="/rota_4">
                                Roteiro 4
                            </Link>
                        </div>
                    </Popup>                    
                </Polyline>
                <Polyline color={"#f51d1d"} positions={roteiro5} weight={8}>
                    <Popup>
                        <div className="link-roteiro">
                            <Link to="/rota_4">
                                Roteiro 4
                            </Link>
                        </div>
                    </Popup> 
                </Polyline>
                {roteiro_4.map(roteiros => (
                    <Marker position={[roteiros.latitude, roteiros.longitude]} key={roteiros.id}>
                          <Popup>
                                    <div className="point">
                                        <img src={roteiros.imagem} alt="Imagem do Projeto" />
                                    </div>
                                    <p>{roteiros.nome}</p>
                            </Popup>
                    </Marker>

                ))}

                </Map>
        </>
    )
}