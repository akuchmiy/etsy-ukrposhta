<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <p>{{ accessToken }} {{ accessSecret }}</p>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState('api', ['accessToken', 'accessSecret']),
      ...mapState('receipts', ['receipts']),
    },
    methods: {
      logReceipts() {
        console.log(this.receipts)
      },
    },
    created() {
      this.$store
        .dispatch('receipts/getReceipts')
        .then(() => this.logReceipts())
    },
  }
</script>

<style scoped>
  div {
    text-align: center;
  }
</style>
