
const twitter = require('./twitter');
const { addUserTooDb } = require('./common');

const initUser = async () => {
  try {
    let response = await twitter.getUserDetail({include_entities: false});
    addUserTooDb(response);
  } catch (error) {
    console.log(error);
  }
}


module.exports = {
  initUser
}