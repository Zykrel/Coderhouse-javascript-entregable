//Calculadora de productos
class Placard {
    constructor(id, nombre, medida, precio) {
        this.id = id;
        this.nombre = nombre;
        this.medida = medida;
        this.precio = precio;
    }
}

const placard1 = new Placard(1, 'placard color blanco', '120x182x45', 20000)
const placard2 = new Placard(2, 'Placard color artico', '150x182x45', 35000)
const placard3 = new Placard(3, 'Placard color roble', '180x182x45', 42000)
const placard4 = new Placard(4, 'Placard color nature', '2x182x45', 47000)


const placares = [placard1, placard2, placard3, placard4]

const carrito = []



function menu() {
    let producto = prompt(`Elija su producto(seleccione el numero correspondiente)
    ${placares.map((placard) => {
        return '\n' + placard.id + ' ' + placard.nombre + ' $' + placard.precio
    })}
    `).toLowerCase();
    producto = parseInt(producto)
    const placardSeleccionado = placares.find(placard => placard.id === producto)
    if (placardSeleccionado == undefined) {
        alert('error al ingresar');
    } else {
        let cantidad = prompt(`Producto seleccionado: ${placardSeleccionado.nombre}. Seleccione la cantidad deseada`)
        cantidad = parseInt(cantidad)
        agregarAlCarrito(cantidad, placardSeleccionado)
    }
    let opcion = prompt('¿Desea agregar mas productos? \n Si | No').toLowerCase()
    return opcion
}

function agregarAlCarrito(cantidad, productoSeleccionado) {
    for (let i = 0; i < cantidad; i++) {
        carrito.push(productoSeleccionado);
    }
}

function mostrarCarrito() {

    let total = 0
    carrito.forEach((producto) => {
        total = producto.precio + total
    })

    return `Carrito: 
    ${carrito.map((placard) => {
        return '\n' + placard.nombre + ' $' + placard.precio
    })}
    total: $ ${total}`
}

function inicio() {
    let opcion = ''
    do {
        opcion = menu()
    } while (opcion == 'si')
    alert(mostrarCarrito())
}
inicio()

