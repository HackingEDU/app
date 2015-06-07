var socket = io.connect();
var ts = new TwitterStream(socket, '#tweet_list', 10);

//modals
$('#sponsors-modal-link').animatedModal({
	modalTarget: 'sponsors-modal',
	animatedIn: 'lightSpeedIn',
	animatedOut: 'bounceOutLeft'
});

$('#speakers-modal-link').animatedModal({
	modalTarget: 'speakers-modal',
	animatedIn: 'lightSpeedIn',
	animatedOut: 'bounceOutLeft'
});

$('#workshops-modal-link').animatedModal({
	modalTarget: 'workshops-modal',
	animatedIn: 'lightSpeedIn',
	animatedOut: 'bounceOutLeft'
});

// Smooth scrolling plugin by Chris Coiyer
// Source: http://css-tricks.com/snippets/jquery/smooth-scrolling/
$(document).on('click', 'a[href*=#]:not([href=#])', function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top
	    }, 1000);
	    window.location.hash = target.selector;
	    return false;
	  }
	}
});