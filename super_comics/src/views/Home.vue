
<template>
  <div class="home">
    <h1>Homepage </h1>
    {{next_choice}}
  </div>
</template>

<script>
// @ is an alias to /src
import db from '../../base'

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

  firebase: {
    next_choice: db.ref('SuperComics/next_choice')
  },

  watch: {
    next_choice: {
      handler() {

        console.log(this.next_choice.timeout)
      }
    }
  }
}
</script>
