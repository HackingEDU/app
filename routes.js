var React = require('react'),
  HackingEduApp = require('./components/HackingEduApp.react'),
  Tweet = require('./models/Tweet');

module.exports = {

  index: function(req, res) {
    // Call static model method to get tweets in the db
    Tweet.getTweets(0,0, function(tweets, pages) {
      // Render React to a string, passing in our fetched tweets
      var markup = React.renderToString(<HackingEduApp tweets={tweets}/>);

      // Render our 'home' template
      res.render('home', {
        markup: markup // Pass rendered react markup
      });
    });
  },

  page: function(req, res) {
    // Fetch tweets by page via param
    Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {

      // Render as JSON
      res.send(tweets);

    });
  }

}
