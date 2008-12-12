/**
 * $Id: ControlManager.js 920 2008-09-09 14:05:33Z spocke $
 *
 * @author Moxiecode
 * @copyright Copyright © 2004-2008, Moxiecode Systems AB, All rights reserved.
 */

(function() {
	// Shorten names
	var DOM = tinymce.DOM, Event = tinymce.dom.Event, each = tinymce.each, extend = tinymce.extend;

	/**#@+
	 * @class This class is responsible for managing UI control instances. It's both a factory and a collection for the controls.
	 * @member tinymce.ControlManager
	 */
	tinymce.create('tinymce.ControlManager', {
		/**
		 * Constructs a new control manager instance.
		 * Consult the Wiki for more details on this class.
		 *
		 * @constructor
		 * @param {tinymce.Editor} ed TinyMCE editor instance to add the control to.
		 * @param {Object} s Optional settings object for the control manager.
		 */
		ControlManager : function(ed, s) {
			var t = this, i;

			s = s || {};
			t.editor = ed;
			t.controls = {};
			t.onAdd = new tinymce.util.Dispatcher(t);
			t.onPostRender = new tinymce.util.Dispatcher(t);
			t.prefix = s.prefix || ed.id + '_';
			t._cls = {};

			t.onPostRender.add(function() {
				each(t.controls, function(c) {
					c.postRender();
				});
			});
		},

		destroy : function() {
			each(this.controls, function(c) {
				c.destroy();
			});

			this.controls = null;
		}

		/**#@-*/
	});
})();
