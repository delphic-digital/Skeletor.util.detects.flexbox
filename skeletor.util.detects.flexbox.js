/**
 * @copyright   2016, The Skeletor Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 */


define(['jquery', 'skeletor.core'],function($, Skeletor, isMobile){

	function DetectFlexbox(element, options) {
		DetectFlexbox.__super__.call(this, element, options, DetectFlexbox.DEFAULTS);
	}

	DetectFlexbox.VERSION = '2.0.0';
	DetectFlexbox.DEFAULTS =  {}

	Skeletor.Plugin.create(DetectFlexbox, {
		_init: function(element) {
			var c = " ", prefixFlex = 'flex -webkit-flex -ms-flexbox -moz-box -webkit-box'.split(' '), elem = document.createElement('b'), mStyle = elem.style;
			try {
				for (var i = 0, len = prefixFlex.length; i < len; i++) {
					c += ( (mStyle.display = prefixFlex[i]) && mStyle.display != prefixFlex[i] ) ? 'no-flexbox' :  'flexbox', (i = len);
				}
			} catch(e) {
				c += "no-flexbox";
			}
			document.documentElement.className =  c;
		}
	});

	new DetectFlexbox()

});