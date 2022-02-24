console.log("hola");
const carro = {
  placa: "FHE961",
  modelo: "2009",
  arrancar: function () {
    console.log(`Encienda el carro ${this.placa} ${this.modelo}`);
  },
  parar: () => {
    console.log(`Encienda el carro ${this.placa} ${this.modelo}`);
  },
};
console.log(carro.arrancar());

const producto = {
  nombre: "Shampoo",
  decirProducto: function () {
    setTimeout(() => {
      console.log("El nombre es : " + this.nombre);
    }, 3000);
  },
};
producto.decirProducto();
