import crearNuevoArrayPotterMasHechizos from "./main.js";

let arrayPotterConHechizos = await crearNuevoArrayPotterMasHechizos();

class Carta {
  constructor(imagen, nombre, hechizos) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.hechizos = hechizos;
    this.valor = Math.floor(Math.random() * 100) + 1; // Valor aleatorio de la carta
  }
}

class Mazo {
  constructor() {
    this.mazo = [];
  }

  agregar() {
    for (let i = 0; i < 5; i++) {
      const aleatorio =
        arrayPotterConHechizos[
          Math.floor(Math.random() * arrayPotterConHechizos.length)
        ];
      let carta = new Carta(
        aleatorio.imagen,
        aleatorio.nombre,
        aleatorio.hechizos
      );
      this.mazo.push(carta);
    }
  }

  sacarCarta() {
    return this.mazo.shift(); // Retorna y remueve la primera carta del mazo
  }

  robarCarta(carta) {
    this.mazo.push(carta); // Agrega una carta al final del mazo
  }
}

let mazoJugador1 = new Mazo();
mazoJugador1.agregar();

let mazoJugador2 = new Mazo();
mazoJugador2.agregar();

console.log("Mazo Jugador 1:", mazoJugador1.mazo);
console.log("Mazo Jugador 2:", mazoJugador2.mazo);

// Juego por turnos
while (mazoJugador1.mazo.length > 0 && mazoJugador2.mazo.length > 0) {
  const cartaJugador1 = mazoJugador1.sacarCarta();
  const cartaJugador2 = mazoJugador2.sacarCarta();

  console.log("Carta Jugador 1:", cartaJugador1);
  console.log("Carta Jugador 2:", cartaJugador2);

  if (cartaJugador1.valor > cartaJugador2.valor) {
    console.log("¡Jugador 1 gana!");
  } else if (cartaJugador1.valor < cartaJugador2.valor) {
    console.log("¡Jugador 2 gana!");
  } else {
    console.log("No hay heridos");
  }

  mazoJugador1.robarCarta(cartaJugador2);
  mazoJugador2.robarCarta(cartaJugador1);
}

console.log("Fin del duelo");
 
//----------------------Pantalla------------------------//

// Obtén una referencia al contenedor de cartas
const cartasContainer = document.getElementById("cartas-container");

// Crea elementos HTML para cada carta y muestra la información
mazoJugador1.mazo.forEach(carta => {
  const cartaElement = document.createElement("div");
  cartaElement.classList.add("cartas");

  const imagenElement = document.createElement("img");
  imagenElement.src = carta.imagen;
  cartaElement.appendChild(imagenElement);

  const nombreElement = document.createElement("h2");
  nombreElement.textContent = carta.nombre;
  cartaElement.appendChild(nombreElement);

  const hechizosElement = document.createElement("ul");
  carta.hechizos.forEach(hechizo => {
    const hechizoItem = document.createElement("li");
    hechizoItem.textContent = `${hechizo.name} (Valor: ${hechizo.valor})`;
    hechizosElement.appendChild(hechizoItem);
  });
  cartaElement.appendChild(hechizosElement);

  cartasContainer.appendChild(cartaElement);
});
