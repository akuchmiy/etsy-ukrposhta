<template>
  <div class="buttons row mb-3 g-0 justify-content-between">
    <select class="form-select col-auto w-25" @change="selectChange">
      <option value="all">All</option>
      <option value="shipped">Shipped</option>
      <option value="unshipped">Not Shipped</option>
    </select>
    <button class="refresh btn btn-primary col-auto" @click="refresh">
      Reload
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    emits: ['change'],
    data() {
      return {
        options: {
          all: null,
          shipped: {
            name: 'was_shipped',
            value: true,
          },
          unshipped: {
            name: 'was_shipped',
            value: false,
          },
        },
      }
    },
    methods: {
      ...mapActions('receipts', ['getShopId', 'getReceipts']),
      refresh() {
        this.getShopId().then(() => this.getReceipts())
      },
      selectChange(event) {
        const option = this.options[event.target.value]
        this.$emit('change', option)
      },
    },
  }
</script>

<style>
  .buttons {
    margin: 0 -5px;
  }
  .buttons > * {
    margin: 0 5px;
  }
</style>
