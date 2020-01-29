
<template>
  <div id="transitionChoice" :class="infos.isTransitionIn ? 'animIn' : 'animOut'">
    <video autoplay muted loop playsInline class="videoTransition">
      <source :src="infos.video" type="video/mp4">
    </video>
    <div class="transitionMessage">
      {{message}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'transitionChoice',
  props:['infos'],
  methods: {
  },
  computed:{
    message() {
      if(this.infos.isTransitionIn){
        return "J'ai un deal à te proposer"
      }
      if(this.infos.hasVoted) {
        return "Votre vote a bien été pris en compte."
      }
      return "Dommage ! Vous n'avez pas été assez rapide."
    }
  },
}
</script>

<style>
@font-face {
		font-family: 'AvenirNP-Condensed';
		src:  url('../../public/fonts/Avenir-Next-Pro-Condensed.ttf')
	}

@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');

  @keyframes fadeIn {
    from {
      background-color: #000;
    }
    to {
      background-color: #fff;
    }
  }
  #transitionChoice {
    height:100%;
    width:100%;
    font-size:20pt;
  }

  .videoTransition {
    height:80%;
  }

  .animIn {
    background-color: #000; 
    animation: fadeIn .5s .1s forwards;
  }
  .animOut {
    background-color: #fff; 
    animation: fadeIn .5s .1s reverse forwards;
  }
  .transitionMessage {
    height:20%;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: 'AvenirNP-Condensed';
  }
</style>
