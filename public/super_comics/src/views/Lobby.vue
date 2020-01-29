<template>
  <div class="lobby">
	<div class="loading-container">
		<div class="item">
			<img id="loader" src="/img/CHARA_LOOP.gif"/>
		</div>
		<h1 class="item">Chargement<span id="suspension">...</span></h1>
	</div>
	<div class="tuto-container">
		<!-- <transition name="fade-in-out" mode="out-in"> -->
			<div v-show="currentState=== 0" class="tuto tuto-out">
			<p>Bienvenue dans cette expérience interactive. 
			Pendant le visionnage, vous serez amenés à prendre des décisions qui influeront sur le cours
			de l'histoire.
			</p>
			</div>
			<div v-show="currentState=== 1" class="tuto tuto-out">
				<img id="hand" class="logo" src="/img/info_smartphone.png"/>
				<p>Soyez attentif: lorsque ce logo apparait, il faudra aller sur votre téléphone.
				</p>
			</div>
		<!-- </transition>	 -->
		<!-- <transition name="fade-in-out" mode="out-in"> -->
			<div v-show="currentState=== 2" class="tuto tuto-out">
				<img id="hand" class="logo" src="/img/hand.png"/>
				<p>Vous devrez ensuite faire un choix et le selectionner en cliquant dessus.
				</p>
			</div>
		<!-- </transition> -->
		<!-- <transition name="fade-in-out" mode="out-in"> -->
			<div v-show="currentState=== 3" class="tuto tuto-out">
				<img id="speed" class="logo" src="/img/speed.png"/>
				<p>Attention, vous n'aurez que très peu de temps pour choisir.
				</p>
			</div>
		<!-- </transition> -->
	</div>
  </div>
</template>

<script>
// @ is an alias to /src

import db from '../../base'
import router from '../router/index'
import NoSleep from 'nosleep.js'

export default {
  name: 'Lobby',
  components: {
  },
  data() {
		return {
			currentState: 0,
			isReady: false,
			firstWatch: true, 
			noSleep: null,
		}
	},
	methods: {
	},
  mounted() {
		this.noSleep = new NoSleep()
		this.noSleep.enable()
		const self = this
		setInterval(()=>{
			self.currentState++
			self.currentState= self.currentState%4
		}
		, 6000)
		
  },
  
  firebase: {
    isReady: db.ref('SuperComics/isReady'),
  },

  watch: {
    isReady: {
      handler() {
		if(!this.firstWatch && this.isReady.val) {
			router.replace({name:'cinemaMode'})
		}
		else {
			this.firstWatch = false
		}
      }
    }
  },
}
</script>

<style scoped>
	h1 {
		font-family: 'Bangers', cursive;
		font-size: 2em;
		color: #F9F9F9;
		/* text-shadow: 2px 4px #FFC700; */
		text-align: center
	}
	.lobby {
		display: flex;
		flex-direction: column;
		align-items: center; 
		height: 250px;
	}
	.loading-container {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		margin-bottom: 20px
	}
	.item {
		margin: 0
	}
	#loader {
		width: 100px;
		padding-right: 10px;
		transform: scaleX(-1);
		/* animation: rotation 2s linear infinite; */
	}
	#suspension {
		animation: display 1.1s infinite alternate
	}
	.tutorial-container {
		width: 50%;
		/* margin: auto; */
	}
	#title {
		font-size: 1em
	}
	.tuto {
		width: 60%;
		margin: auto;
		transform: translateY(10px);
		animation: fade 3s ease-out infinite alternate, slideIn 1s ease-out forwards;
	}

@keyframes fade {
	0% { opacity: 0; }
	25% { opacity: 1; }
	100% { opacity: 1; }
}

@keyframes slideIn {
	0% { }
	100% { transform: translateY(-5px); }
}

@keyframes display {
	0% { opacity: 0;}
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
