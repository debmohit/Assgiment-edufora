const tweetsModel = require('../models/tweets.model')
const userModel = require('../models/user.model')

async function addUserTooDb(user) {
    try {
        let { id_str: userid, name, screen_name, location, type } = user
        // check if user already exists
        let ifuserExists = await userModel.findOne({ userid })
        if (ifuserExists) return
        await new userModel({
            userid, name, screen_name, location, type
        }).save()
    } catch (e) {
        console.log(e)
        throw e;
    }
}

async function addTweetToDb(tweet) {
    try {
        let { id_str: tweetid, text, user, created_at, retweet_count } = tweet
        if (!tweetid || !user.id_str) {
            console.log("Missing tweet or user id")
            return
        }

        let istweetExists = await tweetsModel.findOne({ tweetid })
        if (istweetExists) return
        await new tweetsModel({
            tweetid,
            userid: user.id_str,
            text,
            created_at,
            retweet_count
        }).save()
    } catch (e) {
        console.log(e)
        throw e;
    }

}

async function latestTweet() {
    try {
        let tweet = await tweetsModel.find().sort({ created_at: -1 }).limit(1);
        return tweet;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

async function getRandomFollower() {
    try {
        let user = await userModel.aggregate([{ $match: { type: "FOLLOWING" } }]).sample(1);
        return user;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = {
    addUserTooDb,
    addTweetToDb,
    latestTweet,
    getRandomFollower
}