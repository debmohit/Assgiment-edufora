<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Twitter Bot Edfora" />

  &#xa0;

  <!-- <a href="https://twitterbotedfora.netlify.app">Demo</a> -->
</div>

<h1 align="center">Twitter Bot Edfora</h1>

## :sparkles: Features ##

1.    Get my recent tweets.

2.    Follow someone.

3.    Get my followers recent tweets.

4.    Tweets in every 30 mins and tagging randomly from the following list.

5.    Every tweet read or written by the bot should be stored in the database. Also maintain the follower and following list in the database.

6.    Make API to retrieve the tweet data.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/debmohit/Assgiment-edufora.git

# Access
$ cd twitter-bot-edfora

# Install dependencies
$ yarn

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:8080>

```

Note:- Install Mongo db If not installed, Otherwise add db connection string in config.js file against mongoUrl key.

## API Refrence ##

```bash

1) Recent Tweets
    API - /api/recent-tweets
    Method - GET

2) Recent Tweets
    API - /api/recent-tweets?follower=true
    Method - GET

3) Follow Someone
    API - /api/follow
    Method - POST
    Payload - {
      name : # screen_name/twitter handle
    }
4) All Tweets
   API - /api/tweets
   Method - GET

```

<a href="#top">Back to top</a>
