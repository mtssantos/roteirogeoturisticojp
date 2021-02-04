import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import "./index.css";

function Maps() {

    const redOptions = { color: 'blue' }
    return(
        <div className="maps">
            <Map center={[-7.11454, -34.88233]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CircleMarker center={[-7.11454, -34.88233]} pathOptions={redOptions} radius={150}>
                    <Marker position={[-7.11462, -34.88233]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </CircleMarker>
            </Map>
        </div>
    )
    
}


export default Maps;