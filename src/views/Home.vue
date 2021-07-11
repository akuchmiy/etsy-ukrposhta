<template>
  <div class="container home">
    <h1 class="text-center">Receipts</h1>
    <p>
      {{ accessToken }} <br />
      {{ accessSecret }}
    </p>
    <ReceiptItem
      v-for="receipt of receipts"
      :key="receipt.receipt_id"
      :receiptValue="receipt"
    ></ReceiptItem>
  </div>
</template>

<script>
  import ReceiptItem from '@/components/ReceiptItem.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      ReceiptItem,
    },
    computed: {
      ...mapState('api', ['accessToken', 'accessSecret']),
      ...mapState('receipts', ['receipts']),
    },
    created() {},
  }
</script>

<style scoped></style>
