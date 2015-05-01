var React = require('react');
var ga = require('react-google-analytics');
var GAInitiailizer = ga.Initializer;

ga('create', 'UA-53649803-1', 'auto');
ga('send', 'pageview');

module.exports = Analytics = React.createClass({
  render: function() {
    return (
      <div>
        <GAInitiailizer />
      </div>
    );
  }
});
