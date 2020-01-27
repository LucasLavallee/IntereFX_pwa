
<template>
  <div id="choiceSelector">
    <div class="timerContainer">
      <div class="timer">
        00 : 03
      </div>
    </div>
    <div class="choiceContainer">
      <Choice 
        :class="[ (choice.id === id) ? 'selected' :  'classic' ]" 
        @selectChoice="selectMode" v-for="(item, id) in new Array(2).fill(0)" 
        :id="'choice' + id" 
        :choice="{
          id: id, 
          videoIn:'/video/test.mp4',
          videoVote: '/video/test.mp4',
          videoOut: '/video/test.mp4'
        }" 
        :key="id">
      </Choice>
    </div>
  </div>
</template>

<script>
import Choice from '../components/Choice'
import db from '../../base'

import router from '../router/index'
export default {
  name: 'ChoiceSelector',
  data() {
    return {
      next_choice: null,
      choice: {
        id: null
      }
    }
  },
  components: {
    Choice
  },
  methods: {
    selectMode(choice){
      this.choice = choice
    },
    triggerValidationChoice(){
      router.push({ name: 'transitionChoice', params: {choice: this.choice, transitionIn: false }})
    }
  },
  firebase: {
    next_choice: db.ref('SuperComics/next_choice')
  },
  watch: {
    next_choice: {
      handler() {
      }
    }
  },
  mounted(){
    setTimeout(this.triggerValidationChoice, 3000);
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');

  #choiceSelector {
    height:100%;
    width:100%;
    background: linear-gradient(180deg, #1CCFAF -47.73%, #24676C 12.28%, #2B0F34 86.15%);
  }
  .timerContainer {
    display:flex;
    align-items: center;
    justify-content: center;
    height:10%;
    font-size:16pt;
    background:rgb(28, 21, 59);
    color:white;
    font-family: 'Bangers', cursive;
  }
  .choiceContainer {
    height:90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .classic, .selected {
     transition: all 0.4s ease-in-out;
  }
  .classic {
    width:50%
  }
  .selected {
   
    width:150%;
  }
</style>
