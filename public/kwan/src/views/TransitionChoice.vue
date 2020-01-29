
<template>
  <div id="transitionChoice">
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
@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
  #transitionChoice {
    height:100%;
    width:100%;
    background: linear-gradient(180deg, #1CCFAF -47.73%, #24676C 12.28%, #2B0F34 86.15%);
    font-size:20pt;
  }

  .videoTransition {
    height:80%;
  }
  .transitionMessage {
    height:20%;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #FFC700;
    font-family: 'Bangers', cursive;
  }
</style>
