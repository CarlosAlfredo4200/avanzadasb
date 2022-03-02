//Promesas es algo que se utiliza para trabajar con peticiones asincronas y reducir el uso excesivo de callbak.  espera then, catch.

// el método resolve esta relacionado directamente con then
// el método reject esta relacionado directamente con catch

let promesa = new Promise(function(resolve, reject){
    let suma = 2 + 6 ;
    
    (suma === 8) ? resolve('Correcto!!!') : reject('Error!!!')

})

promesa.then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
    
})


//---------------------------------------

function myPromesa(){
    return new Promise(function(resolve, reject){
        
        let suma = 2 + 20 ;
        (suma === 8) ? resolve('Correcto!!!') : reject('Error!!!')
    
    })
}
  

myPromesa().then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
    
})

//--------------------------------------

function obsequio(){
    return new Promise(function(resolve, reject){
        
        const regalo  = true ;
        if(regalo === true) {
            const phone = { 
                color: "Negro", 
                brand:"Iphone"
            } 
            resolve(phone);
     }else {
         
     }reject('No ganaste el regalo')
    
    })
}
  
obsequio().then(function(mensaje){
    console.log(mensaje);
}).catch(function(error){
    console.log(error);
    
})

//--------------------Retornar otra promesa------------------


function mostrarPhone(mensaje){
    return new Promise(function(resolve, reject){
        if(mensaje){
            resolve('Obtubiste un ' + mensaje.brand);
        }else{
            reject('Hay un error')
        }
    })
}

function regalos(){
    return new Promise(function(resolve, reject){
        
        const regalo  = true ;
        if(regalo === true) {
            const phone = { 
                color: "Negro", 
                brand:"Iphone"
            } 
            resolve(phone);
     }else {
         
     }reject('No ganaste el regalo')
    
    })
}
  
regalos().then(function(mensaje){
    return mostrarPhone(mensaje);
}).then(function(respuesta){
    console.log(respuesta);
}).catch(function(error){
    console.log(error);
    
})
