var React = require('react');

module.exports = Header = React.createclassName({
  render: function(){
    return (
      <div className="splash">
      	<div className="nav text-right">
      		<img src="public/img/hacklogo.png" className="logo">
      		<a href="#home">Home</a>
      		<a href="#why">Why</a>
      		<a href="#event">Event</a>
      		<a href="#tday">Training Day</a>
      		<a href="#apply">Apply</a>
      	</div>
      	<h1 className="hero">
      		The <b>Education</b><br>Hackathon
      	</h1>
      	<div className="down">
      		<i className="fa fa-angle-down fa-2x"></i>
      	</div>
      </div>
      <div className="whySection fluid-container" id="why">
      	<div className="container">
      	<h2>Why Hacking Edu?</h2>
      	<div className="row coolNumbers text-center marginTop40">
      		<div className="col-4">
      			<b>+1000</b><br>
      			<span>Cool Stats</span>
      		</div>
      		<div className="col-4">
      			<b>500,000</b><br>
      			<span>That prove</span>
      		</div>
      		<div className="col-4">
      			<b>90K</b><br>
      			<span>The shittiness</span>
      		</div>
      		<div className="col-4">
      			<b>750</b><br>
      			<span>Of our system</span>
      		</div>
      	</div>
      	<div className="row marginTop40 whyDescription">
      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      	
      	<p className="quote">"A really sexy quote by an amazing person goes here"</p>
      	
      	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      	
      	<p className="quote">"Because someone had to <b>change this</b>, we stepped up to <b>lead the change</b>"</p>
      	</div>
      	</div>
      </div>
      <div className="eventSection fluid-container" id="event">
      	<h2>The Hackathon</h2>
      	<p className="eventDetails">
      		12 -15 November 2015<br>
      		This really awesome venue<br>
      		1pm Onwards<br>
      	</p>
      	<div className="container">
      		<div className="row marginTop40 eventDetails">
      			<div className="row">
      				<div className="col-3-float">
      				<b>What should I bring?</b>
      				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      				consequat. </p>
      				</div>

      				<div className="col-3-float">
      				<b>What should I bring?</b>
      				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      				consequat. </p>
      				</div>

      				<div className="col-3-float">
      				<b>What should I bring?</b>
      				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      				consequat. </p>
      				</div>

      				<div className="col-3-float">
      				<b>What should I bring?</b>
      				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      				consequat. </p>
      				</div>

      				<div className="col-3-float">
      				<b>What should I bring?</b>
      				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      				consequat. </p>
      				</div>

      				<div className="col-3-float">
      				<b>What should I bring?</b>
      				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      				consequat. </p>
      				</div>
      				<div className="clear"></div>
      			</div>
      		</div>
      	</div>
      </div>


    )
  }
});
