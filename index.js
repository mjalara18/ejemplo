function sumar (a, b){
    var sumar1 = a + b;
    var sumaTotal = sumar1  // esto es innecesario a menos que vayas a querer guardar el valor de restar1 o utilizarlo en otro momento de la ejecución
  
    return sumar1
}

//console.log(sumar(5,3)); // aunque resumas la impresión, estás llamando dos veces al metodo, cuando podrías hacerlo una vez como en la linea 10 y luego el console log, 
// eso consume recursos

var sumaTotal = sumar(5,3); 
console.log(sumaTotal);

function restar (a, b){
    var restar1 = a - b;
    var restaTotal = restar1; // esto es innecesario a menos que vayas a querer guardar el valor de restar1 o utilizarlo en otro momento de la ejecución

    return restar1;

}

//console.log(restar(sumaTotal, 3)); //aunque resumas la impresión, estás llamando dos veces al metodo, cuando podrías hacerlo una vez como en la linea 25 y luego el console log, 
// eso consume recursos

var restaTotal = restar(sumaTotal, 3);
console.log(restaTotal);

function multiplicar (a,b){
    var multiplicar1 = a * b;
    var multiplicacionTotal = multiplicar1;  // esto es innecesario a menos que vayas a querer guardar el valor de restar1 o utilizarlo en otro momento de la ejecución

    return multiplicar1;
}

//console.log(multiplicar(sumaTotal, restaTotal)) //aunque resumas la impresión, estás llamando dos veces al metodo, cuando podrías hacerlo una vez como en la linea 38 y luego el console log, 
// eso consume recursos

var multiplicacionTotal = multiplicar(sumaTotal, restaTotal)
console.log(multiplicacionTotal)

function operaciones (a, b, c){
    var operacionesT = a + b + c;
    var operacionesTotal = operacionesT;

    return operacionesTotal
}

//console.log(operaciones(sumaTotal, restaTotal, multiplicacionTotal)); // lo mismo de los anteriores

var operacionTotal = operaciones(sumaTotal, restaTotal, multiplicacionTotal);
console.log(operacionTotal);


// Ultimo ejercicio: Vas a crear dos funciones, una que sirva para la condición verdadera y otra para la falsa 
// La condición verdadera va a imprimir los números del 0 al 10 (usar for)
// La condición falsa va a imprimir los números del 0 al 20 (usar for)

if (operaciones > 50){
    console.log('Pago')
    positiva(); // cuando se te dice que debes agregar logica en la parte que da verdadero es dentro del cuerpo de la condicion
}else{
    console.log('no Pago') // lo mismo aplica para la parte falsa
    negativa();
} 

/*
en ocasiones tambien puedes agregar el código dentro del cuerpo de las condiciones y no pasa nada, pero por orden, a veces es mejor usar funciones
eso dependerá de la lógica necesaria 


if (operaciones > 50){
    console.log('Pago')
    for (let i = 0; i <=10; i++){
        console.log('let i Positiva:', i)
    } 
}else{
    console.log('no Pago') // lo mismo aplica para la parte falsa
    for (let i = 0; i <=20; i++){
        console.log('let i Negativa:', i)
    } 
} 

*/


function positiva (){
    for (let i = 0; i <=10; i++){
        console.log('let i Positiva:', i)
    } 
}

function negativa (){
    for (let i = 0; i <=20; i++){
        console.log('let i Negativa:', i)
    } 
}







    