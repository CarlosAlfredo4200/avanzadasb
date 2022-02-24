//callback es un argumento
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