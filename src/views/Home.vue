<template>
  <div class="container home">
    <div class="title">
      <h1 class="text-center">Receipts</h1>
    </div>
    <ReceiptList></ReceiptList>
  </div>
</template>

<script>
  import ReceiptList from '@/components/ReceiptList.vue'
  export default {
    components: {
      ReceiptList,
    },
  }
</script>

<style scoped></style>
