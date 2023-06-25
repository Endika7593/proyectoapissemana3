// importamos la funcion que crea el array de personajes con hechizos desde la api
import { crearNuevoArrayPotterMasHechizos } from "./main2.js";


//ejecutamos la funcion de crear array de hechizos y personajes dentro de una funcion que se llama obtenerDatos, y la exportamos para usarla en otros lados
export async function obtenerDatos() {
    let arrayPotterConHechizos = await crearNuevoArrayPotterMasHechizos()
    return arrayPotterConHechizos
}

//creamos la clase Carta con las propiedades que queremos que incluya nuestra carta
class Carta {
    constructor(id, imagen, nombre, hechizos) {
        this.id = id
        this.imagen = imagen
        this.nombre = nombre
        this.hechizos = hechizos
    }
}

//creamos la clase mazo que tiene como finalidad varias funciones y la exportamos para usarla en otros lados
export class Mazo {
    constructor() {
        this.mazo = []
        this.mazoParaRender = []
        this.mazoSacadas = []
    }


    //la funcion agregar obtiene los datos del array de de personajes con hechizos y crea un nuevo array con una seleccion aleatoria de 5 cartas que se crean con la clase Carta.

    async agregar() {
        let arrayPotterConHechizos = await obtenerDatos()

        //iteramos el array arrayPotterConHechizos 5 veces
        for (let i = 0; i < 5; i++) {

            //por cada iteracion almacena en una variable con los valores de una carta aleatoria
            const aleatorio = arrayPotterConHechizos[Math.floor(Math.random() * arrayPotterConHechizos.length)]

            //creamos una nueva carta con los valores almacenados en la variable local
            let cartas = new Carta(aleatorio.id, aleatorio.imagen, aleatorio.nombre, aleatorio.hechizos)

            //agregamos la carta al mazo
            this.mazo.push(cartas)
        }

        //clonamos el array con las 5 cartas
        let mazoAntesDeSacar = [...this.mazo]
        this.mazoParaRender = mazoAntesDeSacar
    }


    //funcion que renderiza el array de 5 cartas, enviando como parametro el jugador
    async renderizar(jugador) {

        //buscamos en el docuento el elemnto con id cuadro pricipal del jugador 1 o 2 segun el parametro de la funcion
        let cuadroPrincipal = document.getElementById(`cuadro-principal${jugador}`)

        //por cada elemento del array de 5 cartas, renderiza cada carta en el cuadro principal
        this.mazoParaRender.forEach(e => {
            let div = document.createElement("div")
            div.innerHTML = ` <div class="cartas">
    
            <img src="${e.imagen}" alt="">   
            <h3>${e.nombre}</h3>  
            <h4>"${e.hechizos.name}"</h4>
            <h1>Poder ${e.hechizos.valor}</h1> 
            </div>`

            cuadroPrincipal.appendChild(div);
        });
    }

    //funcion que renderiza el array de las cartas sacadas por el jugador, muestra las cartas restantes
    async renderizarSacadas(jugador) {

        let cuadroPrincipal = document.getElementById(`cuadro-principal${jugador}-sacadas`)

        cuadroPrincipal.innerHTML = ""

        this.mazo.forEach(e => {
            let div = document.createElement("div")
            div.innerHTML = ` <div class="cartas">
    
            <img src="${e.imagen}" alt="">   
            <h3>${e.nombre}</h3>  
            <h4>"${e.hechizos.name}</h4>
            <h1>Poder ${e.hechizos.valor}</h1> 
            </div>  `
            cuadroPrincipal.appendChild(div);
        });
    }


    //funcion que saca una carta del mazo 
    async sacarCarta(idCarta) {
        
        //esperamos los datos de array
        await obtenerDatos()

        //en el array iteramos las cartas y sacamos la que coincida el id, con el id enviado como parametro de la funcion
        let indiceCarta = this.mazo.findIndex((carta) => carta.id === idCarta);

        //si encontramos una carta con id valido, la sacamos del mazo y la metemos a un nuevo array de cartas sacadas
        if (indiceCarta !== -1) {
            let cartaSacada = this.mazo.splice(indiceCarta, 1)
            this.mazoSacadas.push(cartaSacada)

            //la funcion retorna la carta sacada
            return cartaSacada
        }
    }


    //funcion que espera los datos del array para poder mostrar las cartas sacadas
    async verMazoCartasSacadas() {
        await obtenerDatos()
    }
}
