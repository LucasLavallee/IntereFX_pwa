
<template>
  <div class="choice" @click="selectChoice">
    <div class="choiceNumber">
      Option {{choice.id + 1}}
    </div>
    <div class="videoContainer">
      <video autoplay muted loop class="videoChoice">
       <source src="../../public/video/test.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Choice',
  props:['choice'],
  methods: {
    selectChoice(){
      this.$emit('selectChoice', this.choice)
    }
  }
}
</script>

<style>
  .choice {
    width:50%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .choiceNumber {
    color:white;
    font-size:22pt;
    padding:10px;
    font-family: 'Bangers', cursive;
  }
  .videoContainer {
    height:85%;
    transition: all 0.2s ease-in;
  }
  .selected .videoContainer {
    display:flex;
    align-items: center;
    justify-content:center;
  }
  .selected .choiceNumber {
    display:none;
  }
  .videoChoice {
    transition: all 0.2s ease-in;
    height:85%;
  }
  .selected .videoChoice {
    height:95%;
    border:3px solid #FFC700;
  }
  .selected .videoContainer {
    height:95%;
  }

</style>
