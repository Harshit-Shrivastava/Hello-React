var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = "Hero";
var customMessage = "This is the default message."

ReactDOM.render(
  <Greeter name={firstName} message={customMessage}/>,
  document.getElementById('app')
);
