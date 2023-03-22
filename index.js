function sumar (a, b){
    var sumar1 = a + b;
    var sumaTotal = sumar1 
  
    return sumaTotal
}

console.log(sumar(5,3));

var sumaTotal = sumar(5,3)


function restar (a, b){
    var restar1 = a - b;
    var restaTotal = restar1;

    return restaTotal;

}

console.log(restar(sumaTotal, 3));

var restaTotal = restar(sumaTotal, 3)

function multiplicar (a,b){
    var multiplicar1 = a * b;
    var multiplicacionTotal = multiplicar1;

    return multiplicacionTotal;
}

console.log(multiplicar(sumaTotal, restaTotal))

var multiplicacionTotal = multiplicar(sumaTotal, restaTotal)


function operaciones (a, b, c){
    var operacionesT = a + b + c;
    var operacionesTotal = operacionesT;

    return operacionesTotal
}

console.log(operaciones(sumaTotal, restaTotal, multiplicacionTotal));

function positiva (operaciones){

    var operaciones = operaciones(sumaTotal, restaTotal, multiplicacionTotal);

    if (operaciones > 50){
        console.log('Pago')
    }    

    for (let i = 0; i <=10; i++){
        console.log('let i:', i)
    } 

}

console.log(positiva(operaciones))






    