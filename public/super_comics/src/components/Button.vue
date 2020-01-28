<template>
	<div @click="test" id="button-start" class="button-container">
		<span id="value">Start</span>
	</div>
</template>

<script>

import router from '../router/index'

export default {
	name: 'Button',
	methods: {
		test(){
			router.push('lobby')
		}
	},
	data() {
		return {
			isReady: false,
		}
	},
	firebase: {
    	isReady: db.ref('SuperComics/isReady'),
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
	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #1C153B;
		padding: 10px 20px;
		width: 130px;
		height: 40px;
		border-radius: 20px;
		margin-top: 20px
	}
	#value {
		font-family: 'Bangers', cursive;
		color: #F9F9F9;
		font-size: 2em
	}
</style>

