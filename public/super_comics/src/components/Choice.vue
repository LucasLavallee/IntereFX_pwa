
<template>
  <div class="choice" @click="selectChoice">
    <div class="choiceNumber">
      {{ possibility.datas.message }}
    </div>
    
    <div class="videoContainer">
      <img v-show="!isVideoLoaded" :src="possibility.datas.placeholder" alt="placeholder" class="placeholder">
      <video :id="'video' + possibility.momentum_id + possibility.id" v-show="isVideoLoaded" autoplay muted loop playsInline class="videoChoice">
       <source :src="possibility.datas.video" type="video/mp4">
      </video>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Choice',
  props:['possibility'],
  data() {
    return {
      isVideoLoaded: false,
      video: null
    }
  },
  methods: {
    selectChoice(){
      this.$emit('selectChoice', this.choice)
    },
    checkLoad() {
        if (this.video.readyState === 4) {
          this.isVideoLoaded = true
        } else {
          setTimeout(this.checkLoad, 500);
        }
    }
  },
  mounted(){
    this.video = document.querySelector('#video'  + this.possibility.momentum_id + this.possibility.id);
    this.checkLoad();
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
  .placeholder {
     height:85%;
  }

</style>
