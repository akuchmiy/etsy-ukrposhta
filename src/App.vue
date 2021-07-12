<template>
  <Nav id="nav" class="mb-3"></Nav>
  <router-view />
  <NotificationContainer></NotificationContainer>
</template>

<script>
  import Nav from '@/components/Nav.vue'
  import NotificationContainer from '@/components/NotificationContainer.vue'
  export default {
    components: {
      Nav,
      NotificationContainer,
    },
    created() {
      this.$store.dispatch('api/getLocalAccessCredentials')

      if (
        !window.location.href.endsWith('/authorization') &&
        !this.$store.state.api.accessToken
      ) {
        window.location.assign('/authorization')
      } else {
        this.$store
          .dispatch('receipts/getShopId')
          .then(() => this.$store.dispatch('receipts/getReceipts'))
      }
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
