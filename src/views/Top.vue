<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-img :src="require('@/assets/image/header.jpg')">
        <v-container fill-height fluid>
          <v-layout fill-height align-top>
            <v-flex xs12 flexbox text-xs-center>
              <div class="white--text display-3 font-weight-thin"><span class="header-text-shadow">Tatsuya's portfolio</span></div>
              <div class="white--text headline font-weight-thin"><span class="header-text-shadow">- Programming is one of my life. -</span></div>
              </v-flex>
          </v-layout>
        </v-container>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
  .header-text-shadow {
    text-shadow:2px 2px 3px #1a1813;;
  }
</style>
