var React = require('react');
var Tweet = require('./Tweet.react.js');

module.exports = Tweets = React.createClass({

  // Render our tweets
  render: function(){

    // Build list items of single tweet components using map
    var content = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet._id} tweet={tweet} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <div id="tweets">
        <h1>HackingEDU Twitter Feed Demo</h1>
        <ul className="tweets" id="tweets">{content}</ul>
      </div>
    )

  }

});
