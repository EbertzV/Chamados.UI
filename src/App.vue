<template>
  <div id="app">
    <TelaInicial/>
  </div>
</template>
<script>
import TelaInicial from './components/tela_inicial/tela_inicial.vue'
export default {
  name: 'App',
  components: {
    TelaInicial
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
