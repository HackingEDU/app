var path = require('path');

module.exports = {
  home: function(req, res) {
    res.sendFile(path.join(__dirname, 'public/home.html'));
  },

  page: function(req, res) {
    // Fetch tweets by page via param
    Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {

      // Render as JSON
      res.send(tweets);

    });
  }

}
