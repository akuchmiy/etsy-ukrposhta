<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
  import ApiService from '@/service/APIService'
  export default {
    created() {
      ApiService.getShopReceipts(
        this.$store.state.accessToken,
        this.$store.state.accessSecret,
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
