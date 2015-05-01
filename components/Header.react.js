var React = require('react');

module.exports = Header = React.createClass({
  render: function(){
    return (
      <header className="Header">
        <div id="#header">
          <img alt="HackingEDU" src="http://hackingedu.co/assets/img/hacklogo-white-no-border.png"></img>
          <span className="tagline" id="tagline"></span>
          <span className="social-links">
            <a href="https://fb.com/hackingedusf" target="rss"><i className="ion-social-facebook hvr-grow"></i></a>
            <a href="https://twitter.com/hackingedusf" target="rss"><i className="ion-social-twitter hvr-grow"></i></a>
            <a href="http://instagr.am/hackingedusf" target="rss"><i className="ion-social-instagram hvr-grow"></i></a>
            <a href="mailto:team@hackingedu.co" target="rss"><i className="ion-android-mail hvr-grow"></i></a>
          </span>
        </div>
        <a href="#tweets" id="skip" title="Skip to content">
          <i className="ion-chevron-down"></i>
        </a>
      </header>


    )
  }
});
