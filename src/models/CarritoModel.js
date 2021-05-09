export default class {
    constructor(id,precio,nombre){
        this.id = id;
        this.precio = precio;
        this.nombre = nombre;
        this.cantidad = 1;
    }

    get subtotal(){
        return this.precio * this.cantidad;
    }

    cantidadPlusPlus(){
        this.cantidad++;
    }
}