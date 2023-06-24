import {crearNuevoArrayPotterMasHechizos} from "./main2.js";
import play from "./jugador.js";


 


export async function obtenerDatos() {
    let arrayPotterConHechizos = await crearNuevoArrayPotterMasHechizos()
    return arrayPotterConHechizos
}


class Carta {
    constructor(id, imagen, nombre, hechizos) {
        this.id = id
        this.imagen = imagen
        this.nombre = nombre
        this.hechizos = hechizos
    }
}

export class Mazo {
    constructor() {
        this.mazo = []
        this.mazoParaRender = []
        this.mazoSacadas = []
    }
    async agregar() {
        let arrayPotterConHechizos = await obtenerDatos()

        for (let i = 0; i < 5; i++) {
            const aleatorio = arrayPotterConHechizos[Math.floor(Math.random() * arrayPotterConHechizos.length)]
            let cartas = new Carta(aleatorio.id, aleatorio.imagen, aleatorio.nombre, aleatorio.hechizos)
            this.mazo.push(cartas)
        }

        let mazoAntesDeSacar = [...this.mazo]

        console.log(mazoAntesDeSacar)
        console.log("Mazo del Nuevo Jugador")
        console.log("=========================")

        this.mazoParaRender = mazoAntesDeSacar

    }


    async renderizar(jugador) {

        let cuadroPrincipal = document.getElementById(`cuadro-principal${jugador}`)
        this.mazoParaRender.forEach(e => {
            let div = document.createElement("div")
            div.innerHTML = ` <div class="cartas">
    
            <img src="${e.imagen}" alt="">   
    <h3>${e.nombre}</h3>  
<h4>"${e.hechizos.name}</h4>
<a href="javascript:play(${e.id})">sacar</a>
<h1>${e.hechizos.valor}</h1> 
</div>
`
            cuadroPrincipal.appendChild(div);
        });

    }



    async renderizarSacadas(jugador) {

        let cuadroPrincipal = document.getElementById(`cuadro-principal${jugador}-sacadas`)

        cuadroPrincipal.innerHTML = ""

        this.mazo.forEach(e => {
            let div = document.createElement("div")
            div.innerHTML = ` <div class="cartas">
    
            <img src="${e.imagen}" alt="">   
    <h3>${e.nombre}</h3>  
<h4>"${e.hechizos.name}</h4>
<h1>${e.hechizos.valor}</h1> 
</div>  `
            cuadroPrincipal.appendChild(div);
        });

    }

    async sacarCarta(idCarta) {

        await obtenerDatos()

        let indiceCarta = this.mazo.findIndex((carta) => carta.id === idCarta);

        if (indiceCarta !== -1) {

            let cartaSacada = this.mazo.splice(indiceCarta, 1)
            console.log(`---------------------`);
            console.log(cartaSacada[0])

            console.log(`Se saco la carta con ID ${cartaSacada[0].id}`);
            console.log(`El valor de la carta sacada es ${cartaSacada[0].hechizos.valor}`);
            console.log(`---------------------`);
            this.mazoSacadas.push(cartaSacada)

            return cartaSacada

        } else {
            console.log(`No se encontró ninguna carta con ID ${idCarta}`);
        }
    }

    async verMazo() {
        await obtenerDatos()
        console.log("=========================")
        console.log("mazo despues de sacar")
        console.log(this.mazo)
    }

    async verMazoCartasSacadas() {
        await obtenerDatos()
        console.log("Mazo Cartas ya usadas")
        console.log(this.mazoSacadas[0])
        console.log("=========================")
    }

}
