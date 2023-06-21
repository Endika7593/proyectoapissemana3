
let cuadroPrincipal = document.getElementById("cuadro-principal")

let URLharryCharacter = "https://hp-api.onrender.com/api/characters"
let URLharrySpells = "https://hp-api.onrender.com/api/spells"


async function apiHarryPotter() {
    try {
        const respuesta = await fetch(URLharryCharacter);
        const arrayPersonajesSucio = await respuesta.json();
        return arrayPersonajesSucio.splice(0, 24);
    } catch (error) {
        console.log(error)
    }
}
 
async function apiHarryPotterSpells() {
    try {
        const respuesta = await fetch(URLharrySpells);
        const arrayHechizosSucio = await respuesta.json();
        return arrayHechizosSucio;
    } catch (error) {
        console.log(error)
    }
}


async function hechizoAleatorio() {
    let arrayHechizos = await apiHarryPotterSpells()

    for (let i = 0; i < arrayHechizos.length; i++) {

        let j = Math.floor(Math.random() * (i))

        let temp = arrayHechizos[i];
        arrayHechizos[i] = arrayHechizos[j];
        arrayHechizos[j] = temp;
    }

    return arrayHechizos.slice(0, 3)
}





/*


let cuadroPrincipal = document.getElementById("cuadro-principal")

let URLharryCharacter = "https://hp-api.onrender.com/api/characters"

async function apiHarryPotter() {
    try {
        const respuesta = await fetch(URLharryCharacter);
        const jsonharryCharacter = await respuesta.json();
        return jsonharryCharacter;
    } catch (error) {
        console.log(error)
    }
}



async function apiHarryPotterHechizos() {

    try {
        const respuesta = await fetch("https://hp-api.onrender.com/api/spells        ")
        const jsonharryHechizos = await respuesta.json()
        return jsonharryHechizos
    } catch (error) {
        console.log(error)
    }
}


async function mostrarHechizos() {
    let datosExtraidosHechizos = await apiHarryPotterHechizos()


    for (const hechizo of datosExtraidosHechizos) {
        let div = document.createElement("div")
        div.innerHTML = ` <div class="cartas">
           <h3>${hechizo.name}</h3>  
   <p>${hechizo.description}</p> 
   </div>`
        cuadroPrincipal.appendChild(div);
    }
}


apiHarryPotter()



apiHarryPotterHechizos()
// mostrarHechizos()
 

unionDeArrays()


async function unionDeArrays() {
    let arrayHechizos = await apiHarryPotterHechizos()
    // console.log(arrayHechizos)

    let arrayPersonajes = await apiHarryPotter()
    //console.log(arrayPersonajes)


    async function hechizoAleatorio() {

        for (let i = 0; i < arrayHechizos.length; i++) {

            let j = Math.floor(Math.random() * (i))

            let temp = arrayHechizos[i];
            arrayHechizos[i] = arrayHechizos[j];
            arrayHechizos[j] = temp;
        }
        return arrayHechizos
    }


    asignarhechizo()

    async function asignarhechizo() {

        let hechizoCarta = await hechizoAleatorio()

        let cartaAleatoria = hechizoCarta.slice(0, 3)
        
        arrayPersonajes.splice(0, 24).forEach(e => { 
            
            console.log(e)  
            e.hechizo = cartaAleatoria




            let div = document.createElement("div")
            div.innerHTML = ` <div class="cartas">
<img src="${e.image}" alt="">
<h3>${e.name}</h3> 
<p>${e.hechizo.name}</p>  
</div>`
            cuadroPrincipal.appendChild(div); 

        });


    }

}


*/