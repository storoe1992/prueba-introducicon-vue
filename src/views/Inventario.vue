<template>
    <div class="container">
    <div class="row">
      <div class="col-12 my-5 pt-5">
        <h1>Inventario de Productos</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>

          <tbody v-if="pizzas && pizzas.length === 0">
            <tr>
              <td colspan="5">Sin productos en el inventario</td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr :class="{withoutstock : pizza.stock == 0 }" v-for="(pizza, i) in pizzas" :key="i">
              <th scope="row">{{ i + 1 }}</th>
              <td>{{ pizza.id }}</td>
              <td>{{ pizza.name }}</td>
              <td>{{ pizza.price }}</td>
              <td>{{ pizza.stock }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Inventario",
  computed: {
    ...mapState(["pizzas"]),
  },
};
</script>

<style scoped>
  .withoutstock{
    background-color: red;
  }
</style>