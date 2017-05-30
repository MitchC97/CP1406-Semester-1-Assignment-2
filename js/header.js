
$(window).scroll(function(){
	var h = 60; // height of scroll
	var t = 200; // time of fading
	var s1 = 120; // stretch 1
	var s2 = 220; // stretch 2
	if(window.pageYOffset >= h){
		$('#header_gap').height(s1);
		$('#header_banner').fadeOut(t,function(){
			$('#header_banner').css('display','none');
		});
	}
	if(window.pageYOffset < h){
		$('#header_gap').height(s2);
		$('#header_banner').fadeIn(t,function(){
			$('#header_banner').css('display','block');
		});
	}
});
