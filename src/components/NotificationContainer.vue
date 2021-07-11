<template>
  <div class="notification-container">
    <NotificationBar
      class="mb-2"
      v-for="notification of notifications"
      :key="notification.id"
      :notification="notification"
    ></NotificationBar>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import NotificationBar from '@/components/NotificationBar.vue'
  export default {
    components: {
      NotificationBar,
    },
    computed: {
      ...mapState('notifications', ['notifications']),
    },
  }
</script>

<style>
  .notification-container {
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 10px;
    border-radius: 15px;
  }
</style>
