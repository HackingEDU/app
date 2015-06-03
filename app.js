var React = require('react');
var HackingEduApp = require('./components/HackingEduApp.react');

React.render(
  <HackingEduApp socket={io.connect()}/>,
  document.getElementById('hackingedu-app')
);
