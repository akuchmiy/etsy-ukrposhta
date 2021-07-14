<template>
  <div class="buttons row mb-3 g-0">
    <select class="form-select col-3" @change="selectChange">
      <option value="all">All</option>
      <option value="shipped">Shipped</option>
      <option value="unshipped">Not Shipped</option>
    </select>
    <button class="btn btn-primary col-3" @click="$emit('select')">
      Select all
    </button>
    <button class="refresh btn btn-primary col-3" @click="refresh">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-clockwise"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
        />
        <path
          d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
        />
      </svg>
      Reload
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    emits: ['change', 'select'],
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
  .buttons select {
    max-width: 25%;
  }
  /* .buttons {
    margin: 0 -5px;
  }
  .buttons > * {
    margin: 0 5px;
  } */
</style>
