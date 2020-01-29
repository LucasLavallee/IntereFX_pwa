
<template>
  <div class="home">
    <h1>Kwan</h1>
    <Button/>
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
    font-family: 'AvenirNP-Condensed';
    font-size: 5em;
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
