
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
      currentActionId: 0
    }
  },
  methods: {
    test(){
     router.replace('choiceSelector')
    }
  },
}
</script>
