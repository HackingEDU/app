var TwitterStream = (function() {
	var TS = function(socket, listContainer, initialTweetCount) {
		this.socket = socket;
		this.container = listContainer;
		this.maxSize = initialTweetCount;
		var that = this;

		that.socket.on('tweet', function (data) {
    	that.addTweet(data);
		});

		that.socket.on('tweet_search_results', function(tweets) {
			$(that.container).html('');
  		for (var i = 0; i < that.maxSize; i++) {
  			$(that.container).append(buildTweet(tweets[i]));
  		}

  		$('.tweet').fadeIn(400);
		});

		this.getLastTweets(initialTweetCount);
	};

	TS.prototype.getLastTweets = function(amount) {
 		socket.emit('get_tweets', {amount: amount});
	};

	TS.prototype.addTweet = function(tweet) {
		if ($(this.container+' li').get().length < this.maxSize) {
			$(this.container).prepend(buildTweet(tweet));
		} else {
			var newList = shiftAndInsert($(this.container+' li').get(), tweet);
			$(this.container).html(newList.join(''));
		}

		$('.tweet').fadeIn(300);
	};

	var shiftAndInsert = function(list, tweet) {
		var newList = list;
		for (var i = list.length - 1; i > 0; i--) {
			newList[i] = newList[i - 1].outerHTML;
		}

		newList[0] = buildTweet(tweet);
		return newList;
	};
	
	var buildTweet = function(tweet) {
    return '<li class="tweet" style="display: none;"> \
    	<a href="https://www.twitter.com/'+tweet.user.screen_name+'/status/'+tweet.id_str +'" target="_blank">\
    	 <img src="'+tweet.user.profile_image_url+'" class="twitter_profile_pic"/><span class="screen-name">@'+tweet.user.screen_name+'</span> <span class="content">'+tweet.text+'</span> \
    	</a> \
  	</li>';
	};


	return TS;

}());