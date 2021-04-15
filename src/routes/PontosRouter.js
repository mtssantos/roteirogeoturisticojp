import { Route } from 'react-router-dom';
import { FonteTambia } from '../pages/Pontos/1';
import { Beberibe } from '../pages/Pontos/10';
import { Gruta } from '../pages/Pontos/11';
import { ArenizaBarreira } from '../pages/Pontos/12';
import { Fossil } from '../pages/Pontos/13';
import { Dolina } from '../pages/Pontos/14';
import { Misericordia } from '../pages/Pontos/15';
import { BicaFeia } from '../pages/Pontos/2';
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
        </>
    )
}
