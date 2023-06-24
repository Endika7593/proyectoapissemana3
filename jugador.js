import { Mazo, obtenerDatos } from "./cartas.js";



class Juego {
    constructor() {
        this.jugador1 = new Mazo()
        this.jugador2 = new Mazo()
    }
}


jugar()


async function jugar() {

    let resultadoFinal = 0;
    let valorJugador1 = 0
    let valorJugador2 = 0;
    let cartaJugada1;
    let cartaJugada2;
    let valor1;
    let valor2;

    await obtenerDatos()

    let juego = new Juego
    await juego.jugador1.agregar()
    await juego.jugador1.renderizar(1)

    await juego.jugador2.agregar()
    await juego.jugador2.renderizar(2)

    //===========================================


async function play(a) {
    
    console.log(a)
}

await play()
    await echarCartaJugador1(2)
    
    await echarCartaJugador2(2)

    let ataque1 = await comparar(valorJugador1, valorJugador2)
    resultadoFinal += ataque1

    //=================================================

    await echarCartaJugador1(2)

    await echarCartaJugador2(2)

    let ataque2 = await comparar(valorJugador1, valorJugador2)
    resultadoFinal += ataque2

    //=================================================

    await echarCartaJugador1(2)

    await echarCartaJugador2(2)

    let ataque3 = await comparar(valorJugador1, valorJugador2)
    resultadoFinal += ataque3

    //=================================================

    await echarCartaJugador1(2)

    await echarCartaJugador2(2)

    let ataque4 = await comparar(valorJugador1, valorJugador2)
    resultadoFinal += ataque4

    //=================================================

    await echarCartaJugador1(2)

    await echarCartaJugador2(2)

    let ataque5 = await comparar(valorJugador1, valorJugador2)
    resultadoFinal += ataque5

    //=================================================


    alert(`se acabo el juego, el resultado final es ${resultadoFinal} para el jugador 1 y ${5 - resultadoFinal} para el jugador 2 `)


    //=================================================




    async function echarCartaJugador1(idSacar) {


        cartaJugada1 = await juego.jugador1.sacarCarta(idSacar)
        valor1 = await cartaJugada1[0].hechizos.valor

        await juego.jugador1.verMazo()
        await juego.jugador1.renderizarSacadas(1)
        await juego.jugador1.verMazoCartasSacadas()
        valorJugador1 = valor1
    }



    async function echarCartaJugador2(idSacar) {

        cartaJugada2 = await juego.jugador2.sacarCarta(idSacar)
        valor2 = await cartaJugada2[0].hechizos.valor

        await juego.jugador2.verMazo()
        await juego.jugador2.renderizarSacadas(2)
        await juego.jugador2.verMazoCartasSacadas()
        valorJugador2 = valor2
    }


    async function comparar(a, b) {

        // alert(`batalla entre ${a} y ${b}`)

        if (a >= b) {

            console.log("ganaste jugador 1")
            //alert("ganaste jugador 1")
            return 1

        } else {
            console.log("perdiste jugador 1")
            // alert("perdiste jugador 1")
            return 0
        }

    }
}






export default play;



