<template>
  <MainIndex class="main" />
</template>

<script>
import MainIndex from './components/MainIndex.vue'

export default {
  name: 'App',
  components: {
    MainIndex
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
}

.main {
  height: calc(100vh);
  width: calc(100vw);
}
</style>
