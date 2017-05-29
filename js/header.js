
$(window).scroll(function(){
	var h = 60; // height of scroll
	var t = 200; // time of fading
	if(window.pageYOffset >= h){
		$('#header_banner').fadeOut(t,function(){
			$('#header_banner').css('display','none');
		});
	}
	if(window.pageYOffset < h){
		$('#header_banner').fadeIn(t,function(){
			$('#header_banner').css('display','block');
		});
	}
});
