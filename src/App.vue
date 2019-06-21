<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view/>
        <v-layout>
          <v-flex>
            <v-card>
              <v-card-title>
                <div>About</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat flud><router-link to="/about">about</router-link></v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-card-title>
                Skill
              </v-card-title>
              <v-card-actions>
                <v-btn flat><router-link to="/skill">skill</router-link></v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-card-title>
                content
              </v-card-title>
              <v-card-actions>
                <v-btn flat><router-link to="/content">content</router-link></v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-card-title>
                Contact
              </v-card-title>
              <v-card-actions>
                <v-btn flat><router-link to="/contact">contact</router-link></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
