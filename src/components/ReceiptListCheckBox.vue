<template>
  <div class="p-0">
    <input
      class="receipt__list-checkbox form-check-input"
      type="checkbox"
      :value="send_to_ukrposhta"
      :checked="checked"
      @change="updateReceipt"
    />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      receiptId: Number,
    },
    computed: {
      ...mapState({
        send_to_ukrposhta(state) {
          const receipt = state.receipts.receipts.find(
            (receipt) => receipt.receipt_id === this.receiptId
          )
          if (!receipt.send_to_ukrposhta) return false
          return receipt.send_to_ukrposhta
        },
      }),
      checked() {
        return this.send_to_ukrposhta
      },
    },
    methods: {
      updateReceipt() {
        this.$store.commit('receipts/UPDATE_RECEIPT', {
          receipt_id: this.receiptId,
          send_to_ukrposhta: !this.send_to_ukrposhta,
        })
      },
    },
    // mounted() {
    //   const send = this.getReceiptById(this.receiptId).send_to_ukrposhta
    //   if (!send) return
    //   this.send_to_ukrposhta = send
    // },
  }
</script>

<style scoped>
  .receipt__list-checkbox {
    margin: 0;
    height: 100%;
    width: 100%;
    /* border: 1px solid; */
    outline: 0;
  }
</style>
