/*
const myAge = 67;

if (myAge >= 60) {
    console.log('PUEDE JUBILARSE');
}else if (myAge >=18) {
    console.log('USTED ES MAYOR DE EDAD');
}else {
    console.log('NO, USTED ES MENOR DE EDAD');
};
*/


//OPERADOR CONDICIONAL TERNARIO 
// FORMA ABREVIADA PARA REALIZAR UNA EVALUACIÓN CONDICIONAL
// TIENE QUE TENER 2 ALTERNATIVAS TRUE-FALSE. 

//const myAge = 39;
//myAge >= 18 ? 'Soy mayor de edad' : 'Soy menor de edad';

//const myAgeStatus = myAge >= 18 ? 'Soy mayor' : 'Soy menor';
//console.log(myAgeStatus);


//FUNCIONES
/*
function calculaAgeSegment() {
    const myAge = 9;
    
    if (myAge >= 60) {
        console.log('PUEDE JUBILARSE');
    }else if (myAge >=18) {
        console.log('USTED ES MAYOR DE EDAD');
    }else {
        console.log('NO, USTED ES MENOR DE EDAD');
    };
}

calculaAgeSegment();
*/

//ARGUMENTOS
const retirementDate = 65;

function calculateAgeSegment(age, retirementDate) {
    if (age >= retirementDate) {
        console.log('PUEDE JUBILARSE');
    }else if (age >=18) {
        console.log('USTED ES MAYOR DE EDAD');
    }else {
        console.log('NO, USTED ES MENOR DE EDAD');
    };
}

calculateAgeSegment(19,65);



//EJEMPLO CON SWITCH
//***en switch no es recomendable declarar variables, 
//para eso se ocupa con IF-ELSE* */
//1 admin
//2 user
//3 invitado

const role = 1;
switch (role) {
    case 1:
        console.log("es admin");
        break;
    case 2:
        console.log("es user");
        break;
    default:
        console.log("es invitado");
        break;
}


function test(argumento = 11, argumento2 =12, argumento3=13) {
    console.log(argumento, argumento2, argumento3);
}

test();
test(null,100);



//RETORNAR UN VALOR

function suma(arg1, arg2) {
    console.log("es " + arg1 + " es " + arg2);
    return arg1 + arg2;
}

suma(1,2);