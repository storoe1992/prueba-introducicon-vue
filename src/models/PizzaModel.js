export default class PizzaModel{
    constructor(id,desc,img,name,price,stock){
        this.id = id;
        this.desc = desc;
        this.img =img;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    updateStock(cant){
        if(this.stock != 0 && cant <= this.stock)
            this.stock = this.stock - cant;
        else throw 'Stock agotado'
    }

}