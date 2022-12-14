// Recibir fila y columnas a través de la consola
const fila = process.argv[2];
const columnas = process.argv[3];

const primeraGeneracion = [];
const siguienteGeneracion = [];

for (let n = 0; n < fila; n++) {
  primeraGeneracion[n] = [];
  siguienteGeneracion[n] = [];
  for (let m = 0; m < columnas; m++) {
    primeraGeneracion[n][m] = llenarCampos();
    siguienteGeneracion[n][m] = primeraGeneracion[n][m];
  }
}

function llenarCampos() {
  const valor = Math.round(Math.random());
  if (valor === 1) return "*";
  return ".";
}

// let siguienteGeneracion = [...primeraGeneracion];

// recorrido del array
function recorrido() {
  for (let n = 0; n < fila; n++) {
    for (let m = 0; m < columnas; m++) {
      ubicacion(n, m);
    }
  }
}

function estadoActual(n,m){
  if(primeraGeneracion[n][m] === '.'){
    return false
  }else { return true}
}

function ubicacion(n, m) {
  if (n === 0 && m === 0) {
    esquinaSupIzq(n, m);
  } else if (n === 0 && m === columnas - 1) {
    esquinaSupDer(n, m);
  } else if (n === fila - 1 && m === 0) {
    esquinaInfIzq(n, m);
  } else if (n === fila - 1 && m === columnas - 1) {
    esquinaInfDer(n, m);
  } else if (n === 0) {
    borderSup(n, m);
  } else if (n === fila - 1) {
    borderInf(n, m);
  } else if (m === 0) {
    borderIzq(n, m);
  } else if (m === columnas - 1) {
    borderDer(n, m);
  } else {
    centro(n, m);
  }
}

function creacionSiguienteGeneracion(vivas,muertas,r,c) {
  const estado = estadoActual(r,c)

  //Condición 1 y 2
  if ((estado === true) && (vivas < 2 || vivas >3)) {
    siguienteGeneracion[r][c] = '.'
  } 
  // Condición 3
  else if ((estado === true) && (vivas === 2 || vivas === 3)){
    siguienteGeneracion[r][c] = '*'
  }
  //Condicion 4
  else if ((estado === false) && (vivas === 3)){
    siguienteGeneracion[r][c] = '*'
  }
} 

recorrido();

function esquinaSupIzq(r, c) {
  let vivas = 0;
  let muertas = 0;
  if (primeraGeneracion[r + 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  if (primeraGeneracion[r + 1][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  if (primeraGeneracion[r][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);

  // console.log(`Vivas ${vivas}`);
  // console.log(`Muertas ${muertas}`);
}

function esquinaSupDer(r, c) {
  let vivas = 0;
  let muertas = 0;
  if (primeraGeneracion[r][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  if (primeraGeneracion[r + 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  if (primeraGeneracion[r + 1][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);
  // console.log(`Vivas ${vivas}`);
  // console.log(`Muertas ${muertas}`);
}

function esquinaInfIzq(r, c) {
  let vivas = 0;
  let muertas = 0;
  if (primeraGeneracion[r - 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  if (primeraGeneracion[r - 1][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  if (primeraGeneracion[r][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);
  // console.log(`Vivas ${vivas}`);
  // console.log(`Muertas ${muertas}`);
}

function esquinaInfDer(r, c) {
  let vivas = 0;
  let muertas = 0;
  if (primeraGeneracion[r - 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  if (primeraGeneracion[r - 1][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  if (primeraGeneracion[r][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);
  // console.log(`Vivas ${vivas}`);
  // console.log(`Muertas ${muertas}`);
}

function borderSup(r, c) {
  let vivas = 0;
  let muertas = 0;
  // lado izquierdo
  if (primeraGeneracion[r][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado derecho
  if (primeraGeneracion[r][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado abajo
  if (primeraGeneracion[r + 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // diagonal izquierda
  if (primeraGeneracion[r + 1][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // diagonal derecha
  if (primeraGeneracion[r + 1][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);
  // console.log(`vivasssss ${vivas}`);
  // console.log(`muertassss ${muertas}`);
}

function borderInf(r, c) {
  let vivas = 0;
  let muertas = 0;
  // lado izquierdo
  if (primeraGeneracion[r][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado derecho
  if (primeraGeneracion[r][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado arriba
  if (primeraGeneracion[r - 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // diagonal izquierda
  if (primeraGeneracion[r - 1][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // diagonal derecha
  if (primeraGeneracion[r - 1][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);
  // console.log(`vivasssss ${vivas}`);
  // console.log(`muertassss ${muertas}`);
}

function borderIzq(r, c) {
  let vivas = 0;
  let muertas = 0;
  // lado arriba
  if (primeraGeneracion[r - 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado diagonal arriba
  if (primeraGeneracion[r - 1][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado derecho
  if (primeraGeneracion[r][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // diagonal abajo
  if (primeraGeneracion[r + 1][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado abjo
  if (primeraGeneracion[r + 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);
  // console.log(`vivasssss ${vivas}`);
  // console.log(`muertassss ${muertas}`);
}

function borderDer(r, c) {
  let vivas = 0;
  let muertas = 0;
  // lado arriba
  if (primeraGeneracion[r - 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  //diagonal izquierda arriba
  if (primeraGeneracion[r - 1][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado izauierdo
  if (primeraGeneracion[r][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // diagonal izauierdo abajo
  if (primeraGeneracion[r + 1][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado abjo
  if (primeraGeneracion[r + 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);
  // console.log(`vivasssss ${vivas}`);
  // console.log(`muertassss ${muertas}`);
}

function centro(r, c) {
  let vivas = 0;
  let muertas = 0;
  // lado arriba
  if (primeraGeneracion[r - 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // Diagonal arribal derecha
  if (primeraGeneracion[r - 1][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado derecho
  if (primeraGeneracion[r][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // Diagonal abajo derecho
  if (primeraGeneracion[r + 1][c + 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado abajo
  if (primeraGeneracion[r + 1][c] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // Diagonal abajo izquirda
  if (primeraGeneracion[r + 1][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // lado isquierdo
  if (primeraGeneracion[r][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  // Diagonal arriba izquirda
  if (primeraGeneracion[r - 1][c - 1] === ".") {
    muertas++;
  } else {
    vivas++;
  }

  creacionSiguienteGeneracion(vivas,muertas,r,c);
  // console.log(`vivasssss ${vivas}`);
  // console.log(`muertassss ${muertas}`);
}

console.log('Primera Generación')
console.table(primeraGeneracion);
console.log('Segunda Generación')
console.table(siguienteGeneracion);