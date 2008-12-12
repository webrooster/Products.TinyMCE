/**
 * $Id: editor_template_src.js 920 2008-09-09 14:05:33Z spocke $
 *
 * This file is meant to showcase how to create a simple theme. The advanced
 * theme is more suitable for production use.
 *
 * @author Moxiecode
 * @copyright Copyright © 2004-2008, Moxiecode Systems AB, All rights reserved.
 */

//(function() {
	var DOM = tinymce.DOM;

	tinymce.create('tinymce.themes.SimpleTheme', {
		init : function(ed, url) {
			var t = this, s = ed.settings;

			t.editor = ed;
		},

		renderUI : function(o) {
			var t = this, n = o.targetNode, ic, ed = t.editor, sc;

			n = DOM.insertAfter(DOM.create('span', {id : ed.id + '_container', 'class' : 'mceEditor ' + ed.settings.skin + 'SimpleSkin'}), n);
			n = sc = DOM.add(n, 'div', {'class' : 'mceLayout'});
			n = ic = DOM.add(n, 'div', {'class' : 'mceIframeContainer'});

			return {
				iframeContainer : ic,
				editorContainer : ed.id + '_container',
				sizeContainer : sc,
				deltaHeight : 0
			};
		},

		getInfo : function() {
			return {
				longname : 'Simple theme',
				author : 'Moxiecode Systems AB',
				authorurl : 'http://tinymce.moxiecode.com',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			}
		}
	});

	tinymce.ThemeManager.add('simple', tinymce.themes.SimpleTheme);
//})();
