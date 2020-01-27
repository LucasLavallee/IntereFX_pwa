<template>
  <div class="lobby">
	<div class="loading-container">
		<div class="item">
			<img id="loader" src="/img/loader.png"/>
		</div>
		<h1 class="item">Loading </h1>
	</div>
	<div class="tuto-container">
		<!-- <transition name="fade-in-out" mode="out-in"> -->
			<div v-show="currentState=== 0" class="tuto tuto-out">
			<p>Bienvenue dans cette expérience interactive. 
			Pendant le visionnage, vous serez amené à prendre des décisions qui influeront sur le cours
			de l'histoire.
			</p>
			</div>
		<!-- </transition>	 -->
		<!-- <transition name="fade-in-out" mode="out-in"> -->
			<div v-show="currentState=== 1" class="tuto tuto-out">
				<img id="hand" class="logo" src="/img/hand.png"/>
				<p>Lorsque vous y serez invité, selectionnez l'option de votre choix en cliquant dessus.
				</p>
			</div>
		<!-- </transition> -->
		<!-- <transition name="fade-in-out" mode="out-in"> -->
			<div v-show="currentState=== 2" class="tuto tuto-out">
				<img id="speed" class="logo" src="/img/speed.png"/>
				<p>Attention, vous n'avez que très peu de temps pour choisir.
				</p>
			</div>
		<!-- </transition> -->
	</div>
	
  </div>
</template>

<script>
// @ is an alias to /src
// import SliderTuto from '@/components/SliderTuto'
export default {
  name: 'Lobby',
  components: {
  },
  data() {
	return {
		currentState: 0
	}
  },
  mounted() {
	const self=this
	setInterval(()=>{
		self.currentState++
		self.currentState= self.currentState%3
	}
	, 6000)
  } 
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
		/* margin: 0 15px; */
		width: 60%;
		margin: auto
	}
	#loader {
		width: 40px;
		animation: rotation 2s linear infinite;
	}
	.tutorial-container {
		width: 50%;
		/* margin: auto; */
	}
	.logo {
		width: 50px  
	}
	/* .fade-in-out-enter-active { */
		/* transition: all .5s ease-in; */
		/* animation: slideIn 2s; */
	/* } */
	/* .fade-in-out-leave-active { */
		/* transition: all .8s ease-out; */
		/* animation: slideOut 2s; */
	/* } */
	/* .fade-in-out-enter, .fade-in-out-leave-to { */
		/* transform: translateX(10px); */
		/* opacity: 0; */
	/* }  */
	/* .fade-in-out-enter-active, .fade-in-out-leave-active {
		transition: opacity .5s ease-in;
	}
	.fade-in-out-enter, .fade-in-out-leave-to
		/* .component-fade-leave-active avant la 2.1.8 */ 
		/* opacity: 0; */
	/* } */ 

	.tuto {
		width: 60%;
		margin: auto;
		/* transform: translateY(-10px); */
		animation: slideIn 3s ease-in;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}
	/* .tuto-out { */
		/* animation: slideOut .9s ease-in-out; */
		/* transition: opacity .4s ease; */
		/* transition-delay: 2000ms */
	/* } */


@keyframes slideIn {
	0% { opacity: 0;}
	25% { opacity: 1}
	100% { opacity: 1}
}

@keyframes slideOut {
	0% { opacity: 1; }
	100% { opacity: 0; }
}

@keyframes rotation {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
</style>
