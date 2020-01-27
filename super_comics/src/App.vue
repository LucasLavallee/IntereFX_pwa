<template>
  <div id="app">
    <div id="app-portrait">
      <p>Turn your phone on landscape mode</p>
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
  font-family: 'Montserrat', 'sans-serif'
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
  min-height: 100%;
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

/************** */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, #1ccfaf -100%,#24676c 40%,#2b0f34 95%)
}

#app-landscape {
    display: none;
    height: 100%
}
#app-portrait {
    display: contents;
    height: 100%
}

@media only screen and (orientation:landscape) {
  #app-landscape {
    display: inherit;
    margin: 0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

  }
  #app-portrait {
    display: none;
    height: 100%;
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
