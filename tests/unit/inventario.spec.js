import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Inventario from '@/views/Inventario.vue'

const localVue = createLocalVue()

localVue.use(Vuex);





describe('Inventario.vue', () => {

  let state;
  let store;

  beforeEach(() => {
    state = {
      pizzas : [{id:1,name:'some_pizza_with_no_stock',price:3000,stock:0},{id:1,name:'some_pizza_with_stock',price:3000,stock:1}]
    }

    store = new Vuex.Store({state});
  });

  it('given first element of inventario without stock it mush have withoutstock class', () => {
    const wrapper = shallowMount(Inventario, {store,localVue})
    let trNoStock = wrapper.findAll('tbody tr').at(0);
    let trWithStock = wrapper.findAll('tbody tr').at(1);
    expect(trNoStock.classes('withoutstock')).toBe(true);
    expect(trWithStock.classes('withoutstock')).toBe(false);
  })
})
