<template>
  <div class="p-0">
    <input
      class="receipt__list-checkbox form-check-input"
      type="checkbox"
      :value="receipt.send_to_ukrposhta"
      :checked="receipt.send_to_ukrposhta"
      @change="updateReceipt"
    />
  </div>
</template>

<script>
  export default {
    props: {
      receipt: Object,
    },
    compuded: {
      checked() {
        return this.send_to_ukrposhta
      },
    },
    methods: {
      updateReceipt() {
        this.$store.commit('receipts/UPDATE_RECEIPT', {
          receipt_id: this.receipt.receipt_id,
          send_to_ukrposhta: !this.receipt.send_to_ukrposhta,
        })
      },
    },
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
