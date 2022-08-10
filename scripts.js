
//Primera parte del Ejercició 4 de JavaScript (si quieres ver que funcionan todas las partes tendras que comentar).

const Persona = () => { 
    var nombreCompleto = "Ruben Medina Martinez";
    return nombreCompleto;
}
console.log(Persona());

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// Segunda parte del Ejercició 4 de JavaScript (si quieres ver que funcionan todas las partes tendras que comentar).

function Persona2( boleano= true){
    console.log(boleano);
}
Persona2();

//----------------------------------------------------------------------------------------------------------------------------------------------------------

//Tercera parte del Ejercició 4 de JavaScript (si quieres ver que funcionan todas las partes tendras que comentar).

const infinit = function(...infinitec){
    infinitec.forEach(variables => {
        console.log(variables)
    })
}
infinit(1,2,3,4,5);