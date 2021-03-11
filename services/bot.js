
const twitter = require('./twitter');
const { addUserTooDb, addTweetToDb, getRandomFollower } = require('./common');

const initUser = async () => {
  try {
    let response = await twitter.getUserDetail({ include_entities: false });
    addUserTooDb(response);
  } catch (error) {
    console.log(error);
  }
}

const createTweet = async () => {
  try {
    let date = new Date();
    let follower = await getRandomFollower();
    if(follower.length) {
      let response = await twitter.tweet({ status: `Please ignore ${date} @${follower[0].screen_name}` });
      addTweetToDb(response);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  initUser,
  createTweet
}