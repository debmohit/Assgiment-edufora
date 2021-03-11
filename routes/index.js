const express = require('express')
const router = express.Router()

const tweets = require('./tweets')

router.use('/', tweets)

module.exports = router 
