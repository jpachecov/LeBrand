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
			'en' : 'Mexico',
			'es' : 'México'
		},
		'ph6':{
			'en' : '<span class="black">Enrique Hinzpeter - </span> General Manager',
			'es' : '<span class="black">Enrique Hinzpeter - </span> Gerente General'
		},
		'ph7':{
			'en' : 'Sepa la chucha # 139, Mexico City. Mx.',
			'es' : 'Sepa la chucha # 139, Ciudad de México. Mx.'
		},
		'ph8':{
			'en' : 'About your project.',
			'es' : 'Sobre su proyecto.'
		},
		'ph9':{
			'en' : "For general enquiries or anything you'd like to discuss, please contact us here.",
			'es' : 'Para consultas generales o cualquier cosa que le gustaría hablar , por favor, póngase en contacto con nosotros aquí .'
		},
		'ph10':{
			'en' : 'Name.',
			'es' : 'Nombre'
		},
		'ph11':{
			'en' : 'E-mail.',
			'es' : 'Correo electrónico.'
		},
		'ph12':{
			'en' : 'Message.',
			'es' : 'Mensaje.'
		},
		'ph13':{
			'en' : 'Send',
			'es' : 'Enviar'
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
	} ,

	'home':{
		'ph1':{
			'en' : "New plaza boutique located at Tuxtla Gutierrez, Chiapas.",
			'es' : 'Agora: Nueva  plaza boutique en la ciudad de Tuxtla Gutiérrez, Chiapas.'
		}, 
		'ph2':{
			'en' : 'Honey Bee’s company in the state of Quintana Roo, Mexico.',
			'es' : 'Sociedad cooperativa apicultora DzAh Muzen Kabdz del Estado de Quintana Roo.'
		},
		'ph3':{
			'en' : 'Studio and record producer in Cholula, Puebla.',
			'es' : 'Casa productora musical en Cholula, Puebla.'
		},
		'ph4':{
			'en' : 'The biggest marketing of electric automotive parts of the Mexican southwest region.',
			'es' : '<strong> Comercializadora </strong> de autopartes y refacciones automotrices del Sureste de México.'
		},
		'ph5':{
			'en' : 'Californian new agribusiness company.',
			'es' : 'Comercializadora californiana de frutas y verduras en Estados Unidos.'
		},
		'ph6':{
			'en' : 'Conectando México foundation, has the objective of giving free Internet with educational purpose.',
			'es' : 'Fundación Conectando México tiene el propósito de proveer de Internet gratuito con fines educativos.'
		},
		'ph7':{
			'en' : 'Fighter Town Brewing Co. In 2016 will be San Diego’s primer contract brewer.',
			'es' : 'Será en 2016 la primera cervecería/ embotelladora artesanal en San Diego, California. '
		},
		'ph8':{
			'en' : 'One of the most important marble companies inn the Mexico’s southeastern region.',
			'es' : 'Empresa marmolera más importantes del sureste de México.'
		},
		'ph9':{
			'en' : 'JLTC Holding, with a variety of financial companies but it mainly specialize in Agro-business, Financial investment and real state.',
			'es' : 'Holding familiar JLTC, el cual se especializa en los agronegocios, inversión financiera y bienes raíces.'
		},
		'ph10':{
			'en' : 'Agrobusiness holding with offices in Mexico, California and New York.',
			'es' : 'Holding de agronegocios con oficinas en México, California y Nueva York .'
		},
		'ph11':{
			'en' : 'The well-known architect Elsa Elena, who has a bright future in the architecture and interior design fields.',
			'es' : 'Renombrada arquitecta y especialista en interiorismo, Arq. Elsa Elena González Labrada.'
		},
		'ph12':{
			'en' : 'Mexican-Californian fresh produce agribusiness brand.',
			'es' : 'Empresa mexicana-americana comercializadora de productos con la mejor calidad.'
		},
		'ph13':{
			'en' : 'The local government administration of Tulum image of 2014- 2016.',
			'es' : 'Identidad de la administración del Gobierno de Tulúm de 2014 a 2016.'
		},
		'ph14':{
			'en' : 'A magazine focusing on topics such as music, design, and art from Puebla, Mexico.',
			'es' : 'Revista Vintage la cual fue premiada como Mejor Proyecto Editorial Universitario Nacional 2013 por la asosiación mexicana de diseño.'
		},
		'ph15':{
			'en' : 'A national American vacuum sealers company.',
			'es' : 'Empresa Americana especializada en elaboración de maquinas de sellado al vacio, con gran trayectoria nacional.'
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