window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
	googletag.defineSlot('3572644856','ads')
	.setTargeting('test', 'lazyload')
	.addService(googletag.pubads());
	googletag.pubads().enableLazyLoad();
	googletag.enableServices();
});