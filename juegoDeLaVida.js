//Recibir largo y ancho a través de la consola
const largo = process.argv[2];
const ancho = process.argv[3];

const myarray1 = [];

for(let n=0; n<largo;n++){
    myarray1[n]=[];
    for(let m=0; m<ancho; m++){
        myarray1[n][m]='-';
    }
}

console.log(myarray1);


// //Crear la matriz con el largo que le asignamos
// var nuevaMatriz = new Array(largo)

//Imprimir la matriz para comprobar
//console.log(myarray1);


// [[(),(),()] [(),(),()]] -- Salida esperada
// [ [3], [3] ] -- Salida real
function numero(){
    return Math.ra
}
