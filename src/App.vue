<template>
  <div id="app">
    <Survey lang="DE"/>
  </div>
</template>

<script>
import Survey from './components/survey.vue'

export default {
  name: 'app',
  components: {
    Survey
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
