<template>
  <div id="app">
      <div class="container">
        <p class="h1">Welcome to Tic Tac Toe Game</p>
        <p class="h2">1st Player is X</p>
        <p class="h3">2nd Player is O</p>
        <p class="h4">You are 1st player (X)</p>
        <p class="h5">Lets the game begin</p>
        <Board />
      </div>
  </div>
</template>

<script>
  import Board from './components/board.vue'


export default {
  name: 'App',
  components: {
    Board
  },
  data: function() {
    return {
      logo: require('./assets/cross.png')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
