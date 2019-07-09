<template>
  <v-layout>
    <v-flex>
      <v-card v-for="(skill, index) in skills">
        <v-card-title class="secondary">
          {{ skill.lang }}
        </v-card-title>
        <v-card-text>
          {{ skill.desc }}
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
      skills: [
        {
          lang: 'Java',
          span: '',
          desc: '業務系アプリケーションのバックエンドを担当。DBはOracle, MySQL, PostgreSQLとやり取りをしていた。最後に使用したときはguavaを使いJ2EEでAPIを構築していた。この時JUnitを本格的に使用。'
        },
        {
          lang: 'C, MFC',
          span: '',
          desc: '解析アプリケーションの保守で使用。C#と接続するためにCRLを使ったりもしていた。'
        },
        {
          lang: 'PHP, Vue',
          span: '現在使っている言語。割合としては半々。',
          desc: ''
        },
        {
          lang: 'Perl',
          span: '',
          desc: '外資系半導体企業の時に使用。テキスト操作で威力を発揮するので、今でも時々使用。',
        },
        {
          lang: 'Python',
          span: '',
          desc: '解析アプリケーション保守時の要素開発案件で出会った言語。この時、djangoに出会いフルスタックフレームワークの力を実感。これがきっかけで個人開発もpythonでした。'
        }
      ]
    }
  }
}

</script>

<style lang="scss">
</style>
