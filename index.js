import JuegoVida from './juegoDeLaVida.js'
//const juego=require

const fila = process.argv[2];
const columnas = process.argv[3];

let juego= new JuegoVida(fila,columnas)

juego.crearTablero()
juego.recorrido()
juego.imprimirTableros()