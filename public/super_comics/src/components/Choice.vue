
<template>
  <div class="choice" @click="selectChoice">
    <div class="choiceNumber">
      {{ possibility.datas.message }}
    </div>
    <div class="videoContainer">
      <img :src="possibility.datas.video" alt="placeholder" class="video">
    </div>
  </div>
</template>

<script>
import db from '../../base'
export default {
  name: 'Choice',
  props:['possibility', 'mode'],
  data() {
    return {
      isVideoLoaded: false,
      video: null,
      arrayOfVote: 0,
      choiceName: null,
      currentPercentageOfVote: 0,
			swipe: 0,
    }
  },
  methods: {
    selectChoice(){
      if(this.activeMode === 'click')
        this.$emit('selectChoice', this.possibility)
    }
  },
  mounted(){
    const realId = this.possibility.id + 1
    this.choiceName = 'choice' + realId
    this.activeMode = this.mode
    const self = this
		if(window.DeviceMotionEvent && this.mode === 'shake') {
			window.addEventListener("deviceorientation", function process(event) {
        self.swipe =  event.beta
        if( self.possibility.id === 0) {
          if(self.swipe > 5) {
            self.$emit('selectChoice', self.possibility)
          }
        }
        else {
          if(self.swipe < -5) {
            self.$emit('selectChoice', self.possibility)
          }
        }
        
			});
		}
		else {
			this.activeMode = "click"
		}
  },
   firebase: {
    arrayOfVote: db.ref('SuperComics/decision/choices/choices')
  },
  watch: {
    arrayOfVote: {
      handler() {
        const totalVote = ((this.arrayOfVote['choice1'].length) + (this.arrayOfVote['choice2'].length))
        const percentage = this.arrayOfVote[this.choiceName].length * 100 / totalVote
        this.currentPercentageOfVote = percentage.toFixed(1)
      }
    },
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
    height:70%;
    transition: all 0.2s cubic-bezier(.08,.92,.8,.99);
    overflow: hidden;
    border-radius:30px;
    position:relative;
  }
  .selected .videoContainer {
   border:3px solid #FFC700;
  }
  .video {
    height:100%;
  }
  .selected .choiceNumber {
    display:none;
  }
  .selected .videoContainer {
    height:90%;
  }
  .result {
    position:absolute;
    color:#FFC700;
    top: 20px;
    right: 30px;
    font-size:18pt;
    font-family: 'Bangers', cursive;
  }

</style>
