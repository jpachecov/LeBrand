$(document).ready(function(){	
	var hecho = false;
	var hecho2 = false;
	$.Velocity.hook($('#anim_1'), "translateX", '-100px');
	$.Velocity.hook($('#anim_1'), "opacity", '0');
	$.Velocity.hook($('#anim_2'), "translateX", '200px');
	$.Velocity.hook($('#anim_2'), "opacity", '0');
	$.Velocity.hook($('#anim_3'), "translateX", '-100px');
	$.Velocity.hook($('#anim_3'), "opacity", '0');
	var proy = $('.titulo').offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() > proy -100 && !hecho){
			hecho = true;
			$('#anim_1').velocity({
				opacity: 1,
			},{
				duration: 500,
				queue:false
			});
			$('#anim_1').velocity({
				translateX: '0px',
			},{
				duration: 400,
				queue: false
			});	
		}
		if($(window).scrollTop() > proy + 250 && !hecho2){	
			hecho2 = true;
			$('#anim_2').velocity({
				translateX: '0px',
				opacity: 1,
			},{
				duration: 500,
			});
		}
			/*
			$('#anim_3').velocity({
				translateX: '0%',
			},{
				duration: 500,
			});*/

		
	});
});