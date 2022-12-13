//Recibir fila y columnas a través de la consola
const fila = process.argv[2];
const columnas = process.argv[3];

const myarray = [];

function llenarCampos() {
  let valor = Math.round(Math.random());
  if (valor == 1) return "*";
  return ".";
}

for (let n = 0; n < fila; n++) {
  myarray[n] = [];
  for (let m = 0; m < columnas; m++) {
    myarray[n][m] = llenarCampos();
  }
}

//console.log(myarray1);
console.table(myarray);

//recorrido del array
function recorrido() {
  for (let n = 0; n < fila; n++) {
    for (let m = 0; m < columnas; m++) {
      vecinos(n, m);
    }
  }
}

function vecinos(n, m) {
  if (myarray[n][m] === ".") {
    console.log("muerta");
    // return "muerta";
  } else console.log("viva");
  // else return "viva";
  verificarBordes(n, m);
}

function verificarBordes(n, m) {
  if (n == 0 && m == 0) {
    console.log("esquina superior izquierda");
  } else if (n == 0 && m == columnas - 1) {
    console.log("esquina superior derecha");
  } else if (n == fila - 1 && m == 0) {
    console.log("esquina inferior izquierda");
  } else if (n == fila - 1 && m == columnas - 1) {
    console.log("esquina inferior derecha");
  } else if (n == 0) {
    console.log("es borde superior");
  } else if (n == fila - 1) {
    console.log("borde inferior");
  } else if (m == 0) {
    console.log("borde izquierdo");
  } else if (m == columnas - 1) {
    console.log("borde derecho");
  }
}
//aa
recorrido();
