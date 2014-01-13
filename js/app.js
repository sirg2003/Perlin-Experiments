requirejs.config ({
	baseUrl: 'js',
	paths : {
		'jquery' : '../bower_components/jquery/jquery.min',
		'domReady' : '../bower_components/requirejs-domready/domReady'
	},
	shim : {
		'jquery' : {
			'exports' : '$'
		},
		'noise' : {
			'exports' : 'noise'
		},
		'dat.gui' : {
			'exports' : 'dat'
		}
	}
});

requirejs(['main'], function (main) {

});