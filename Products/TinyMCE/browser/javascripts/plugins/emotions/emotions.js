tinyMCEPopup.requireLangPack();

var EmotionsDialog = {
	init : function(ed) {
		tinyMCEPopup.resizeToInnerSize();
	},

	insert : function(file) {
		var ed = tinyMCEPopup.editor, dom = ed.dom;
		var imgs = document.getElementsByTagName('img');
		var title = "";
		for (var i = 0; i < imgs.length; i++) {
			if (imgs[i].src.indexOf(file) != -1) {
				title = imgs[i].title;
			}
		}
		alert (title);

		tinyMCEPopup.execCommand('mceInsertContent', false, dom.createHTML('img', {
			src : ed.settings.portal_url + '/++resource++tinymce.images/plugins/emotions/' + file,
			alt : title,
			title : title,
			border : 0
		}));

		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(EmotionsDialog.init, EmotionsDialog);
