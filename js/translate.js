// Diccionario de idioma
var transale = {
	'menu' : {
		'm-ph1':{
			'en' : 'PORTAFOLIO',
			'es' : 'PORTAFOLIO'
		},
		'm-ph2':{
			'en' : 'ABOUT US',
			'es' : 'NOSOTROS'
		}, 
		'm-ph3':{
			'en' : 'WORK',
			'es' : 'TRABAJO'
		},
		'm-ph4':{
			'en' : 'CONTACT US',
			'es' : 'CONTACTO'
		}
	},

	'contact':{
		'ph1':{
			'en' : "We'd love to hear from you.",
			'es' : 'Queremos saber de ti.'
		}, 
		'ph2':{
			'en' : 'Studios.',
			'es' : 'Estudios.'
		},
		'ph3':{
			'en' : 'Italy',
			'es' : 'Italia'
		},
		'ph4':{
			'en' : '<span class="black">Alexander Tadlock - </span> General Manager',
			'es' : '<span class="black">Alexander Tadlock - </span> Gerente General'
		},
		'ph5':{
			'en' : '',
			'es' : ''
		},
		'ph6':{
			'en' : '',
			'es' : ''
		},
		'ph7':{
			'en' : '',
			'es' : ''
		},
		'ph8':{
			'en' : '',
			'es' : ''
		},
		'ph9':{
			'en' : '',
			'es' : ''
		},
		'ph10':{
			'en' : '',
			'es' : ''
		},
		'ph11':{
			'en' : '',
			'es' : ''
		},
		'ph12':{
			'en' : '',
			'es' : ''
		},
		'ph13':{
			'en' : '',
			'es' : ''
		}
	},

	'footer':{
		'f-ph1':{
			'en' : 'Empowering visual capital.',
			'es' : 'Potenciación del capital visual.'
		},
		'f-ph2':{
			'en' : 'BRANDING',
			'es' : 'MARCA'
		},
		'f-ph3':{
			'en' : 'INFORMATION DESIGN',
			'es' : 'INFORMACIÓN DE DISEÑO'
		},
		'f-ph4':{
			'en' : 'MARKETING',
			'es' : 'MARKETING'
		},
		'f-ph5':{
			'en' : '© 2016 Le Brand capital. All Rights Reserved.',
			'es' : '© 2016 Le Brand capital. Todos los derechos reservados.'
		}
	}
}

var cookie_lang = {};
cookie_lang.setCookie = function(lang){
	document.cookie = lang+';';
}
cookie_lang.getCookie = function(){
	var data = document.cookie.split(';');
	return data[0];
}

function translate_page(page, lang){
	// Indicar idioma en que se va a realizar la navegación por la página
	cookie_lang.setCookie(lang);

	// Cambiar menú de idioma
	for(var key in transale['menu']){
		$('.'+key).html(transale['menu'][key][lang])
	}

	// Cambiar página de idioma
	if(transale[page]){
		for(var key in transale[page]){
			$('.'+key).html(transale[page][key][lang])
		}
	}

	// Cambiar footer de idioma
	for(var key in transale['footer']){
		$('.'+key).html(transale['footer'][key][lang])
	}
}

// Al cargar la página poner los textos en el idioma que ya se ha seleccionado
function init_lang(page){
	// Los textos están predefinidos en inglés
	if(cookie_lang.getCookie() == 'es'){
    	translate_page(page, 'es');
    }
}