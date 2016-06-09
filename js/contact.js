
movil = false

$(document).ready(function(){
	console.log('herle')
	$(window).resize(function(){
		
		if($(window).width() < 600 && movil != true){
			movil = true;
			console.log('left')
			$('#relleno').css('float','');
			$('#letras').css('float','');
		}
		/*
		if($(window).width() > 600){
			movil = false;
			console.log('right')
			$('#relleno').css('float','right');
			$('#letras').css('float','right');
		}
		*/	
	});

});