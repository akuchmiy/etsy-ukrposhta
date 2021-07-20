<template>
  <Nav id="nav" class="mb-3"></Nav>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
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
        this.$route.path !== '/authorization' &&
        !this.$store.state.api.accessToken
      ) {
        this.$router.push('/authorization')
      } else {
        this.$store
          .dispatch('receipts/getShopId')
          .then(() => this.$store.dispatch('receipts/getReceipts'))
          .then(() => this.$store.dispatch('receipts/getCountries'))
      }
    },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.4s;
  }

  .fade-enter-from {
    opacity: 0.4;
    transform: translate(-100%, 0);
  }

  .fade-leave-to {
    opacity: 0.4;
    transform: translate(100%, 0);
  }
</style>
