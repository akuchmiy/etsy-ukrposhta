<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <p>{{ accessToken }} {{ accessSecret }}</p>
</template>

<script>
  import ApiService from '@/service/APIService'
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState('api', ['accessToken', 'accessSecret']),
    },
    created() {
      ApiService.getShopReceipts(
        this.accessToken,
        this.accessSecret,
        25526257
      ).then((response) => console.log(response))
    },
  }
</script>

<style scoped>
  div {
    text-align: center;
  }
</style>
