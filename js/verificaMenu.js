var menu1 = true;
var menu2 = false;

$(document).ready(function(){
	
	if($(window).width() < 800){
		menu1 = false;
		menu2 = true;
		$('.menu1').css('display', 'none');
		$('#menu2').css('display', 'block');
		$('.oculto').show();
	}

	$(window).resize(function(){
		console.log("width " + $(window).width());
		if($(window).width() < 800){
			if(!menu2){
				menu1 = false;
				menu2 = true;

				$('.menu1').css('display','none');
				$('#menu2').css('display', 'block');
				$('.oculto').show();
			}
		}

		if($(window).width() > 800){
			if(!menu1){
				menu2 = false;
				menu1 = true;
				$('#menu2').css('display','none');
				$('.menu1').css('display','block');
				$('.oculto').hide();
			}
		}

	});
});