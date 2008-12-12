/**
 * $Id: Serializer.js 952 2008-11-03 17:56:04Z spocke $
 *
 * @author Moxiecode
 * @copyright Copyright © 2004-2008, Moxiecode Systems AB, All rights reserved.
 */

(function() {
	// Shorten names
	Dispatcher = tinymce.util.Dispatcher;

	/**#@+
	 * @class This class is used to serialize DOM trees into a string.
	 * Consult the TinyMCE Wiki API for more details and examples on how to use this class.
	 * @member tinymce.dom.Serializer
	 */
	tinymce.create('tinymce.dom.Serializer', {
		/**
		 * Constucts a new DOM serializer class.
		 *
		 * @constructor
		 * @param {Object} s Optional name/Value collection of settings for the serializer.
		 */
		Serializer : function(s) {
			var t = this;

			t.onPreProcess = new Dispatcher(t);
			t.onPostProcess = new Dispatcher(t);
		},

		/**#@+
		 * @method
		 */

		/**
		 * Serializes the specified node into a HTML string.
		 *
		 * @param {Element} n Element/Node to serialize.
		 * @param {Object} o Object to add serialized contents to, this object will also be passed to the event listeners.
		 * @return {String} Serialized HTML contents.
		 */
		serialize : function(n, o) {
		}

		/**#@-*/
	});
})();
