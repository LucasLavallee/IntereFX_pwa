
<template>
  <div id="transitionChoice">
    <video autoplay muted loop class="videoTransition">
      <source :src="transitionIn ? choice.videoIn : choice.videoOut" type="video/mp4">
    </video>
    <div class="transitionMessage">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'transitionChoice',
  props:['choice', 'transitionIn'],
  methods: {
  },
  computed:{
    message() {
      if(this.transitionIn){
        return "J'ai un deal à te proposer"
      }
      if(this.choice.id) {
        return "Votre vote a bien été pris en compte."
      }
      return "Dommage ! Vous n'avez pas été assez rapide."
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');
  #transitionChoice {
    height:100%;
    width:100%;
    background: linear-gradient(180deg, #1CCFAF -47.73%, #24676C 12.28%, #2B0F34 86.15%);
    color:white;
    font-family: 'Bangers', cursive;
    color: #FFC700;
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
  }
</style>
