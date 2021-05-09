<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link class="navbar-brand" to="/">Pizzería</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/inventario"
              >Inventario</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/carrito">Carrito</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ventas">Ventas</router-link>
          </li>
        </ul>
      </div>

      <div class="carrito-section">
      <p class="nav-item text-white me-3">
        Total de Tipos de Pizza: {{$store.state.carrito.length}}
      </p>
      <div @click="$router.push('/carrito')" class="carrito-icono"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carrito-icono {
  width: 24px;
  height: 24px;
  line-height: 24px;
  cursor: pointer;

  &::before {
    content: "shopping_cart";
    font-family: "Material Icons";
    font-size: 1.5rem;
    color: white;
  }
}
nav {
  position: fixed;
  width: 100%;
  z-index: 1;
}

.carrito-section{
  display: flex;
  align-items: center;
  justify-content: center;
}

.carrito-section p{
  height: 10px;
}
</style>
