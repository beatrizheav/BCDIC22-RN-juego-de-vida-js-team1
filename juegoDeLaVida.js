
//Recibir largo y ancho a través de la consola
const largo = process.argv[2];
const ancho = process.argv[3];

const myarray = [];

function llenarCampos(){
    let valor = Math.round(Math.random());
    if(valor == 1)
        return '*';
    return '.' ;
}


for(let n=0; n<largo;n++){
    myarray[n]=[];
    for(let m=0; m<ancho; m++){
        myarray[n][m]=llenarCampos()
        ;
    }
}


//console.log(myarray1);
console.table(myarray)


//recorrido del array
function recorrido(){
    for(let n=0; n<largo;n++){
        for(let m=0; m<ancho; m++){
            vecinos();
        }
    }
}

function vecinos(){
    if(myarray[2][3] === "."){
            console.log('muerta')
            // return "muerta";
              }   
            console.log('viva')
            // else return "viva";
}