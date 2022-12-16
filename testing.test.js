/* eslint-disable no-undef */
import JuegoVida from './juegoDeLaVida'

const juego = new JuegoVida(5, 6)
const columnas = juego.columnas
const filas = juego.fila
const tablero = juego.crearTablero()

function tamanoTablero (filas, columnas, tablero) {
  const dimensionesTablero = [tablero.length, tablero[0].length]
  if (filas === dimensionesTablero[0] && columnas === dimensionesTablero[1]) {
    return true
  } else {
    // eslint-disable-next-line no-unused-expressions
    false
  }
}

test('El tablero coincide con los parametros', () => {
  const resultado = tamanoTablero(filas, columnas, tablero)
  expect(resultado).toBe(true)
})
