<template>
  <div class="container">
    <h1 class="mb-3">App connection</h1>

    <div v-if="href">
      <p>Please, visit <a :href="href">this</a> page to authorize.</p>
      <p>
        And enter the verifier here
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </p>
      <div class="row">
        <div class="col-4">
          <input class="form-control" v-model="verifier" type="text" />
        </div>
        <div class="col-3">
          <button
            class="btn btn-primary"
            @click="getAccess(verifier)"
            :disabled="!verifier"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Sorry, but there is no connection to the server right now.</p>
      <p>Please, try again later.</p>
    </div>
  </div>
</template>

<script>
  import ApiService from '@/service/APIService'

  export default {
    name: 'Authentication',
    components: {},
    data() {
      return {
        ***REMOVED***
        ***REMOVED***
        reqToken: '',
        reqSecret: '',
        verifier: '',
        href: '',
      }
    },
    methods: {
      getRequest() {
        return ApiService.requestToken(this.apiKey, this.sharedSecret)
          .then((response) => {
            this.href = response.data.authorizeUrl
            this.reqToken = response.data.token
            this.reqSecret = response.data.tokenSecret
          })
          .catch(() => (this.href = ''))
      },
      getAccess(verifier) {
        ApiService.accessToken(this.reqToken, this.reqSecret, verifier).then(
          (response) => {
            this.$store.state.accessToken = response.data.token
            this.$store.state.accessSecret = response.data.tokenSecret
            console.log(
              'Access token + secret: ',
              response.data.token,
              response.data.tokenSecret
            )
          }
        )
      },
    },
    created() {
      const apiKey = localStorage.getItem('api_key')
      const sharedSecret = localStorage.getItem('shared_secret')
      if (apiKey && sharedSecret) {
        this.apiKey = apiKey
        this.sharedSecret = sharedSecret
        console.log('localStorage api data: ', apiKey, sharedSecret)
      }

      // this.getRequest()
    },
  }
</script>

<style scoped></style>
