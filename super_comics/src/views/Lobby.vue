<template>
  <div class="lobby">
	<div class="loading-container">
		<div class="item">
			<img id="loader" src="/img/loader.png"/>
		</div>
		<h1 class="item">Loading </h1>
	</div>
	<div class="tutorial-container active">
		<p>Bienvenue dans cette expérience interactive. 
		Etiam ultricies mauris nec pharetra porta. 
		Aenean nec laoreet dolor. Phasellus consequat purus vitae lorem consectetur volutpat. 
		</p>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Lobby',
  components: {
  },
}
</script>

<style scoped>
  h1 {
    font-family: 'Bangers', cursive;
    font-size: 3em;
    color: #F9F9F9;
    /* text-shadow: 2px 4px #FFC700; */
    text-align: center
  }
  .lobby {
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    height: 100%
  }
  .loading-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-bottom: 20px
  }
  .item {
	margin: 0 15px;
  }
  #loader {
	width: 40px;
	animation: rotation 2s linear infinite;
  }
  .tutorial-container {
	width: 50%;
	/* margin: auto; */
  }

@keyframes rotation {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
</style>
