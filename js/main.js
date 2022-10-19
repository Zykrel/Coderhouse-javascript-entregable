//Calculadora de productos

function menu(){
    let producto = prompt('Elija su producto. \n Monitor Gamer \n Procesador AMD \n Combo de Accesorios').toLowerCase();
    let resultado = mostrarPrecio(producto);
    if(resultado == 'error'){
        alert('error al ingresar');
    }else{
        alert('El precio es: ' + resultado );
    }

    let opcion = prompt('Desea volver a comenzar \n Si | No').toLowerCase()
    return opcion
}

function mostrarPrecio(producto){
    switch(producto){
        case 'monitor gamer':
            return '$25.000';
            break;
        case 'procesador amd':
            return '$22.500';
            break;
        case 'combo de accesorios':
            return '$4.500';
            break;
        default:
            return 'error';
            break;
    }
}

function inicio(){
    let opcion = ''
    do{
        opcion =  menu()
    }while(opcion == 'si')
    alert('Fin del Programa :D')
}
inicio()

