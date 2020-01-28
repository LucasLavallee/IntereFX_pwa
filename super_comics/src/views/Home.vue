
<template>
  <div class="home">
    <h1>Super Comics </h1>
    <Button/>
    <!-- {{next_choice}} -->
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button'
import router from '../router/index'

export default {
  name: 'home',
  components: {
    Button
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

<style scoped>
  h1 {
    font-family: 'Bangers', cursive;
    font-size: 5em;
    color: #F9F9F9;
    text-shadow: 2px 4px #FFC700;
    text-align: center
  }
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
</style>
