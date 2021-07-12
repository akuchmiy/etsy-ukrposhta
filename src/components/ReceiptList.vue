<template>
  <div class="d-flex flex-column">
    <ReceiptListControls @change="filterReceipts"></ReceiptListControls>
    <div class="receipt__list">
      <ReceiptListItem
        class="receipt__list-item mb-2"
        v-for="receipt of receipts"
        :key="receipt.receipt_id"
        :receiptValue="receipt"
      ></ReceiptListItem>
    </div>
  </div>
</template>

<script>
  import ReceiptListItem from '@/components/ReceiptListItem.vue'
  import ReceiptListControls from '@/components/ReceiptListControls.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      ReceiptListItem,
      ReceiptListControls,
    },
    data() {
      return {
        option: null,
      }
    },
    computed: {
      ...mapState({
        receipts(state) {
          const receipts = state.receipts.receipts
          if (!(this.option && this.option.name)) return receipts

          return receipts.filter((receipt) => {
            return receipt[this.option.name] === this.option.value
          })
        },
      }),
    },
    methods: {
      filterReceipts(option) {
        this.option = option
      },
    },
  }
</script>

<style>
  /* .receipt__list .receipt__list-item {
    margin-bottom: 5px;
  } */
</style>
