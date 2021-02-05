import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "./index.css";
import points from './arq';

function Maps() {

    return(
        <div className="maps">
            <Map center={[-7.11454, -34.88233]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {points.map(point => (
                    <Marker position={[point.latitude, point.longitude]}>
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