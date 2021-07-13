<template>
  <div class="container about">
    <h1>Your address <span class="fs-6 text-muted">(sent from)</span></h1>
    <div class="mb-3">
      <div
        class="row align-items-center"
        v-for="(value, label) in senderAddress"
        :key="label"
      >
        <label class="col-3">
          <b>{{ label }}</b></label
        >
        <component
          :is="tag"
          class="col m-0"
          :class="inputClass"
          :value="value"
          :name="label"
          @change="changeValue"
          >{{ value }}</component
        >
      </div>
    </div>
    <button @click="change" class="btn btn-success">
      {{ isInput ? 'Submit' : 'Change' }}
    </button>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        tag: 'p',
        updatedAddress: {},
      }
    },
    computed: {
      ...mapState('ukrposhta', ['senderAddress']),
      inputClass() {
        if (this.tag === 'input') {
          return 'form-control-sm'
        }
        return ''
      },
      isInput() {
        return this.tag === 'input'
      },
    },
    methods: {
      change() {
        if (this.isInput) {
          this.$store.dispatch(
            'ukrposhta/setSenderAddress',
            this.updatedAddress
          )
          this.tag = 'p'
        } else {
          this.tag = 'input'
        }
      },
      changeValue(e) {
        const labelName = e.target.name
        this.updatedAddress[labelName] = e.target.value
      },
    },
    created() {
      this.$store.dispatch('ukrposhta/getLocalAddress')
    },
  }
</script>
