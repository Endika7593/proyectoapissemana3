
let URLharryCharacter = "https://hp-api.onrender.com/api/characters";
let URLharrySpells = "https://hp-api.onrender.com/api/spells";

//sacar info de la api, de todos los personajes, devuelve 25 de ellos

async function apiHarryPotter() {
  try {
    const respuesta = await fetch(URLharryCharacter);
    const arrayPersonajesSucio = await respuesta.json();
    return arrayPersonajesSucio.splice(0, 24);
  } catch (error) {
    console.log(error);
    alert("error")
  }
  }


  //sacar info de la api de todos los hechizos

  async function apiHarryPotterSperlls() {
    try {
      const respuesta = await fetch(URLharrySpells);
      const arrayHechizosSucio = await respuesta.json();
      return arrayHechizosSucio
    } catch (error) {
      
      console.log(error)
      alert("error")
    }
    }
  

//de los arrays obtenidos de la api, creamos nuevos array y objetos

async function crearNuevoArrayPotterMasHechizos() {
  let arrayPotter = await apiHarryPotter()
  let arrayHechizos = await apiHarryPotterSperlls()

  //en el objeto de Hechizos
  //quitar la propiedad id dentro del objeto
  //agregar valor aleatorio del 1 al 5, a todos los hechizos

  for (const hechizo of arrayHechizos) {
    delete hechizo.id
    hechizo.valor = Math.floor((Math.random() * 5) + 1)

    //agregamos al Avada Kedavra valor único de 10

    if (hechizo.name === "Avada Kedavra") {
      hechizo.valor = 10

    }
  }

  //del array de hechizos retorna un hechizo aleatorio

  function sacarHecizoAleatorio() {
    const aleatorio = arrayHechizos[Math.floor(Math.random() * arrayHechizos.length)]
    return aleatorio;
  }

  //creamos un array nuevo de los personajes que incluya nombre, imagen y hechizos par cada uno

  let arrayLimpio = []
  for (const personaje of arrayPotter) {
    let nuevoPersonaje = { imagen: personaje.image, nombre: personaje.name, hechizos: [sacarHecizoAleatorio(), sacarHecizoAleatorio(), sacarHecizoAleatorio(), sacarHecizoAleatorio(), sacarHecizoAleatorio()]}
    arrayLimpio.push(nuevoPersonaje)
    }

  return arrayLimpio;
  }

  export default crearNuevoArrayPotterMasHechizos;

  