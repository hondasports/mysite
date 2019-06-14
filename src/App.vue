<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">Tatsuya Miyamoto</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat><router-link to="/about">about</router-link></v-btn>
        <v-btn flat><router-link to="/skill">skill</router-link></v-btn>
        <v-btn flat><router-link to="/content">content</router-link></v-btn>
        <v-btn flat><router-link to="/contact">contact</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
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
