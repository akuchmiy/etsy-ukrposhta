<template>
  <div class="d-flex flex-column">
    <ReceiptListControls
      @change="filterReceipts"
      @select="selectAllReceipts"
    ></ReceiptListControls>
    <div
      class="receipt__list row mb-2 g-0"
      v-for="receipt of receipts"
      :key="receipt.receipt_id"
    >
      <ReceiptListCheckBox
        class="col-2 col-md-1"
        :receipt="receipt"
      ></ReceiptListCheckBox>
      <ReceiptListItem
        class="col-10 col-md-11"
        :receipt="receipt"
      ></ReceiptListItem>
    </div>
  </div>
</template>

<script>
  import ReceiptListItem from '@/components/ReceiptListItem.vue'
  import ReceiptListControls from '@/components/ReceiptListControls.vue'
  import ReceiptListCheckBox from '@/components/ReceiptListCheckBox.vue'
  import { mapState } from 'vuex'
  export default {
    components: {
      ReceiptListItem,
      ReceiptListControls,
      ReceiptListCheckBox,
    },
    data() {
      return {
        option: null,
        selected: false,
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
      selectAllReceipts() {
        this.receipts.forEach((receipt) => {
          this.$store.commit('receipts/UPDATE_RECEIPT', {
            ...receipt,
            send_to_ukrposhta: !receipt.send_to_ukrposhta,
          })
        })
      },
    },
  }
</script>

<style></style>
