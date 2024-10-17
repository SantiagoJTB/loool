import Campeon from './Campeon.js';

const campeones = []; // Array para almacenar los campeones

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    console.log("Botón pulsado");
    document.querySelector("#button").style.visibility = "hidden";
    document.querySelector("#lista").style.visibility = "visible";
    startcampeones(); // Llamada a la función
});

// Función para cargar los campeones
const startcampeones = async () => {
    console.log("Llamada a startcampeones hecha");
    try {
        const respuesta = await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json");
        const data = await respuesta.json();
        
        // Itera sobre los campeones en data.data
        const campeonesData = data.data;
        for (const key in campeonesData) {
            if (campeonesData.hasOwnProperty(key)) {
                const campeon = new Campeon(campeonesData[key]); // Pasamos el objeto de campeón individual
                pushCampeon(campeon); // Almacena la instancia de Campeon
            }
        }

        await showCampeones(); // Mostrar campeones después de obtener los datos
    } catch (error) {
        console.error("Error al obtener campeones:", error);
    }
};

function pushCampeon(campeon) {
    campeones.push(campeon); // Almacena el campeón en el array
}

const showCampeones = () => {
    const campeonesLista = document.getElementById("lista");
    campeonesLista.innerHTML = ''; // Limpiar antes de agregar

    campeones.forEach(campeon => {
        const roles = campeon.tags.join(", "); // Unir los roles en una sola cadena
        
        const campeonCard = `
        <div class="card" onclick="toggleBlurb(this)">
            <img src="https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${campeon.image}" alt="${campeon.name}">
            <br>
            ${campeon.name}.<br>
            ${campeon.title}<br>
            <div class="roles">
                ${roles}
            </div>
            <div class="blurb" style="display: none;">
                ${campeon.blurb}
            </div>
        </div>
    `;
    
    campeonesLista.innerHTML += campeonCard;
    });
};
