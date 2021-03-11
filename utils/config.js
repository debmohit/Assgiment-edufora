module.exports = {
    port: 8080,
    mongoUrl: 'mongodb://localhost:27017/twitter-bot',
    tweetInterval: 1000 * 60 * 30,

    twitterConfig : {
        consumer_key: "",
        consumer_secret: "",
        access_token_key: "",
        access_token_secret: "",
    }
}