var React = require('react');
module.exports = Header = React.createClass({
  render: function(){
    return (
      <div>
            <div className="splash">
            	<div className="nav text-right">
            		<img src="img/hacklogo.png" className="logo"></img>
            		<a href="#home">Home</a>
            		<a href="#why">Why</a>
            		<a href="#event">Event</a>
            		<a href="#tday">Training Day</a>
            		<a href="#apply">Apply</a>
            	</div>
            	<h1 className="hero">
            		The <b>Education</b><br/>Hackathon
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
            			<b>+1000</b><br/>
            			<span>Cool Stats</span>
            		</div>
            		<div className="col-4">
            			<b>500,000</b><br/>
            			<span>That prove</span>
            		</div>
            		<div className="col-4">
            			<b>90K</b><br/>
            			<span>The shittiness</span>
            		</div>
            		<div className="col-4">
            			<b>750</b><br/>
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
            		12 -15 November 2015<br/>
            		This really awesome venue<br/>
            		1pm Onwards<br/>
            	</p>
            	<div className="container">
            		<div className="row marginTop40 eventDetails">
            			<div className="row">
            				<div className="col-3-float">
            				<b>What should I br/ing?</b>
            				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            				consequat. </p>
            				</div>

            				<div className="col-3-float">
            				<b>What should I br/ing?</b>
            				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            				consequat. </p>
            				</div>

            				<div className="col-3-float">
            				<b>What should I br/ing?</b>
            				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            				consequat. </p>
            				</div>

            				<div className="col-3-float">
            				<b>What should I br/ing?</b>
            				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            				consequat. </p>
            				</div>

            				<div className="col-3-float">
            				<b>What should I br/ing?</b>
            				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            				consequat. </p>
            				</div>

            				<div className="col-3-float">
            				<b>What should I br/ing?</b>
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
            <div className="tdaySection fluid-container" id="tday">
                  <h2>TRaining Day</h2>
                  <div className="highlightReel">
                        <div className="highlightContent">
                              <div className="highlight speakers">
                                    <h2>Speakers</h2>
                              </div>
                              <div className="highlight swag">
                                    <h2>Swag</h2>
                              </div>
                              <div className="highlight workshops">
                                    <h2>Workshops</h2>
                              </div>
                              <div className="clear"></div>
                              <div className="highlightDetail speakers">
                                    <div className="col3">
                                          <h2>Speakers</h2>
                                    </div>
                                    <div className="col3">
                                          <img src="public/img/tday1.jpg" />
                                    </div>
                                    <div className="col6">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="cross">X</div>
                              </div>
                              <div className="highlightDetail swag">
                                    <div className="col3">
                                          <h2>Speakers</h2>
                                    </div>
                                    <div className="col3">
                                          <img src="public/img/tday2.jpg" />
                                    </div>
                                    <div className="col6">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="cross">X</div>
                              </div>
                              <div className="highlightDetail workshops">
                                    <div className="col3">
                                          <h2>Speakers</h2>
                                    </div>
                                    <div className="col3">
                                          <img src="public/img/tday3.jpg" />
                                    </div>
                                    <div className="col6">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="cross">X</div>
                              </div>
                        </div>
                  </div>

                  <p className="marginTop40 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="fluid-container sponsors" id="sponsors">
                  <div className="container">
                        <h2>Sponsors</h2>
                        <div className="tier1">
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                        </div>
                        <div className="tier2">
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                        </div>
                        <div className="tier3">
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                        </div>
                        <div className="tier4">
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                              <figure className="sponsorName"></figure>
                        </div>
                  </div>
            </div>

            <div className="footer fluid-container text-center">
                  <h2>Are you ready to <b>change education</b>?</h2>
                  <a className="sexy" href="#apply">Apply Now!</a>
                  <div className="social">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-medium"></i>
                  </div>
            </div>

      </div>
    )
  }
});
