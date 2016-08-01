$(document).ready(function() {
	//$("#menu-anim").css("transform", "translateX: -100%");
	$.Velocity.hook($("#menu-anim"), "translateX", "-100%");

	$("#menu-anim").velocity("stop").velocity({
					translateX: 0,
				},{
					duration: 500,
					complete: function(){
						animando = false;
					}

				});

animando = false;

	$(".menu1").hover(


		function(){
			if(onTop){
				return;
			}

			$("#menu-anim").velocity("stop").velocity({
				translateX: 0,
			},{
				duration: 150,
				complete: function(){
					animando = false;
				}

			});
		},
		function(){
;
			//setTimeout(function(){

			if(animando || onTop){
				return;

			}
			animando = true
			$("#menu-anim").velocity("stop").velocity({
					translateX: -100 + "%",
			},{
				duration: 200,
				complete: function(){
					animando = false;
				}
			});

		//}, 2000);

		});

var onTop = true;
		$(document).scroll(function(){
			//console.log($(this).scrollTop());
			if($(this).scrollTop() == 0){
				onTop = true;
				$("#menu-anim").velocity("stop").velocity({
					translateX: 0,
				},{
					duration: 500,
					complete: function(){
						animando = false;
					}

				});
			} else {
				onTop = false;
				if(animando){
					return;
				}
				animando = true;

				$("#menu-anim").velocity("stop").velocity({
					translateX: -100 + "%",
				},{
					duration: 200,
					complete: function(){
						animando = false;
					}
				});
			}

		});



});
