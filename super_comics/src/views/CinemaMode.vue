
<template>
  <div id="cinemaMode">
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
      decisionClosed: null,
      timeout: null,
      vote:null,
      steps: {
        before: 0,
        decision: 1,
        after: 2
      },
      firstWatch: true
    }
  },
  methods: {
    handleSynchronization(time) {
      if(this.timeout) {window.clearTimeout(this.timeout)}
      
      this.timeout = setTimeout(this.handleDecisions, time)
    },
    handleDecisions() {
      this.currentStepIndex = this.steps.before
      
      const self = this
      setTimeout(() => {
        self.currentStepIndex = self.steps.decision
      }, 2000)
    },
    sendVote() {
      this.currentChoiceIndex++
      console.log('sending vote: ' + this.vote)
      this.currentStepIndex = this.steps.after
    },
    isDecisionTime (index) {
      return (index === this.currentChoiceIndex+1) && (this.currentStepIndex === this.steps.decision)
    },
    changeSelection(choice) {
      console.log(choice.id)
      this.vote = choice.id
    }
  },
  firebase: {
    decisionClosed: db.ref('SuperComics/decisionClosed'),
    next_choice: db.ref('SuperComics/next_choice')
  },

  watch: {
    next_choice: {
      handler() {
        !this.firstWatch ? this.handleSynchronization(parseInt(this.next_choice.timeout)) : this.firstWatch = false
      }
    },
    decisionClosed: {
      handler() {
        if(this.decisionClosed.val === true) {
          this.sendVote()
        }
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
</style>
