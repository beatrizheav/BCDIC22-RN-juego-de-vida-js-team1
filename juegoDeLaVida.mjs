/* eslint-disable brace-style */
// Recibir this.fila y this.columnas a través de la consola
export default class JuegoVida {
  constructor (fila, columnas) {
    this.fila = fila
    this.columnas = columnas
    this.primeraGeneracion = []
    this.siguienteGeneracion = []
  }

  llenarCampos () {
    const valor = Math.round(Math.random())
    if (valor === 1) return '*'
    return '.'
  }

  crearTablero () {
    for (let n = 0; n < this.fila; n++) {
      this.primeraGeneracion[n] = []
      this.siguienteGeneracion[n] = []
      for (let m = 0; m < this.columnas; m++) {
        this.primeraGeneracion[n][m] = this.llenarCampos()
        this.siguienteGeneracion[n][m] = this.primeraGeneracion[n][m]
      }
    }
    return this.primeraGeneracion
  }

  // let this.siguienteGeneracion = [...this.primeraGeneracion];

  // recorrido del array
  recorrido () {
    for (let n = 0; n < this.fila; n++) {
      for (let m = 0; m < this.columnas; m++) {
        this.ubicacion(n, m)
      }
    }
  }

  estadoActual (n, m) {
    if (this.primeraGeneracion[n][m] === '.') {
      return false
    } else { return true }
  }

  ubicacion (n, m) {
    if (n === 0 && m === 0) {
      this.esquinaSupIzq(n, m)
    } else if (n === 0 && m === this.columnas - 1) {
      this.esquinaSupDer(n, m)
    } else if (n === this.fila - 1 && m === 0) {
      this.esquinaInfIzq(n, m)
    } else if (n === this.fila - 1 && m === this.columnas - 1) {
      this.esquinaInfDer(n, m)
    } else if (n === 0) {
      this.borderSup(n, m)
    } else if (n === this.fila - 1) {
      this.borderInf(n, m)
    } else if (m === 0) {
      this.borderIzq(n, m)
    } else if (m === this.columnas - 1) {
      this.borderDer(n, m)
    } else {
      this.centro(n, m)
    }
  }

  creacionSiguienteGeneracion (vivas, muertas, r, c) {
    const estado = this.estadoActual(r, c)

    // Condición 1 y 2
    if ((estado === true) && (vivas < 2 || vivas > 3)) {
      this.siguienteGeneracion[r][c] = '.'
    }
    // Condición 3
    else if ((estado === true) && (vivas === 2 || vivas === 3)) {
      this.siguienteGeneracion[r][c] = '*'
    }
    // Condicion 4
    else if ((estado === false) && (vivas === 3)) {
      this.siguienteGeneracion[r][c] = '*'
    }
  }

  esquinaSupIzq (r, c) {
    let vivas = 0
    let muertas = 0
    if (this.primeraGeneracion[r + 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    if (this.primeraGeneracion[r + 1][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    if (this.primeraGeneracion[r][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)

    // console.log(`Vivas ${vivas}`);
    // console.log(`Muertas ${muertas}`);
  }

  esquinaSupDer (r, c) {
    let vivas = 0
    let muertas = 0
    if (this.primeraGeneracion[r][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    if (this.primeraGeneracion[r + 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    if (this.primeraGeneracion[r + 1][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)
    // console.log(`Vivas ${vivas}`);
    // console.log(`Muertas ${muertas}`);
  }

  esquinaInfIzq (r, c) {
    let vivas = 0
    let muertas = 0
    if (this.primeraGeneracion[r - 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    if (this.primeraGeneracion[r - 1][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    if (this.primeraGeneracion[r][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)
    // console.log(`Vivas ${vivas}`);
    // console.log(`Muertas ${muertas}`);
  }

  esquinaInfDer (r, c) {
    let vivas = 0
    let muertas = 0
    if (this.primeraGeneracion[r - 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    if (this.primeraGeneracion[r - 1][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    if (this.primeraGeneracion[r][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)
    // console.log(`Vivas ${vivas}`);
    // console.log(`Muertas ${muertas}`);
  }

  borderSup (r, c) {
    let vivas = 0
    let muertas = 0
    // lado izquierdo
    if (this.primeraGeneracion[r][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado derecho
    if (this.primeraGeneracion[r][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado abajo
    if (this.primeraGeneracion[r + 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    // diagonal izquierda
    if (this.primeraGeneracion[r + 1][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // diagonal derecha
    if (this.primeraGeneracion[r + 1][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)
    // console.log(`vivasssss ${vivas}`);
    // console.log(`muertassss ${muertas}`);
  }

  borderInf (r, c) {
    let vivas = 0
    let muertas = 0
    // lado izquierdo
    if (this.primeraGeneracion[r][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado derecho
    if (this.primeraGeneracion[r][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado arriba
    if (this.primeraGeneracion[r - 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    // diagonal izquierda
    if (this.primeraGeneracion[r - 1][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // diagonal derecha
    if (this.primeraGeneracion[r - 1][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)
    // console.log(`vivasssss ${vivas}`);
    // console.log(`muertassss ${muertas}`);
  }

  borderIzq (r, c) {
    let vivas = 0
    let muertas = 0
    // lado arriba
    if (this.primeraGeneracion[r - 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado diagonal arriba
    if (this.primeraGeneracion[r - 1][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado derecho
    if (this.primeraGeneracion[r][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // diagonal abajo
    if (this.primeraGeneracion[r + 1][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado abjo
    if (this.primeraGeneracion[r + 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)
    // console.log(`vivasssss ${vivas}`);
    // console.log(`muertassss ${muertas}`);
  }

  borderDer (r, c) {
    let vivas = 0
    let muertas = 0
    // lado arriba
    if (this.primeraGeneracion[r - 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    // diagonal izquierda arriba
    if (this.primeraGeneracion[r - 1][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado izauierdo
    if (this.primeraGeneracion[r][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // diagonal izauierdo abajo
    if (this.primeraGeneracion[r + 1][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado abjo
    if (this.primeraGeneracion[r + 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)
    // console.log(`vivasssss ${vivas}`);
    // console.log(`muertassss ${muertas}`);
  }

  centro (r, c) {
    let vivas = 0
    let muertas = 0
    // lado arriba
    if (this.primeraGeneracion[r - 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    // Diagonal arribal derecha
    if (this.primeraGeneracion[r - 1][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado derecho
    if (this.primeraGeneracion[r][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // Diagonal abajo derecho
    if (this.primeraGeneracion[r + 1][c + 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado abajo
    if (this.primeraGeneracion[r + 1][c] === '.') {
      muertas++
    } else {
      vivas++
    }

    // Diagonal abajo izquirda
    if (this.primeraGeneracion[r + 1][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // lado isquierdo
    if (this.primeraGeneracion[r][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    // Diagonal arriba izquirda
    if (this.primeraGeneracion[r - 1][c - 1] === '.') {
      muertas++
    } else {
      vivas++
    }

    this.creacionSiguienteGeneracion(vivas, muertas, r, c)
    // console.log(`vivasssss ${vivas}`);
    // console.log(`muertassss ${muertas}`);
  }

  imprimirTableros () {
    console.log('Primera Generación')
    console.table(this.primeraGeneracion)
    console.log('Segunda Generación')
    console.table(this.siguienteGeneracion)
  }
}
