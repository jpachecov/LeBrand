var showed = false;

function ocultaMenu(callback){

	$("#menu-anim2").velocity("stop").velocity({
		translateY: -410 + "%",
	},{
		duration: 300,
		complete: callback()
	});	
}

function muestraMenu(callback){
	
	$("#menu-anim2").velocity("stop").velocity({
		translateY: -5,
	},{
		duration: 300,
		complete: callback()

	});
}
$(document).ready(function() {

	$.Velocity.hook($("#menu-anim2"), "translateY", "-410%");
	
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
