import { Map, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import "./index.css";
import points from './arq';

function Maps() {
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
       return(
        <div className="maps">
            <Map center={[-7.11454, -34.88233]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {points.map(point => (
                            <Marker position={[point.latitude, point.longitude]} key={point.id}>
                                <Polyline color={"#3388ff"} positions={roteiro1} />
                                <Polyline color={"#2e7d2d"} positions={roteiro2} />
                                <Polyline color={"#ff6a00"} positions={roteiro3} />
                                <Popup>
                                    <div className="point">
                                        <img src={point.imagem} alt="Imagem do Projeto" />
                                    </div>
                                    <p>{point.nome}</p>
                                </Popup>
                            </Marker>
                ))}
            </Map>
        </div>
    )
    
}


export default Maps;