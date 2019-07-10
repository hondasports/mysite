<template>
  <v-layout>
    <v-flex>
      <v-card v-for="(skill, index) in skills" class="mb-2">
        <v-card-title class="secondary">
          {{ skill.lang }}
        </v-card-title>
        <v-card-text>
          {{ skill.desc }}
        </v-card-text>
        <v-card-text>
          使用年数: {{ skill.span }}
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
          span: '5年以上',
          desc: '業務系アプリケーションのバックエンドを担当。DBはOracle, MySQL, PostgreSQL。。最後に使用した時はguavaを使いJ2EEでAPIを構築。。この時JUnitを本格的に使用。'
        },
        {
          lang: 'C, MFC',
          span: '3年',
          desc: '解析アプリケーションの保守で使用。C#と接続するためにCRLを使ったりもしていた。'
        },
        {
          lang: 'PHP, Vue',
          span: '1年',
          desc: '現在使っている言語。割合としては半々。'
        },
        {
          lang: 'Perl',
          span: '5年以上',
          desc: '外資系半導体企業の時に使用。テキスト操作で威力を発揮するので、今でも時々使用。',
        },
        {
          lang: 'Python',
          span: '1年 (個人開発も含む)',
          desc: '解析アプリケーション保守時の要素開発案件で使用。djangoを使いWebAPIのプロトタイプを作成。これがきっかけで個人開発のtwitter botはpythonで作成。'
        }
      ]
    }
  }
}

</script>

<style lang="scss">
</style>
