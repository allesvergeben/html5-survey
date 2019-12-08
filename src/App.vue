<template>
  <div id="app" data-app>
    <v-app-bar app flat>
        <v-btn text v-on:click="$router.back()">
          zurück
        </v-btn>
    </v-app-bar>
    <router-view/>
      <v-footer app fixed>
          <v-spacer/>
          <v-btn text v-on:click="$router.push()">
            Impressum
          </v-btn>
      </v-footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
