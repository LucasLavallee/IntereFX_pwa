<template>
  <div id="app">
    <div id="app-portrait">
      <p>Turn your phone on landscape mode</p>
    </div>
    <div id="app-landscape">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* @media only screen and (orientation:portrait) { */

#app-landscape {
    display: none
}
#app-portrait {
    display: contents
}

@media only screen and (orientation:landscape) {
  #app-landscape {
    display: contents
  }
  #app-portrait {
    display: none
  }
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
