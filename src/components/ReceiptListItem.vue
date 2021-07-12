<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">
        {{ receipt.name }}
        <span class="badge bg-secondary">{{ receipt.city }}</span> |
        <span
          class="badge"
          :class="receipt.was_shipped ? 'bg-success' : 'bg-danger'"
          >{{ receipt.was_shipped ? 'Shipped' : 'Not shipped' }}</span
        >
      </h3>
      <p class="card-text">{{}}</p>
      <div class="mb-3">
        <div
          class="row align-items-center"
          v-for="label of labels"
          :key="label"
        >
          <label class="col-3">
            <b>{{ camelLabel(label) }}</b></label
          >
          <component
            :is="tag"
            class="col"
            :class="inputClass"
            :value="receipt[label]"
            :name="label"
            @change="changeValue"
            >{{ receipt[label] }}</component
          >
        </div>
      </div>
      <button @click="change" class="btn btn-success">
        {{ isInput ? 'Submit' : 'Change' }}
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  export default {
    props: {
      receiptValue: Object,
    },
    data() {
      return {
        tag: 'p',
        receipt: this.receiptValue,
      }
    },
    computed: {
      ...mapState('receipts', ['labels']),
      inputClass() {
        if (this.tag === 'input') {
          return 'form-control-sm'
        }
        return ''
      },
      isInput() {
        return this.tag === 'input'
      },
      ...mapGetters('receipts', ['getReceiptById']),
    },
    methods: {
      change() {
        if (this.isInput) {
          this.$store.dispatch('receipts/updateReceipt', this.receipt)
          this.receipt = this.getReceiptById(this.receipt.receipt_id)
          this.tag = 'p'
        } else {
          this.tag = 'input'
        }
      },
      changeValue(e) {
        const labelName = e.target.name
        this.receipt[labelName] = e.target.value
      },
      camelLabel(label) {
        return label.charAt(0).toUpperCase() + label.slice(1)
      },
    },
  }
</script>

<style scoped>
  .card {
    background: #f3f3f3;
  }
  .card-text {
    font-size: 18px;
  }
  input {
    display: inline-block;
  }
  .w-100 {
    width: 100%;
  }
  p {
    margin: 0;
  }
</style>
