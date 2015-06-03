var React = require('react');

module.exports = Tweet = React.createClass({
  render: function(){
    var tweet = this.props.tweet;
    return (
      <li className="tweet">
        <a href={'https://www.twitter.com/'+tweet.user.screen_name+'/status/'+tweet.id} target="_blank"> <span className="screen-name">@{tweet.user.screen_name}</span><span className="content">{tweet.text}</span>
        </a>
      </li>
    )
  }
});
