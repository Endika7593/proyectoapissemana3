import crearNuevoArrayPotterMasHechizos from "./main2.js";

let arrayPotterConHechizos = await crearNuevoArrayPotterMasHechizos()

class Carta {
    constructor(id, imagen, nombre, hechizos) {
        this.id=id 
        this.imagen = imagen
        this.nombre = nombre
        this.hechizos = hechizos
    }
}

class Mazo {
    constructor() {
        this.mazo = [] 
    }
    agregar() {
        for (let i = 0; i < 5; i++) {
            const aleatorio = arrayPotterConHechizos[Math.floor(Math.random() * arrayPotterConHechizos.length)]
            let cartas = new Carta(aleatorio.id, aleatorio.imagen, aleatorio.nombre, aleatorio.hechizos)
            this.mazo.push(cartas) 
        }
    }
}


export default Mazo




