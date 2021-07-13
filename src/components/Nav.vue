<template>
  <div class="navbar justify-content-center bg-light">
    <router-link class="h4" to="/">Home</router-link>
    <router-link class="h4" to="/settings">Settings</router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .navbar {
    padding: 20px;
    color: black;
  }
  .navbar a {
    color: #2c3e50;
    padding: 0 20px;
    text-decoration: none;
  }
  .navbar a:hover {
    text-decoration: underline;
  }
  a.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
