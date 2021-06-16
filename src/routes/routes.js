import { BrowserRouter, Route } from 'react-router-dom';
import EN from '../pages/EN/Home';
import Home from '../pages/Home';
import Maps from '../pages/Maps';
import Rota_1 from '../pages/Rota_1';
import Geoturism from '../pages/Home/geoturism';
import EN_Geoturism from '../pages/EN/Home/geoturism';
import Pontos from '../pages/Home/Pontos';
import Rota_3  from '../pages/Rota_3';
import Rota_2 from '../pages/Rota_2';
import Rota_4 from '../pages/Rota_4';
import Publicações from '../pages/Home/publi';
import RouterPontos  from './PontosRouter';
import Territorio  from '../pages/Territorio';
import Fichas  from '../pages/Fichas';
import Ponts from '../pages/EN/Ponts';
import ENRouterPontos from './ENPontosRouter';
import ENFichas  from '../pages/EN/Fichas';
import ExplorarTematica from '../pages/Tematica';
import About from '../pages/About';
import ENTerritorio from '../pages/EN/Territorio';
import ENPublicações from '../pages/EN/Home/publi';
import ENMaps from '../pages/EN/Maps';
import ENAbout from '../pages/EN/About';
import { ENRota_1 } from '../pages/EN/Rota_1';
import { ENRota_2 } from '../pages/EN/Rota_2';
import { ENRota_3 } from '../pages/EN/Rota_3';
import { ENRota_4 } from '../pages/EN/Rota_4';
import ENExplorarTematica from '../pages/EN/Tematica';
import ScrollToTop from "../components/ScrollToTop"
import Historia from '../pages/Home/history';


export function Routes(){
    return(
        <>
        <ScrollToTop />
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/en" component={EN} />
            <Route path="/maps" component={Maps} />
            <Route path="/en_maps" component={ENMaps} />
            <Route path="/rota_1" component={Rota_1} />
            <Route path="/rota_2" component={Rota_2} />
            <Route path="/rota_3" component={Rota_3} />
            <Route path="/rota_4" component={Rota_4} />
            <Route path="/enrota_1" component={ENRota_1} />
            <Route path="/enrota_2" component={ENRota_2} />
            <Route path="/enrota_3" component={ENRota_3} />
            <Route path="/enrota_4" component={ENRota_4} />
            <Route path="/geoturism" component={Geoturism} />
            <Route path="/en_geoturism" component={EN_Geoturism} />
            <Route path="/locais" component={Pontos} />
            <Route path="/en_locais" component={Ponts} />
            <Route path="/publi" component={Publicações} />
            <Route path="/en_publi" component={ENPublicações} />
            <Route path="/territorio" component={Territorio} />
            <Route path="/en_territorio" component={ENTerritorio} />
            <Route path="/fichas" component={Fichas} />
            <Route path="/en_fichas" component={ENFichas} />
            <Route path="/tematica" component={ExplorarTematica} />
            <Route path="/en_tematica" component={ENExplorarTematica} />
            <Route path="/about" component={About} />
            <Route path="/en_about" component={ENAbout} />
            <Route path="/history" component={Historia} />
            <RouterPontos />
            <ENRouterPontos />
        </BrowserRouter>
        </>
    )
}