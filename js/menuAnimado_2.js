var showed = false;

function ocultaMenu(callback){

	$("#menu-anim2").velocity("stop").velocity({
		translateY: -200 + "px",
	},{
		duration: 250,
		complete: callback()
	});	
}

function muestraMenu(callback){
	
	$("#menu-anim2").velocity("stop").velocity({
		translateY: 110 + 'px',
	},{
		duration: 150,
		complete: callback()

	});
}
$(document).ready(function() {

	$.Velocity.hook($("#menu-anim2"), "translateY", "-200px");
	
	$("#menu2").click(function(){
		if(showed){
			ocultaMenu(function(){
				showed = false;
			});
		} else {
			muestraMenu(function(){
				showed = true;
			})
		}
	});
});
