<template>
  <div class="receipt__list">
    <ReceiptListItem
      class="receipt__list-item"
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

<style>
  .receipt__list .receipt__list-item {
    margin-bottom: 5px;
  }
</style>
