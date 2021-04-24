import { Route } from 'react-router-dom';
import { FonteTambia } from '../pages/Pontos/1';
import { Beberibe } from '../pages/Pontos/10';
import { Gruta } from '../pages/Pontos/11';
import { ArenizaBarreira } from '../pages/Pontos/12';
import { Fossil } from '../pages/Pontos/13';
import { Dolina } from '../pages/Pontos/14';
import { Misericordia } from '../pages/Pontos/15';
import { PracaRioBranco } from '../pages/Pontos/16';
import { PracaDomAdauto } from '../pages/Pontos/17';
import { Academia } from '../pages/Pontos/18';
import { SaoFrancisco } from '../pages/Pontos/19';
import { BicaFeia } from '../pages/Pontos/2';
import { Antonio } from '../pages/Pontos/20';
import { PracaDomUlrico } from '../pages/Pontos/21';
import { Mosteiro } from '../pages/Pontos/22';
import { Milagres } from '../pages/Pontos/23';
import { FalhaSanhaua } from '../pages/Pontos/24';
import { CasaRosa } from '../pages/Pontos/25';
import { PracaIndepen } from '../pages/Pontos/3';
import { PracaJoao } from '../pages/Pontos/4';
import { PracaPedra } from '../pages/Pontos/5';
import { Cemiterio } from '../pages/Pontos/6';
import { Gramame } from '../pages/Pontos/7';
import { Cacimba } from '../pages/Pontos/8';
import { Balaustrada } from '../pages/Pontos/9';


export function RouterPontos(){
    return(
        <>
        <Route path="/local/1" component={FonteTambia} />
        <Route path="/local/2" component={BicaFeia} />
        <Route path="/local/3" component={PracaIndepen} />
        <Route path="/local/4" component={PracaJoao} />
        <Route path="/local/5" component={PracaPedra} />
        <Route path="/local/6" component={Cemiterio} />
        <Route path="/local/7" component={Gramame} />
        <Route path="/local/8" component={Cacimba} />
        <Route path="/local/9" component={Balaustrada} />
        <Route path="/local/10" component={Beberibe} />
        <Route path="/local/11" component={Gruta} />
        <Route path="/local/12" component={ArenizaBarreira} />
        <Route path="/local/13" component={Fossil} />
        <Route path="/local/14" component={Dolina} />
        <Route path="/local/15" component={Misericordia} />
        <Route path="/local/16" component={PracaRioBranco} />
        <Route path="/local/17" component={PracaDomAdauto} />
        <Route path="/local/18" component={Academia} />
        <Route path="/local/19" component={SaoFrancisco} />
        <Route path="/local/20" component={Antonio} />
        <Route path="/local/21" component={PracaDomUlrico} />
        <Route path="/local/22" component={Mosteiro} />
        <Route path="/local/23" component={Milagres} />
        <Route path="/local/24" component={FalhaSanhaua} />
        <Route path="/local/25" component={CasaRosa} />
        </>
    )
}
