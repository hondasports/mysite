<template>
  <v-app class="primary">
    <v-toolbar class="primary" flud>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" class="primary black--text">top</v-btn>
        <v-btn to="/about" class="primary black--text">about</v-btn>
        <v-btn to="/skill" class="primary black--text">skill</v-btn>
        <v-btn to="/content" class="primary black--text">content</v-btn>
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
