
let URLharryCharacter = "https://hp-api.onrender.com/api/characters"
let URLharrySpells = "https://hp-api.onrender.com/api/spells"

//Sacar info de la api, de todos los personajes, devuelve 25 de ellos
async function apiHarryPotter() {
    try {
        const respuesta = await fetch(URLharryCharacter);
        const arrayPersonajesSucio = await respuesta.json();
        return arrayPersonajesSucio.splice(0, 24);
    } catch (error) {
        console.log(error)
        //alert("error")
    }
}

//Sacar info de la api todos los hechizos

async function apiHarryPotterSpells() {
    try {
        const respuesta = await fetch(URLharrySpells);
        const arrayHechizosSucio = await respuesta.json();
        return arrayHechizosSucio
    } catch (error) {
        console.log(error)
       // alert("error")
    }
}

//De los array obtenidos de la api, creare nuevos array y objetos con las propiedades que quiero
async function crearNuevoArrayPotterMasHechizos() {

    let arrayPotter = await apiHarryPotter()
    let arrayHechizos = await apiHarryPotterSpells()

    //En en objeto de Hechizos
    //quitar la propiedad id dentro del objeto
    //agregar valor aleatorio del 1 al 5 , a todos los hechizos
    
    for (let i = 0; i < arrayHechizos.length; i++) {
        const hechizo = arrayHechizos[i]; 
        hechizo.id = i
        hechizo.valor = Math.floor((Math.random() * 5) + 1)

        //agregar al hechizo avada kedabra valor unico 10
        if (hechizo.name === "Avada Kedavra") {
            hechizo.valor = 10
        }
    }

//Del array de hechizos, retorna un hechizo aleatorio
    function sacarHechizoAleatorio() {
        const aleatorio = arrayHechizos[Math.floor(Math.random() * arrayHechizos.length)]
        return aleatorio;
    }

//creamos un array nuevo de los personajes, que incluya, nombre, imagen y hechizo para cada uno
    let arrayLimpio = []
    
     for (let i = 0; i < arrayPotter.length  ; i++) { 
        let nuevoPersonaje = { id: 2 /* i */, imagen: arrayPotter[i].image, nombre: arrayPotter[i].name, hechizos: sacarHechizoAleatorio() } 
        arrayLimpio.push(nuevoPersonaje)   
    } 
    
    return arrayLimpio 
}

//exportamos la funcion que crea un array de hechizos y personajes, con propiedades como valor e id
export {crearNuevoArrayPotterMasHechizos};




