<template>
  <v-layout>
    <v-flex>
      <v-card v-for="(content, index) in contents" class="mb-2">
        <v-card-title class="secondary">
          {{ content.title }}
        </v-card-title>
        <v-card-text>
          <div>
            {{ content.desc }}
          </div>
          <div>
            <v-btn :href="content.link" flat small>open link</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      contents: [
        {
          title: 'ニコカレ - ニコニコカレンダー',
          desc: '友人の仕事がきっかけで作成したアプリ。メンテナンスをサボっていたため削除された。リンクは過去に残っていた紹介ページ。',
          link: 'http://applion.jp/iphone/app/633386996/'
        },
        {
          title: 'Bun-chan-bot',
          desc: 'ラズパイを使いたいというのと、日中部屋を留守にするのでモニタリングするために作成。',
          link: 'https://twitter.com/bun_chan_bot'
        }
      ]
    }
  }
}

</script>

<style lang="scss">
</style>
