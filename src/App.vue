<template>
  <Nav id="nav" class="mb-3"></Nav>
  <router-view />
</template>

<script>
  import Nav from '@/components/Nav.vue'
  export default {
    components: {
      Nav,
    },
    created() {
      if (
        !window.location.href.endsWith('/authorization') &&
        !this.$store.state.api.accessToken
      ) {
        window.location.assign('/authorization')
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
