//callback es un argumento

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

