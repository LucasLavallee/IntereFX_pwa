<template>
  <div id="app">
    <div id="app-portrait">
      <h1 class="item" id=title>Super Comics </h1>
      <p class="item">Pour profiter pleinement de l'expérience, veuillez mettre votre téléphone en mode paysage.</p>
      <img id="rotation" class="logo item" src="/img/rotation.png"/>
    </div>
    <div id="app-landscape">
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/about">About</router-link> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
</style>

<style>

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
  color: #F9F9F9;
  font-family: 'Montserrat', 'sans-serif';
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
  height: 100%
}
body {
  line-height: 1;
  height: 100%;
  overflow: hidden;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

p{
  line-height: 1.5em
}

/****************/

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #1CCFAF -47.73%, #24676C 12.28%, #2B0F34 86.15%);
}

#app-landscape {
    display: none;
    
}
#app-portrait {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
}
#title {
    font-family: 'Bangers', cursive;
    font-size: 5em;
    color: #F9F9F9;
    text-shadow: 2px 4px #FFC700;
    text-align: center;
}

@media only screen and (orientation:landscape) {
  #app-landscape {
    display: inherit;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center

  }
  #app-portrait {
    display: none;
    height: 100%;
  }
}

.logo {
	width: 40px;
}

.item {
  margin: 15px 0;
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
