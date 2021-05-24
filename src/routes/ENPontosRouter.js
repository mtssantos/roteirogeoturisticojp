import { Route } from 'react-router-dom';
import { FonteTambia } from '../pages/EN/Pontos/1';
import { Beberibe } from '../pages/EN/Pontos/10';
import { Gruta } from '../pages/EN/Pontos/11';
import { ArenizaBarreira } from '../pages/EN/Pontos/12';
import { Fossil } from '../pages/EN/Pontos/13';
import { Dolina } from '../pages/EN/Pontos/14';
import { Misericordia } from '../pages/EN/Pontos/15';
import { PracaRioBranco } from '../pages/EN/Pontos/16';
import { PracaDomAdauto } from '../pages/EN/Pontos/17';
import { Academia } from '../pages/EN/Pontos/18';
import { SaoFrancisco } from '../pages/EN/Pontos/19';
import { BicaFeia } from '../pages/EN/Pontos/2';
import { Antonio } from '../pages/EN/Pontos/20';
import { PracaDomUlrico } from '../pages/EN/Pontos/21';
import { Mosteiro } from '../pages/EN/Pontos/22';
import { Milagres } from '../pages/EN/Pontos/23';
import { FalhaSanhaua } from '../pages/EN/Pontos/24';
import { CasaRosa } from '../pages/EN/Pontos/25';
import { PracaIndepen } from '../pages/EN/Pontos/3';
import { PracaJoao } from '../pages/EN/Pontos/4';
import { PracaPedra } from '../pages/EN/Pontos/5';
import { Cemiterio } from '../pages/EN/Pontos/6';
import { Gramame } from '../pages/EN/Pontos/7';
import { Cacimba } from '../pages/EN/Pontos/8';
import { Balaustrada } from '../pages/EN/Pontos/9';


function ENRouterPontos(){
    return(
        <>
        <Route path="/local/en/1" component={FonteTambia} />
        <Route path="/local/en/2" component={BicaFeia} />
        <Route path="/local/en/3" component={PracaIndepen} />
        <Route path="/local/en/4" component={PracaJoao} />
        <Route path="/local/en/5" component={PracaPedra} />
        <Route path="/local/en/6" component={Cemiterio} />
        <Route path="/local/en/7" component={Gramame} />
        <Route path="/local/en/8" component={Cacimba} />
        <Route path="/local/en/9" component={Balaustrada} />
        <Route path="/local/en/10" component={Beberibe} />
        <Route path="/local/en/11" component={Gruta} />
        <Route path="/local/en/12" component={ArenizaBarreira} />
        <Route path="/local/en/13" component={Fossil} />
        <Route path="/local/en/14" component={Dolina} />
        <Route path="/local/en/15" component={Misericordia} />
        <Route path="/local/en/16" component={PracaRioBranco} />
        <Route path="/local/en/17" component={PracaDomAdauto} />
        <Route path="/local/en/18" component={Academia} />
        <Route path="/local/en/19" component={SaoFrancisco} />
        <Route path="/local/en/20" component={Antonio} />
        <Route path="/local/en/21" component={PracaDomUlrico} />
        <Route path="/local/en/22" component={Mosteiro} />
        <Route path="/local/en/23" component={Milagres} />
        <Route path="/local/en/24" component={FalhaSanhaua} />
        <Route path="/local/en/25" component={CasaRosa} />
        </>
    )
}

export default ENRouterPontos
