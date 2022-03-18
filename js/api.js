import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarAPI() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        spinner();
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.lyrics) {
                    const { lyrics } = data;
    
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista} `
                } else{
                    UI.divMensaje.textContent = 'Error... No se encontro la cancion, prueba con otra busqueda';
                    UI.divMensaje.classList.add('error');
    
                    setTimeout(() => {
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error');
                        limpiarHTML();
                    }, 3000);
                }
            })
    }
}

function spinner(){
    limpiarHTML();
    
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');
    divSpinner.innerHTML = `
        <div class="cube1"></div>
        <div class="cube2"></div>
    `;
    UI.divResultado.appendChild(divSpinner);
}

export function limpiarHTML(){
    while(UI.divResultado.firstChild){
        UI.divResultado.removeChild(UI.divResultado.firstChild);
    }
}

export default API;