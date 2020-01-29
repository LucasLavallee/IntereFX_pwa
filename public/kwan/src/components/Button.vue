<template>
	<div class="buttonContainer">
		<div @click="test" id="button-start" :class="isReady.val ? 'button-container unactive' : 'button-container active'"	>
			<span id="value">Start</span>
		</div>
		<span id="openSession" v-if="isReady.val">En attente d'une session...</span>
	</div>
</template>

<script>

import router from '../router/index'
import db from '../../base'

export default {
	name: 'Button',
	methods: {
		test(){
			router.replace('lobby')
			this.openFullscreen()
		},
		openFullscreen: () => {
			const elem = document.body
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.mozRequestFullScreen) { /* Firefox */
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { /* IE/Edge */
				elem.msRequestFullscreen();
			}
		}
	},
	data() {
		return {
			isReady: false,
		}
	},
	firebase: {
		isReady: db.ref('Kwan/isReady'),
	},
	watch: {
    isReady: {
      handler() {
		if(this.isReady.val) {
			document.getElementById("button-start").style.pointerEvents = "none"
		}
		else {
			document.getElementById("button-start").style.pointerEvents = "auto"
		}
      }
    }
  },
}


</script>

<style scoped>
	@font-face {
		font-family: 'AvenirNP-Condensed';
		src:  url('../../public/fonts/Avenir-Next-Pro-Condensed.ttf')
	}
	.buttonContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 20px;
		width: 130px;
		height: 40px;
		border-radius: 20px;
		margin-top: 20px;
		background-color: #000;
	}

	.button-container.unactive {
		opacity: 0.4;
	}
	.button-container.active {
		opacity: 1;
	}
	#value {
		font-family: 'AvenirNP-Condensed';
		color: #F9F9F9;
		font-size: 2em
	}
	#openSession{
		margin-top: 15px;
		animation: display 1.1s infinite alternate;
	}

	@keyframes display {
		0% { opacity: 0;}
		100% { opacity: 1}
	}
</style>

