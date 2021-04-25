import { BrowserRouter, Route } from 'react-router-dom';
import EN from '../pages/EN';
import Home from '../pages/Home';
import Maps from '../pages/Maps';
import { Rota_1 } from '../pages/Rota_1';
import Geoturism from '../pages/Home/geoturism';
import Pontos from '../pages/Home/Pontos';
import { Rota_3 } from '../pages/Rota_3';
import { Rota_2 } from '../pages/Rota_2';
import { Rota_4 } from '../pages/Rota_4';
import { Publicações } from '../pages/Home/publi';
import { RouterPontos } from './PontosRouter';
import { Territorio } from '../pages/Territorio';


export function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/en" component={EN} />
            <Route path="/maps" component={Maps} />
            <Route path="/rota_1" component={Rota_1} />
            <Route path="/rota_2" component={Rota_2} />
            <Route path="/rota_3" component={Rota_3} />
            <Route path="/rota_4" component={Rota_4} />
            <Route path="/geoturism" component={Geoturism} />
            <Route path="/locais" component={Pontos} />
            <Route path="/publi" component={Publicações} />
            <Route path="/territorio" component={Territorio} />
            <RouterPontos />
        </BrowserRouter>
    )
}