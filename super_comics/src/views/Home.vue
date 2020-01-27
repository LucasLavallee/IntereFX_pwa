
<template>
  <div class="home">
    <h1>Homepage </h1>
    {{next_choice}}
    <div @click="test">test</div>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '../../base'
import router from '../router/index'

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      next_choice: null,
      currentActionId: 0
    }
  },
  methods: {
    test(){
     router.replace('choiceSelector')
    console.log({router: this.$router});
    }
  },

  firebase: {
    next_choice: db.ref('SuperComics/next_choice')
  },

  watch: {
    next_choice: {
      handler() {

        console.log(this.next_choice.timeout)
      }
    }
  },
}
</script>
