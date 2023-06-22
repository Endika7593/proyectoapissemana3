import Mazo from "./cartas.js";

class Jugador {
    constructor() {
        this.mazo = new Mazo()
    }

    agregarCarta() {
        this.mazo.agregar();
    }

    verCartas() {
        console.log(this.mazo.mazo)
    }

     sacarCarta(idCarta) {


        for (let i = 0; i < this.mazo.mazo.length; i++) {
            const element = this.mazo.mazo[i];
            console.log(element)


            
            
        }





  /*       const indiceCarta = this.mazo.mazo.findIndex((carta) => carta.id === idCarta);

        if (indiceCarta !== -1) {

            this.mazo.mazo.splice(indiceCarta, 1);

            console.log(`Se eliminó la carta con ID ${idCarta}`);
            console.log(this.mazo.mazo[indiceCarta])

   
        } else {
            console.log(`No se encontró ninguna carta con ID ${idCarta}`);
        }
     
    }  */

  /*   sacarCarta(indiceCarta) {
        if (indiceCarta >= 0 && indiceCarta < this.mazo.mazo.length) {
          this.mazo.mazo.splice(indiceCarta, 1);
          console.log(`Se eliminó la carta en el índice ${indiceCarta}`);
        } else {
          console.log(`No se encontró ninguna carta en el índice ${indiceCarta}`);
        }

    } */
     }
}

let jugador1 = new Jugador()
jugador1.agregarCarta()
jugador1.verCartas()

console.log("======================================")




jugador1.sacarCarta(4);



jugador1.verCartas();


