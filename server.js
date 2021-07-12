const express = require('express')
// const path = require('path')
let Client = require('oauth-1-client')

const app = express()
const port = process.env.PORT || 8000

const requestUrl = 'https://openapi.etsy.com/v2/oauth/request_token'
const accessUrl = 'https://openapi.etsy.com/v2/oauth/access_token'
const apiHostName = 'openapi.etsy.com'

***REMOVED***
***REMOVED***

let client = new Client({
  key: apiKey,
  secret: sharedSecret,
  requestUrl,
  accessUrl,
  apiHostName,
})

app.get('/request', function (req, res) {
  // let { api_key: apiKey, shared_secret: sharedSecret } = req.query

  client
    .requestToken()
    .then((result) => {
      res.send(result)
    })
    .catch(() => res.json({}))
})

app.get('/access', function (req, res) {
  let {
    req_token: requestToken,
    req_secret: requestSecret,
    verifier,
  } = req.query

  client
    .accessToken(requestToken, requestSecret, verifier)
    .then((result) => {
      res.send(result)
    })
    .catch(() => res.json({}))
})

app.get('/get', function (req, res) {
  let {
    path,
    token,
    secret,
    query
  } = req.query

  client.get('/v2' + path, query, token, secret).then(result => {
    res.send(result)
  })
  
})

app.listen(port)
console.log('Server started at http://localhost:' + port)
