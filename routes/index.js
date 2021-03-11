const express = require('express')
const router = express.Router()
const { getFollowers, getUserTimeLine, follow } = require('../services/twitter');
const { addTweetToDb, addUserTooDb, latestTweet } = require('../services/common');
const { handleResponse } = require('../utils/responseHandler');

router.get('/recent-tweets', async (req, res) => {
    try {
        const tweet = await latestTweet();
        let response = [];
        const { follower = false } = req.query;

        if (follower) {
            const { users } = await getFollowers();
            if (users.length) {
                await Promise.all(users.map(async user => await addUserTooDb({ ...user, type: "FOLLOWER" })))
                let data = await Promise.all(users.map(async (user) =>
                    await getUserTimeLine({
                        trim_user: true,
                        exclude_replies: true,
                        screen_name: user.screen_name,
                        since_id: tweet.tweetid
                    })
                ))
                data.forEach(d => {
                    response = [...response, ...d]
                });
            }
        } else {
            response = await getUserTimeLine({
                trim_user: true,
                exclude_replies: true,
                since_id: tweet.tweetid
            });
        }

        await Promise.all(response.map(async r => {
            addTweetToDb(r);
        }))

        return handleResponse(res, 200, 'Fetched Recent Tweets', response);

    } catch (error) {
        return handleResponse(res, 500, '', error)
    }
})

router.post('/follow', async (req, res) => {
    try {
        let response = await follow(req.body);
        await addUserTooDb({ ...response, type: 'FOLLOWING' });
        return handleResponse(res, 200, `You now following ${response.name}!!`)
    } catch (error) {
        return handleResponse(res, 500, 'error', error)
    }
})

module.exports = router
