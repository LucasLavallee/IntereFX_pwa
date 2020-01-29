
<template>
  <div id="choiceSelector">
    <div class="timerContainer">
      <div class="timebar" :style="{width: timeLeft+'%'}">
      </div>
    </div>
    <div class="choiceContainer">
      <Choice 
        :class="[ (possibility.id + '' + choice.id === possibility.id + '' + id) ? 'selected' :  'classic' ]" 
        @selectChoice="selectMode" v-for="(possibility, id) in momentum.possibilities" 
        :id="'choice' + momentumId + id" 
        :possibility="{
          momentum_id: momentum.id,
          id: id, 
          datas: possibility
        }" 
        :key="id">
      </Choice>
    </div>
  </div>
</template>

<script>
import Choice from '../components/Choice'
import db from '../../base'

export default {
  name: 'ChoiceSelector',
  data() {
    return {
      choice: {
        id: null
      },
      timeLeft: 100, //%
      intervalFunc: null,
      decisionDuration: null
    }
  },
  props: ['momentum','isOpen', 'momentumId'],
  components: {
    Choice
  },
  methods: {
    selectMode(choice){
      this.choice = choice 
      this.$emit('selectMode', this.choice)
    },
    updateTime() {
      const gap = (Math.floor(this.decisionDuration.val/200) * 100)/this.decisionDuration.val 
      this.timeLeft -= gap

      if(this.timeLeft <= 0) 
        clearInterval(this.intervalFunc)
    }
  },

  firebase: {
    decisionDuration: db.ref('SuperComics/decision/decisionDuration')
  },
  watch: {
    decisionDuration: {
      handler() {
        this.decisionDuration.val
      }
    },
    isOpen(newData) {
      if(newData) {
        const gap = Math.floor(this.decisionDuration.val/200)
        setInterval(this.updateTime, gap)
      }
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bangers&display=swap');

  #choiceSelector {
    height:100%;
    width:100%;
    background: #fff;
    position: relative;
  }
  .timerContainer {
    display:flex;
    align-items: center;
    justify-content: center;
    height:10%;
    font-size:16pt;
    background:#000;
    color:white;
    font-family: 'Bangers', cursive;
    position: relative;
  }
  .timebar{
    height: 70%;
    background-color: #fff;
    position: absolute;
    left: 0px;
  }
  .choiceContainer {
    height:90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .classic, .selected {
     transition: all 0.2s cubic-bezier(.08,.92,.8,.99);
  }
  .classic {
    width:50%
  }
  .selected {
   
    width:150%;
  }
</style>
