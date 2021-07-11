<template>
  <div class="notification alert" :class="notificationClass" role="alert">
    <p class="notif-message">{{ notification.message }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      notification: Object,
    },
    computed: {
      notificationClass() {
        return `alert-${this.notification.type}`
      },
    },
    mounted() {
      setTimeout(() => {
        this.$store.dispatch('notifications/remove', this.notification)
      }, 5000)
    },
  }
</script>

<style>
  .notif-message {
    margin: 0;
  }
</style>
