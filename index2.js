// Ya sabemos lo que son los objetos, son una composición de atributos definidos por los tipos de sus valores. 

//que en este caso los definimos como tipo json
var obj = {
    "Nombre" : "Prueba", // Tipo String
    "Apellido" : "Prueba", // Tipo String
    "Edad" : 28, // Tipo Integer
    "Ciudad" : "Cartagena", // Tipo String
    "Es Empleado" : true, // Tipo Boolean
    "Fraccion" : 29.8, // Tipo Decimal
}

console.log(obj);

// Estos atributos los podemos utilizar en el momento que queramos, con el fin de asignarle nuevos valores o modificarle los existentes. 

obj.Nombre = 'Simón Way';
obj.Apellido = 'Esalas Young';

console.log(obj);

//Si queremos acceder a los valores de los atributos del json u objeto lo hacemos despues del "."

console.log(obj.Ciudad);

// De alguna forma podemos tomar los valores de los objetos para mandarlos a funciones y así validar operar, iterar y ahcer lo que queramis