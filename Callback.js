//callback es un argumento (Funcion utilizada como parametro en otra funcion)
//funcion orden superior fn que llama a la otra atra vez del paramentro 

function reflexion (frase, callback){
        const mensaje = 'Hierba mala, '+frase;

        //instancia callback
        callback(mensaje);
}

function logFrase(frase){
    console.log(frase);
}

reflexion('nunca muere', logFrase);

//------------------------------------------------

function myVista(algo){
    console.log(algo);
}

function calculo (n1,n2,callback){
    let suma = n1 + n2;
    callback(suma)
}
calculo(5,7,myVista)

//-------------------------------------------------

function fncallback() {
    console.log('Yo soy un callback');
}

function mensaje (fn) {
    fn() ;
}

mensaje(fncallback)

//-----------------------------------------------

//Cuando lo utilizo

function funcion1 (fn) {

    setTimeout(() => {
         
        console.log('Mensaje uno');
        fn()
    }, 1000);
}

function funcion2 () {
    console.log('Mensaje dos');

}

funcion1(funcion2)
 