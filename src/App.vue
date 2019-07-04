<template>
  <v-app>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat flud><router-link to="/about">about</router-link></v-btn>
        <v-btn flat><router-link to="/skill">skill</router-link></v-btn>
        <v-btn flat><router-link to="/content">content</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <top/>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
    <bottom/>
  </v-app>

</template>

<script>

import bottom from './views/Bottom.vue'
import top from './views/Top.vue'

export default {
  name: 'App',
  components: {
    top,
    bottom
  },
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
