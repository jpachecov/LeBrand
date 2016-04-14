var hecho = false;
$.Velocity.hook($('#anim_1'), "translateX", '-100%');
$.Velocity.hook($('#anim_1'), "opacity", '0');
$.Velocity.hook($('#anim_2'), "translateX", '200%');
$.Velocity.hook($('#anim_3'), "translateX", '-100%');
$(document).ready(function(){	
	var proy = $('.titulo').offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() > proy -25 && !hecho){
			hecho = true;
			$('#anim_1').velocity({
				opacity: 1,
			},{
				duration: 500,
				queue:false
			});
			$('#anim_1').velocity({
				translateX: '0%',
			},{
				duration: 400,
				queue: false
			});			
			$('#anim_2').velocity({
				translateX: '0%',
			},{
				duration: 500,
			});
			$('#anim_3').velocity({
				translateX: '0%',
			},{
				duration: 500,
			});
		}
	});
});