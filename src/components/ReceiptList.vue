<template>
  <div class="receipt-list">
    <ReceiptListItem
      v-for="receipt of receipts"
      :key="receipt.receipt_id"
      :receiptValue="receipt"
    ></ReceiptListItem>
  </div>
</template>

<script>
  import ReceiptListItem from '@/components/ReceiptListItem.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      ReceiptListItem,
    },
    computed: {
      ...mapState('api', ['accessToken', 'accessSecret']),
      ...mapState('receipts', ['receipts']),
    },
  }
</script>

<style></style>
