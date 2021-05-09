import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import CarritoModel from '../models/CarritoModel'
import VentaModel from '../models/VentaModel'
import PizzaModel from '../models/PizzaModel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pizzas : [],
    carrito: [],
    ventas: []
  },
  getters : {
    pizzasConStock(state){
      return state.pizzas.filter((pizza) => pizza.stock > 0);
    },
    totalCarrito(state) {
      const carrito = state.carrito;
      return carrito.length === 0 ? 0 : carrito.reduce((acc, x) => acc + x.subtotal,0);
    },
  },
  mutations: {
    cargarPizzas(state,pizzas){
      state.pizzas = pizzas;
    },
    
    agregarPizza(state, payload) {
      try{
      const pizzaId = payload.id;
      const nombre = payload.nombre;
      const precio = payload.precio;


      const pizza = state.pizzas.find(obj => obj.id === pizzaId);
      const pizzaInShopCar = state.carrito.find(obj => obj.id === pizzaId);

      if (!pizzaInShopCar && pizza) {
        if(pizza.stock == 0)
           throw 'Stock agotado'
        const obj = new CarritoModel(pizzaId,precio,nombre);
        state.carrito.push(obj);
      } else if(pizza) {
        if(pizzaInShopCar.cantidad == pizza.stock)
          throw 'Stock agotado'
        pizzaInShopCar.cantidadPlusPlus();
        console.log(pizzaInShopCar.subtotal)
      }
    }catch(e){
      alert(e);
    }
    },
    comprar(state) {
      const respuesta = confirm("¿Quieres comprar ahora?");
      if (respuesta) {
        state.carrito.forEach((el) => {
          const pizza = state.pizzas.find(piz => piz.id === el.id);
          if (pizza) {
            let venta = new VentaModel(el.id,el.nombre,el.subtotal,el.cantidad);
            state.ventas.push(venta)
            pizza.updateStock(el.cantidad);
          }
        });
        state.carrito = [];
      }
    },
    limpiarCarrito(state){
      state.carrito = [];
    }

  },
  actions: {
    async loadData({ commit }) {
      const url = "https://us-central1-apis-varias-mias.cloudfunctions.net/pizzeria";
      try {
        const req = await axios(url);
        const pizzas = req.data;
        const pizzasStock = pizzas.map(obj => new PizzaModel(obj.id,obj.desc,obj.img,obj.name,obj.price,10));
        commit("cargarPizzas", pizzasStock);
      } catch (error) {
        console.log(error);
      }
    }
  }
})
