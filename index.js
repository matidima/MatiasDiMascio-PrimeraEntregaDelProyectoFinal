class producto {
    constructor(nombre, precio, numero) {
        this.nombre = nombre;
        this.precio = precio;
        this.numero = numero;
    }
}

const relieveGrande = new producto('Relieve Grande', 1100, 1);
const tachasChica = new producto('tachas Chica', 670, 2);
const zigZagGrande = new producto('Zig Zag Grande', 1655, 3);
const hombrecitoYoga = new producto('Hombrecito Yoga', 430, 4);
const soporteCelular = new producto('Soporte Celular', 525, 5);
const yoda = new producto('Yoda', 550, 6);
const caraAbstracta = new producto('Cara Abstracta', 495, 7);
const macetaFrida = new producto('Maceta Frida', 680, 8);

function agregarProducto(producto) {
    productosArray.push(producto)
}

let productosArray = []

agregarProducto(relieveGrande)
agregarProducto(tachasChica)
agregarProducto(zigZagGrande)
agregarProducto(hombrecitoYoga)
agregarProducto(soporteCelular)
agregarProducto(yoda)
agregarProducto(caraAbstracta)
agregarProducto(macetaFrida)

let eleccion = parseInt(prompt("¿Que producto desea comprar?\n1. Relieve Grande\n2. Tachas Chica\n3. Zig Zag Grande\n4. Hombrecito Yoga\n5. Soporte Celular\n6. Yoda\n7. Cara Abstracta\n8. Maceta Frida"))
let cantidad = parseInt(prompt("Seleccione la cantidad que desee del producto elegido"))

for (let producto of productosArray) {
    if (producto.numero == eleccion) {
        alert("Realizo la compra de " + producto.nombre + " $ " + (cantidad * producto.precio))
    }
}