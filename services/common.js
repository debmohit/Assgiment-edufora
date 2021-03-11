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


module.exports = {
    addUserTooDb,
}