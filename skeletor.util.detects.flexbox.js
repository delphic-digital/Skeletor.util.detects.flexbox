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


		}
	});

	new DetectFlexbox()

});