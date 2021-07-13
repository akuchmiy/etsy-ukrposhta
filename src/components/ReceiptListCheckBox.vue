<template>
  <div class="p-0">
    <input
      class="receipt__list-checkbox form-check-input"
      type="checkbox"
      :name="receiptId"
    />
  </div>
</template>

<script>
  export default {
    props: {
      receiptId: Number,
    },
    data() {
      return {}
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
