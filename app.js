let clave;

let intentos = 0;

const MAX_INTENTOS = 5;

do{
    clave = prompt('ingresa la contraseña');
    intentos ++;

    if(clave === 'segundaentrega'){
        console.log("contraseña correcta")
        break;
    }

    if(intentos >= MAX_INTENTOS){
        console.log("Tu limite de intentos para ingresar se acabó, porfavor intente de nuevo mas tarde.")
        break;
    }
 
}while(true);

/*
const NUM1 = parseFloat(prompt("ingrese un monto en pesos argentinos"));
const CONVERSION = prompt("ingrese la moneda que quiera convertir (Dolar Euro Real Uruguayo Chileno)")
let resultado;

switch(CONVERSION){
    case "Dolar":
        resultado = NUM1 * 1220;
        break;
    case "Euro":
        resultado = NUM1 * 1328.76;
        break;
    case "Real":
        resultado = NUM1 * 204.75;
        break; 
    case "Uruguayo":
        resultado = NUM1 * 29.59; 
        break;
    case "Chileno":
           resultado = NUM1 * 1.29; 
        break;
    default:
        alert("no estas ingresando una operacion valida")
    
}
alert("resultado es: " + resultado);
*/


const NUM1 = parseFloat(prompt("ingrese un monto en pesos argentinos"));
const CONVERSION = prompt("ingrese la moneda que quiera convertir (Dolar Euro Real Uruguayo Chileno)")
let d = 1220
let e = 1328.76
let r = 204.75
let u = 29.59
let c = 1.29

function conversor(NUM1,d, operacion){
    return operacion(NUM1, d)
}

function Dolar (a){
    return a * d;
}

function Euro (a){
    return a * e;
}

function Real (a){
    return a * r;
}

function Uruguayo (a){
    return a * u;
}

function Chileno (a){
    return a * c;
}

console.log(conversor(NUM1,d, Dolar))

/*
console.log(conversor(NUM1,Dolar))
console.log(conversor(NUM1,Euro))
console.log(conversor(NUM1,Real))
console.log(conversor(NUM1,Uruguayo))
console.log(conversor(NUM1,Chileno))
*/
