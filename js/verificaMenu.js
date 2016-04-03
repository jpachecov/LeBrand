var menu1 = true;
var menu2 = false;

$(document).ready(function(){

	if($(window).width() < 600){
		menu1 = false;
		menu2 = true;
		$('#menu').css('display', 'none');
		$('#menu2').css('display', 'block');
	}

	$(window).resize(function(){
		console.log("width " + $(window).width());
		if($(window).width() < 600){
			if(!menu2){
				menu1 = false;
				menu2 = true;

				$('#menu').css('display','none');
				$('#menu2').css('display', 'block');
			}
		}

		if($(window).width() > 600){
			if(!menu1){
				menu2 = false;
				menu1 = true;
				$('#menu2').css('display','none');
				$('#menu').css('display','block');
			}
		}

	});
});