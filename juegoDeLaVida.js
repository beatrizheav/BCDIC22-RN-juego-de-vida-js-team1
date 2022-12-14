// Recibir fila y columnas a través de la consola
const fila = process.argv[2]
const columnas = process.argv[3]

const myarray = []

function llenarCampos () {
  const valor = Math.round(Math.random())
  if (valor === 1) return '*'
  return '.'
}

for (let n = 0; n < fila; n++) {
  myarray[n] = []
  for (let m = 0; m < columnas; m++) {
    myarray[n][m] = llenarCampos()
  }
}

console.table(myarray)

// recorrido del array
function recorrido () {
  for (let n = 0; n < fila; n++) {
    for (let m = 0; m < columnas; m++) {
      ubicacion(n, m)
    }
  }
}

function ubicacion (n, m) {
  if (n === 0 && m === 0) {
    console.log('esquina superior izquierda')
    esquinaSupIzq(n, m)
  } else if (n === 0 && m === columnas - 1) {
    console.log('esquina superior derecha')
    esquinaSupDer(n, m)
  } else if (n === fila - 1 && m === 0) {
    console.log('esquina inferior izquierda')
    esquinaInfIzq(n, m)
  } else if (n === fila - 1 && m === columnas - 1) {
    console.log('esquina inferior derecha')
    esquinaInfDer(n, m)
  } else if (n === 0) {
    console.log('es borde superior')
    borderSup(n, m)
  } else if (n === fila - 1) {
    console.log('borde inferior')
  } else if (m === 0) {
    console.log('borde izquierdo')
  } else if (m === columnas - 1) {
    console.log('borde derecho')
  }
}

recorrido()

function esquinaSupIzq (r, c) {
  let vivas = 0
  let muertas = 0
  if (myarray[r + 1][c] === '.') {
    muertas++
  } else {
    vivas++
  }

  if (myarray[r + 1][c + 1] === '.') {
    muertas++
  } else {
    vivas++
  }

  if (myarray[r][c + 1] === '.') {
    muertas++
  } else {
    vivas++
  }

  console.log(`Vivas ${vivas}`)
  console.log(`Muertas ${muertas}`)
}

function esquinaSupDer (r, c) {
  let vivas = 0; let muertas = 0
  if (myarray[r][c - 1] === '.') {
    muertas++
  } else {
    vivas++
  }

  if (myarray[r + 1][c] === '.') {
    muertas++
  } else {
    vivas++
  }

  if (myarray[r + 1][c - 1] === '.') {
    muertas++
  } else {
    vivas++
  }

  console.log(`Vivas ${vivas}`)
  console.log(`Muertas ${muertas}`)
}

function esquinaInfIzq (r, c) {
  let vivas = 0; let muertas = 0
  if (myarray[r - 1][c] === '.') {
    muertas++
  } else {
    vivas++
  }

  if (myarray[r - 1][c + 1] === '.') {
    muertas++
  } else {
    vivas++
  }

  if (myarray[r][c + 1] === '.') {
    muertas++
  } else {
    vivas++
  }

  console.log(`Vivas ${vivas}`)
  console.log(`Muertas ${muertas}`)
}

function esquinaInfDer (r, c) {
  let vivas = 0; let muertas = 0
  if (myarray[r - 1][c] === '.') {
    muertas++
  } else {
    vivas++
  }

  if (myarray[r - 1][c - 1] === '.') {
    muertas++
  } else {
    vivas++
  }

  if (myarray[r][c - 1] === '.') {
    muertas++
  } else {
    vivas++
  }

  console.log(`Vivas ${vivas}`)
  console.log(`Muertas ${muertas}`)
}

function borderSup (r, c) {
  let vivas = 0; let muerta = 0
  // lado izquierdo
  if (myarray[r][c - 1] === '.') { muerta++ } else { vivas++ }

  // lado derecho
  if (myarray[r][c + 1] === '.') { muerta++ } else { vivas++ }

  // lado abajo
  if (myarray[r + 1][c] === '.') { muerta++ } else { vivas++ }

  // diagonal izquierda
  if (myarray[r + 1][c - 1]) { muerta++ } else { vivas++ }

  // diagonal derecha
  if (myarray[r + 1][c + 1]) { muerta++ } else { vivas++ }

  console.log(`vivass ${vivas}`)
  console.log(`muertas ${muerta}`)
}
