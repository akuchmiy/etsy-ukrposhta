<template>
  <div class="container home">
    <h1 class="text-center">Receipts</h1>
    <p>
      {{ accessToken }} <br />
      {{ accessSecret }}
    </p>
    <ReceiptList></ReceiptList>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ReceiptList from '@/components/ReceiptList.vue'
  export default {
    components: {
      ReceiptList,
    },
    computed: {
      ...mapState('api', ['accessToken', 'accessSecret']),
    },
  }
</script>

<style scoped></style>
