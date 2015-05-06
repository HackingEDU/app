var React = require('react');
var HackingEduApp = require('./components/HackingEduApp.react');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server
React.render(
  <HackingEduApp tweets={initialState}/>,
  document.getElementById('hackingedu-app')
);
