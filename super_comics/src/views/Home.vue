
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

export default {
  name: 'home',
  components: {
    Button
  },
  // data() {
  //   return {
  //     next_choice: null,
  //     currentActionId: 0
  //   }
  // },
  // firebase: {
  //   next_choice: db.ref('SuperComics/next_choice')
  // },

  // watch: {
  //   next_choice: {
  //     handler() {

  //       console.log(this.next_choice.timeout)
  //     }
  //   }
  // }
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
    border: solid 2px red;
  }
</style>
