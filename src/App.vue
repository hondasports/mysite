<template>
  <v-app>
    <v-container>
      <router-view/>
    </v-container>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} Tatsuya Miyamoto @hondasports8</div>
    </v-footer>
  </v-app>

</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  * {
      text-transform: none !important;
    }
</style>
