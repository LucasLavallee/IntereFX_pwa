
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
        :mode= momentum.choiceType
        :key="id">
      </Choice>
      <img src="/img/icons/smartphone.png" class="uiIcon">
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
    background: linear-gradient(180deg, #1CCFAF -47.73%, #24676C 12.28%, #2B0F34 86.15%);
    position: relative;
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
    position: relative;
  }
  .timebar{
    height: 100%;
    background-color: #FFC700;
    position: absolute;
    left: 0px;
  }
  .choiceContainer {
    height:90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position:relative;
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

   .uiIcon {
    position:absolute;
    bottom: 10px;
    left:50%;
    transform: translateX(-50%);
    transform: rotateZ(90deg);
    animation: rotate 1s infinite alternate ease;
  }

  @keyframes rotate {
    from {
      transform: rotate3d(0, 1,0, 30deg)
    }
    to {
      transform:rotate3d(0, -1,0, 30deg)
    }
  }
</style>
