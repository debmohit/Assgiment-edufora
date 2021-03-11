const Twitter = require('twitter')
let { twitterConfig } = require('../utils/config')


let client = new Twitter(twitterConfig);

module.exports = {
    getUserDetail: async (params ={}) => await client.get('account/verify_credentials', params),
    getFollowers: async (params={}) => await client.get(`followers/list`,params),
    getUserTimeLine: async (params={}) => await client.get(`statuses/user_timeline`,params),
    follow: async (params ={}) => await client.post('friendships/create', params),
}