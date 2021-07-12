<template>
  <div class="container home">
    <div class="title">
      <h1 class="text-center">Receipts</h1>
    </div>
    <div class=""></div>
    <p>
      {{ accessToken }} <br />
      {{ accessSecret }}
    </p>
    <div>
      <button class="refresh btn btn-primary mb-2" @click="refresh">
        Refresh
      </button>
      <ReceiptList></ReceiptList>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ReceiptList from '@/components/ReceiptList.vue'
  export default {
    components: {
      ReceiptList,
    },
    computed: {
      ...mapState('api', ['accessToken', 'accessSecret']),
    },
    methods: {
      ...mapActions('receipts', ['getShopId', 'getReceipts']),
      refresh() {
        this.getShopId().then(() => this.getReceipts())
      },
    },
  }
</script>

<style scoped>
  .refresh {
  }
</style>
