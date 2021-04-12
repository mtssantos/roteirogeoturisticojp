import { Route } from 'react-router-dom';
import { FonteTambia } from '../pages/Pontos/1';
import { BicaFeia } from '../pages/Pontos/2';
import { PracaIndepen } from '../pages/Pontos/3';
import { PracaJoao } from '../pages/Pontos/4';
import { PracaPedra } from '../pages/Pontos/5';


export function RouterPontos(){
    return(
        <>
        <Route path="/local/1" component={FonteTambia} />
        <Route path="/local/2" component={BicaFeia} />
        <Route path="/local/3" component={PracaIndepen} />
        <Route path="/local/4" component={PracaJoao} />
        <Route path="/local/5" component={PracaPedra} />
        </>
    )
}
