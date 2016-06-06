var check;
var animating = false;
var items = ['item_1', 'item_2', 'item_3', 'item_4'];
var current;

$.Velocity.hook($('.fondo'), "opacity", '0');
$.Velocity.hook($('.tag'), "translateX", "-20px");
$.Velocity.hook($('.contenido'), "translateX", "20px");


$(document).ready(function(){
	/*
	check = setInterval(function(){
		checkForActive();
	}, 100);
*/
	check = setTimeout(function(){
		checkForActive();
	}, 100);
});

/*
* Busca al elemento del carrusel que esta activo
*/
function checkForActive(){
	items.forEach(function(e){
		if($('#' + e).hasClass('active')){
			if (animating || current == e) return;
			last = current;
			current = e;
			animating = true;
			restore(last);
			doAnimation(e);
		}
	});
}

/*
* Hace la animacion de los elementos
*/
function doAnimation(e){

	$('#' + e + ' .fondo').velocity({
		opacity: .3,
	},{
		duration: 500,
		complete: function(){
			$('#' + e + ' .tag').velocity({
				opacity: 1,
				translateX: 0 + 'px',
			},{
				duration: 500,
			});
			$('#' + e + ' .contenido').velocity({
				opacity: 1,
				translateX: 0 + 'px',
			},{
				duration: 500,
				complete: function(){
					animating = false;
				}
			});

		}
	});
}

/*
* Pone a los elementos que se van a animaar listos para la animacion
*/
function restore(e){
	$.Velocity.hook($('.fondo'), "opacity", '0');
	$.Velocity.hook($('.tag'), "translateX", "-20px");
	$.Velocity.hook($('.contenido'), "translateX", "20px");
	$.Velocity.hook($('.tag'), "opacity", "0");
	$.Velocity.hook($('.contenido'), 'opacity', '0');	
}