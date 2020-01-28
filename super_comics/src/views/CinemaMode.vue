
<template>
  <div id="cinemaMode">
    <img id="charaBehind" v-show="!currentStepIndex" src="/img/CHARA_BEHIND.png"/>
    <TransitionChoice v-show="steps.before === currentStepIndex" :infos="{isTransitionIn:true, video: choices[currentChoiceIndex+1].videoIn, hasVoted: null}"/>
    <ChoiceSelector @selectMode="changeSelection" v-for="(choice, index) in choices" v-show="isDecisionTime(index)"  :choices="choice" :key="index" :vote="vote"/>
    <TransitionChoice v-show="steps.after === currentStepIndex" :infos="{isTransitionIn:false, video: choices[currentChoiceIndex+1].videoOut, hasVoted: this.vote}"/>
  </div>
</template>

<script>

import ChoiceSelector from './ChoiceSelector'
import TransitionChoice from './TransitionChoice'
import json from '../../public/SuperComicsData.json'
import db from '../../base'
import router from '../router'

export default {
  name: 'CinemaMode',
  components: {
    ChoiceSelector,
    TransitionChoice
  },
  data() {
    return {
      currentChoiceIndex: -1,
      currentStepIndex: null,
      choices: json.choicesList,
      next_choice: null,
      isReady: null,
      decisionClosed: null,
      timeout: null,
      vote:null,
      steps: {
        before: 0,
        decision: 1,
        after: 2
      },
      firstWatch: {
        next_choice: true,
        isReady: true
      }
    }
  },
  methods: {
    handleSynchronization(time) {
      if(this.timeout) {window.clearTimeout(this.timeout)}
      
      this.timeout = setTimeout(this.handleDecisions, time)
    },
    handleDecisions() {
      this.currentStepIndex = this.steps.before
      //navigator.vibrate(1000)
      
      const self = this
      setTimeout(() => {
        self.currentStepIndex = self.steps.decision
      }, 2000)
    },
    sendVote() {

       db.ref("/SuperComics/decision/choices/choices/choice" + (this.vote) )
      .push(0)
      .then(() => {
      })

      this.currentStepIndex = this.steps.after

      const self = this
      setTimeout(() => {  
        self.currentStepIndex = -1
        if(self.choices.length > self.currentChoiceIndex + 2)
          self.currentChoiceIndex++
      }, 2000)
    },
    isDecisionTime (index) {
      return (index === this.currentChoiceIndex+1) && (this.currentStepIndex === this.steps.decision)
    },
    changeSelection(choice) {
      this.vote = choice.id+1
    }
  },
  firebase: {
    decisionClosed: db.ref('SuperComics/decision/decisionClosed'),
    next_choice: db.ref('SuperComics/next_choice'),
    isReady: db.ref('SuperComics/isReady'),
  },

  watch: {
    next_choice: {
      handler() {
        !this.firstWatch.next_choice ? this.handleSynchronization(parseInt(this.next_choice.val)) : this.firstWatch.next_choice = false
      }
    },
    decisionClosed: {
      handler() {
        if(this.decisionClosed.val === true) {
          this.sendVote()
        }
      }
    },
    isReady: {
      handler() {
        !this.firstWatch.isReady && this.isReady.val === false ? router.push({name:'home'}) : this.firstWatch.isReady = false
      }
    }
  },
}
</script>

<style>
  #cinemaMode {
    height:100%;
    width:100%;
    background:rgb(0,0,0);
  }
  #charaBehind {
    height: 100%;
    max-height: 400px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%)
  }
</style>
