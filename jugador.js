//importamos las clase Mazo y la funcion obtenerDatos
import { Mazo, obtenerDatos } from "./cartas.js";


//creamos la clase Juego con 2 nuevos jugadores
class Juego {
    constructor() {
        this.jugador1 = new Mazo()
        this.jugador2 = new Mazo()
    }
}

//ejecutamos la funcion que hacer correr el juego
jugar()


//funcion que hace correr el juego
async function jugar() {

    //lista de variable que se usan en el juego
    let resultadoFinal = 0;
    let valorJugador1 = 0
    let valorJugador2 = 0;
    let cartaJugada1;
    let cartaJugada2;
    let valor1;
    let valor2;
    let nombre1;
    let nombre2;
    let puntoJugador1 = 0;
    let puntoJugador2 = 0;

    //esperamos tatos del array de cartas
    await obtenerDatos()

    //creamos un nuevo juego
    let juego = new Juego

    //creamos el jugador 1, agregamos cartas y las renderizamos para mostrar en pantalla
    await juego.jugador1.agregar()
    await juego.jugador1.renderizar(1)

    //creamos el jugador 2, agregamos cartas y las renderizamos para mostrar en pantalla
    await juego.jugador2.agregar()
    await juego.jugador2.renderizar(2)

    //alerta que indica que comenzo el juego
    alert("Comienza el juego")

    //===========================================


    //ataque 1, ya que en el paso anterior creamos un jugador1 y jugador2, agregamos cartas a los mazos y renderizamos las cartas 
    
    //ahora ejecutamos la funcion  con la cual sacamos a jugar una carta de cada jugador, pasamos el argumento numero 2 que significa que queremos sacar la carta con id numero 2, 

    //en esta parte deberia estar la funcionalidad de poder elegir manualmente que id enviar como parametro ejemplo desde un prompt(), pero al intentarlo me genera algunos errores, esta seria la forma facil pensada, probe varias formas pero ninguna funciono. por eso fijo envio el parametro 2 como id de carta a sacar
    //    await echarCartaJugador1(prompt())
 
    await echarCartaJugador1(2)

    await echarCartaJugador2(2)


    //ejecuta la funciona comparar y la guarda en una variable, el resultado de la comparacion, en este caso 1 si ganas y 0 si pierdes
    let ataque1 = await comparar(valorJugador1, valorJugador2, nombre1, nombre2)

    //resultados final toma esa variable y lo suma asi misma para determinar el resultado final
    resultadoFinal += ataque1
    //tambien actualiza la variable del puntaje del jugador para el score, pude haber usado esa variable para los ataques pero ya lo habia echo asi
    puntoJugador1 = + puntoJugador1
    //muestra el resultado
    await showScore()


    //estos pasos se repiten por cada turno, en este caso pusimo 5 turnos por juego
    //=================================================

    await echarCartaJugador1(2)

    await echarCartaJugador2(2)

    let ataque2 = await comparar(valorJugador1, valorJugador2, nombre1, nombre2)
    resultadoFinal += ataque2
    await showScore()

    //=================================================

    await echarCartaJugador1(2)

    await echarCartaJugador2(2)

    let ataque3 = await comparar(valorJugador1, valorJugador2, nombre1, nombre2)
    resultadoFinal += ataque3
    await showScore()

    //=================================================

    await echarCartaJugador1(2)

    await echarCartaJugador2(2)

    let ataque4 = await comparar(valorJugador1, valorJugador2, nombre1, nombre2)
    resultadoFinal += ataque4
    await showScore()

    //=================================================

    await echarCartaJugador1(2)

    await echarCartaJugador2(2)

    let ataque5 = await comparar(valorJugador1, valorJugador2, nombre1, nombre2)
    resultadoFinal += ataque5

    await showScore()

    //=================================================


    // al termina el juego espero un corto tiempo y luego muestra el resultado final del juego
    setTimeout(() => {
        alert(`se acabo el juego, el resultado final es ${resultadoFinal} para el jugador 1 y ${5 - resultadoFinal} para el jugador 2 `)

    }, 1000);

    //=================================================

//funcion echar carta permite hechar una carta del tablero de juego, recibe como parametro un numero que sera la id de la carta que se quiera sacar.
// esta fuccion si se usa con promt para introducir la carta a sacar manualmente genera fallas
    async function echarCartaJugador1(idSacar) {

        //ejecuta la funcion sacar carta y cuarda en variable
        cartaJugada1 = await juego.jugador1.sacarCarta(idSacar)
        //juada en variable el valor de la carga sacada
        valor1 = await cartaJugada1[0].hechizos.valor
        //guarda en variable el nombre de la carta sacada 
        nombre1 = await cartaJugada1[0].nombre

        //busca el elemento con id Jugador1 y pinta la carta
        let tablero = document.getElementById("jugador1")
        tablero.innerHTML = `<div class="cartas2">

        <img src="${cartaJugada1[0].imagen}" alt="">   
        <h3>${cartaJugada1[0].nombre}</h3>  
        <h4>"${cartaJugada1[0].hechizos.name}</h4>
        <h1>Poder ${cartaJugada1[0].hechizos.valor}</h1> 
        </div>`

        //renderiza el array con cartas sacadas 
        await juego.jugador1.renderizarSacadas(1)
        //actualiza el valor de la carta sacada para la comparacion
        valorJugador1 = valor1
    }


    //misma explicacion de arriba pero con el jugador 2
    async function echarCartaJugador2(idSacar) {

        cartaJugada2 = await juego.jugador2.sacarCarta(idSacar)
        valor2 = await cartaJugada2[0].hechizos.valor
        nombre2 = await cartaJugada2[0].nombre

        let tablero = document.getElementById("jugador2")
        tablero.innerHTML = `<div class="cartas2">

        <img src="${cartaJugada2[0].imagen}" alt="">   
        <h3>${cartaJugada2[0].nombre}</h3>  
        <h4>"${cartaJugada2[0].hechizos.name}</h4>
        <h1>Poder ${cartaJugada2[0].hechizos.valor}</h1> 
        </div>`

        await juego.jugador2.renderizarSacadas(2)
        await juego.jugador2.verMazoCartasSacadas()
        valorJugador2 = valor2
    }


    //funcion comparas que recibe los parametro de los valores de las cartas y su nombre
    async function comparar(valorJugador1, valorJugador2, nombre1, nombre2) {

        //muestra en pantalla el turno con el nombre y valor de cada jugador
        alert(`batalla entre ${nombre1} de poder ${valorJugador1} contra ${nombre2} de poder ${valorJugador2}`)

        //compara los valor y si el valor de la carta del jugador 1 es mayor o igual que el jugador 2 muestra en pantalla la victoria y suma 1 punto al puntaje del jugador 1, de lo contrario igual para el jugador2
        if (valorJugador1 >= valorJugador2) {

            puntoJugador1 += 1
            alert("ganaste jugador 1")
            return 1

        } else {
            puntoJugador2 = puntoJugador2 + 1
            alert("perdiste jugador 1")
            return 0
        }
    }


    //funcion que muestra elscor actualizado, usando las variables del puntaje
    async function showScore() {

        let score = document.getElementById("cuadro-score")
        score.innerHTML = `<h1>${puntoJugador1} a ${puntoJugador2} </h1> `
    }
}









