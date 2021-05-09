export default class VentaModel{
    constructor(id,nombre,precioSubtotal,cantidadVendida){
        this.id = id;
        this.nombre = nombre;
        this.precioSubtotal = precioSubtotal;
        this.cantidadVendida = cantidadVendida;
        var dt = new Date();
            let formattedDate = `${
              (dt.getMonth()+1).toString().padStart(2, '0')}/${
              dt.getDate().toString().padStart(2, '0')}/${
              dt.getFullYear().toString().padStart(4, '0')} ${
              dt.getHours().toString().padStart(2, '0')}:${
              dt.getMinutes().toString().padStart(2, '0')}:${
              dt.getSeconds().toString().padStart(2, '0')}`
        this.date = formattedDate;
    }
}