import * as UI from './interfaz.js';
import API from './api.js';
import { limpiarHTML } from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === '' || cancion === ''){
        // Mostrar mensaje de error
        UI.divMensaje.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');

        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
            limpiarHTML();
        }, 3000);
    }
    // Consultar API
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}