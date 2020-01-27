<template>
  <div id="app">
    <ChoiceSelector />
  </div>
</template>

<script>
import ChoiceSelector from './views/ChoiceSelector'

export default {
  name: 'App',
  components: {
    ChoiceSelector
  }
}
</script>

<style>
body, html {
  width:100%;
  height:100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
  width:100%;
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
