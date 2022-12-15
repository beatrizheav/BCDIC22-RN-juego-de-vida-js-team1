import JuegoVida from './juegoDeLaVida.js'
import testing from './testing.js'

let juego = new JuegoVida(5,5);
let columnas = juego.columnas;
let fila = juego.fila;

let tablero = juego.crearTablero();

test('La tabla coincide con los parametros', () => {
const resultado = testing.tamañoTablero(tablero)
expect(resultado).toBe();

});