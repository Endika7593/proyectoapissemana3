let cuadroPrincipal = document.getElementById("cuadroPrincipal");

let URLharryCharacter =  "https://hp-api.onrender.com/api/characters";
let URLharryHechizos = "https://hp-api.onrender.com/api/spells";

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
        const respuesta = await fetch(URLharryHechizos);
        const jsonharryHechizos = await respuesta.json();
        const hechizosDeDueloDeseados = [8, 11, 26, 41, 65, 68];
        const hechizosDeDuelo = jsonharryHechizos.filter((_, index) => hechizosDeDueloDeseados.includes(index));
        const hechizosAleatorios = shuffleArray(hechizosDeDuelo).slice(0, 3);
        console.log(hechizosDeDuelo)
        return hechizosAleatorios;
    } catch (error) {
        console.log(error)
    }
    
}


async function mostrarHechizos(){
    const datosExtraidosHechizos = await apiHarryPotterHechizos();
    //console.log(datosExtraidosHechizos)

    
    datosExtraidosHechizos.forEach(hechizo => {
        let div = document.createElement("div")
        div.innerHTML = `<div class="cartas"> <h3>${hechizo.name}</h3>
        <p>""</p>
        </div>`
        
            cuadroPrincipal.appendChild(div);
    
       // console.log(hechizo.name)  
        
        });
     }



async function mostrarCartas(){
    const datosExtraidosPotter = await apiHarryPotter();

datosExtraidosPotter.splice(0, 24).forEach((personaje, index) => {
  let div = document.createElement("div");
  div.classList.add("cartas");
  div.innerHTML = `
    <img src="${personaje.image}" alt="">
    <h3>${personaje.name}</h3>
    <div class="hechizos">
      <h4>Hechizos:</h4>

        <ul>
            <li>""</li>
            <li>""</li>
            <li>""</li>
        </ul>
        
    </div>
  `;

  cuadroPrincipal.appendChild(div);
});
 }
 async function obtenerHechizosAleatorios() {
    const hechizosDeDueloDeseados = [8, 11, 26, 41, 65, 68];
    const hechizosDeDuelo = await apiHarryPotterHechizos();
    const hechizosAleatorios = [];

    for (let i = 0; i < 24; i++) {
        const hechizos = shuffleArray(hechizosDeDuelo).slice(0, 3);
        hechizosAleatorios.push(hechizos);
    }

    return hechizosAleatorios;
}

mostrarCartas();






 mostrarHechizos();

 apiHarryPotterHechizos();










    
 