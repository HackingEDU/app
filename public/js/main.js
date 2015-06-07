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