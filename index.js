(function() {
	/**
	 * Version: 1.1
	 * Author: Luis Arcia
	 * Since: 2016
	 */
	const url_app_store     = ''; //URL del App en AppStore
	const url_play_store    = ''; //URL del App en PlayStore
	const url_desktop       = ''; //URL de destino web en caso sea un desktop
	const values            = window.location.search;
	const url_params        = new URLSearchParams(values);
	const device            = navigator.userAgent;

	let utm_source 		= url_params.has('utm_source') ? url_params.get('utm_source') : undefined;
	let utm_medium 		= url_params.has('utm_medium') ? url_params.get('utm_medium') : undefined;
	let utm_campaign	= url_params.has('utm_campaign') ? url_params.get('utm_campaign') : undefined;
	let uri_app_store 	= undefined;
	let uri_play_store	= undefined;
	let uri_desktop		= undefined;

	if( utm_source == undefined || utm_medium == undefined || utm_campaign == undefined ) {
		uri_app_store   = url_app_store;
		uri_play_store  = url_play_store;
		uri_desktop     = url_desktop;
	} else {
		uri_app_store   = `${url_app_store}?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`;
		uri_play_store  = `${url_play_store}?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`;
		uri_desktop     = `${url_desktop}?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}`;
	}

	if(device.match(/Iphone/i) || device.match(/Ipad/i)) {
		window.location = uri_app_store;
	}else if (device.match(/Android/i)) {
		window.location = uri_play_store;		
	} else {
		window.location = uri_desktop;
	}
})()
