$(document).ready(function() {
	//$("#menu-anim").css("transform", "translateX: -100%");
	$.Velocity.hook($("#menu-anim2"), "translateY", "-410%");

	$("#menu-anim2").velocity("stop").velocity({
					translateY: -5,
				},{
					duration: 500,
					complete: function(){
						animando = false;
					}

				});
	/*
	$("#menu").hover(

		function(){
			$("#menu-anim").velocity({
				translateX: 0,
			},{
				duration: 500,

			});
			onMenu = true;
		},
		function(){

			//setTimeout(function(){
			 if (onMenu) {
				onMenu = false;
				$("#menu-anim"). velocity("stop").velocity("reverse");


			}else{

				$("#menu-anim").velocity("stop", "myQueue");
			}
			//}, 2000);

		}
	);

	*/
animando = false;

	$("#menu2").hover(


		function(){
			if(onTop){
				return;
			}
			/*
			if(animando){
				return;
			}
			animando = true;*/
			$("#menu-anim2").velocity("stop").velocity({
				translateY: -5,
			},{
				duration: 500,
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
			$("#menu-anim2").velocity("stop").velocity({
					translateY: -410 + "%",
			},{
				duration: 2000,
				complete: function(){
					animando = false;
				}
			});

		//}, 2000);

		});

var onTop = true;
		$(document).scroll(function(){
			console.log($(this).scrollTop());
			if($(this).scrollTop() == 0){
				onTop = true;
				$("#menu-anim2").velocity("stop").velocity({
					translateY: -5,
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

				$("#menu-anim2").velocity("stop").velocity({
					translateY: -410 + "%",
				},{
					duration: 1000,
					complete: function(){
						animando = false;
					}
				});
			}

		});



});
