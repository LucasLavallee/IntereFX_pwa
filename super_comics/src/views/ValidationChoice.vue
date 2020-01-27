
<template>
  <div id="validationChoice">
    <video autoplay muted loop class="videoValidation">
      <source :src="choice.videoOut" type="video/mp4">
    </video>
    <div class="validationMessage">
      {{message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'validationChoice',
  props:['choice'],
  methods: {
  },
  computed:{
    message() {
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
  #validationChoice {
    height:100%;
    width:100%;
    background:rgb(0,0,0);
    color:white;
    font-family: 'Bangers', cursive;
    color: #FFC700;
    font-size:20pt;
  }

  .videoValidation {
    height:80%;
  }
  .validationMessage {
    height:20%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
</style>
