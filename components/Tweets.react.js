var React = require('react');
var Tweet = require('./Tweet.react.js');

module.exports = Tweets = React.createClass({
  render: function(){
    var content = this.props.tweets.map(function(tweet){
      return (
        <Tweet key={tweet.id} tweet={tweet} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <div id="tweets" className="row">
        <h1 className="text-center">Twitter Feed</h1>
        <ul className="tweets" ref="tweet_list" id="tweets">{content}</ul>
        <a href="https://twitter.com/share" class="twitter-share-button" data-url="http://hackingedu.co" data-text="HackingEDU: The largest hackathon on the west coast!" data-size="large" data-related="hackingedusf" data-hashtags="hackingedu" data-dnt="true">Tweet About Us!</a>
        {function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs')}
      </div>
    )

  }

});
