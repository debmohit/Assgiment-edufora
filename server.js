'use strict'

const express = require('express');
const cors = require('cors');
// use routes
const routes = require('./routes');
const { initUser, createTweet } = require('./services/bot');
const { mongoUrl, port, tweetInterval } = require('./utils/config');
const connectMongo = require('./utils/connectMongo')

const app = express();

// cors middleware
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

app.use('/api', routes)

connectMongo(mongoUrl).then(async () => {
    //Expecting this is only used by user who created the app in twitter developer
    await initUser();
    //It tweets in every 30 minutes
    setInterval(createTweet, tweetInterval);

    app.listen(port, () => {
        console.log(`server listening on ${port}`)
    })
})

