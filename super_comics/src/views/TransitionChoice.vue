
<template>
  <div id="transitionChoice">
    <video autoplay muted loop class="videoTransition">
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
    background:rgb(0,0,0);
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
