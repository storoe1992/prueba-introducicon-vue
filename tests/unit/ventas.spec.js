import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Inventario from '@/views/Ventas.vue'

const localVue = createLocalVue()

localVue.use(Vuex);





describe('Ventas.vue', () => {

  let state;
  let store;

  beforeEach(() => {
    state = {
      ventas : []
    }

    store = new Vuex.Store({state});
  });

  it('given no sell it must show a message "Sin ventas realizadas"', () => {
    const wrapper = shallowMount(Inventario, {store,localVue})
    let trNoStock = wrapper.findAll('tbody tr td').at(0);
    expect(trNoStock.text()).toBe("Sin ventas realizadas");
  })
})