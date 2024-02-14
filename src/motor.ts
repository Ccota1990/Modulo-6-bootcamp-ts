import { muestraPuntuacion, getUrl, muestraCarta, comprobarPuntuacion } from "./ui";
import {obtenerValorCarta, sumarPuntuacion} from "./modelo"

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

export const obtenerNumeroAlearorio = () => Math.floor (Math.random()*10)+1;

export const dameCarta = (numeAleatorio: number)  => {
    if (numeAleatorio >7) {
        return numeAleatorio+2       
    } else{
        return numeAleatorio
    }
};

export const pideCarta = () => {
    const numeAleatorio = obtenerNumeroAlearorio();
    const carta = dameCarta(numeAleatorio);
    const url = getUrl(carta);
    const valorCarta = obtenerValorCarta (carta);
    muestraCarta(url);
    sumarPuntuacion(valorCarta);
    muestraPuntuacion();
    comprobarPuntuacion();

};

