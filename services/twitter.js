const Twitter = require('twitter')
let { twitterConfig } = require('../utils/config')


let client = new Twitter(twitterConfig);

module.exports = {
    getUserDetail: async (params ={}) => await client.get('account/verify_credentials', params),
}