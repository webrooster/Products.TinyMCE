(function(b){var c="autosave",f="restoredraft",d=true,g,e,a=b.util.Dispatcher;b.create("tinymce.plugins.AutoSave",{init:function(i,k){var h=this,l=i.settings;h.editor=i;function j(m){var n={s:1000,m:60000};m=/^(\d+)([ms]?)$/.exec(""+m);return(m[2]?n[m[2]]:1)*parseInt(m)}b.each({ask_before_unload:d,interval:"30s",retention:"20m",minlength:50},function(n,m){m=c+"_"+m;if(l[m]===g){l[m]=n}});l.autosave_interval=j(l.autosave_interval);l.autosave_retention=j(l.autosave_retention);i.addButton(f,{title:c+".restore_content",onclick:function(){if(i.getContent({draft:true}).replace(/\s|&nbsp;|<\/?p[^>]*>|<br[^>]*>/gi,"").length>0){i.windowManager.confirm(c+".warning_message",function(m){if(m){h.restoreDraft()}})}else{h.restoreDraft()}}});i.onNodeChange.add(function(){var m=i.controlManager;if(m.get(f)){m.setDisabled(f,!h.hasDraft())}});i.onInit.add(function(){if(i.controlManager.get(f)){h.setupStorage(i);setInterval(function(){h.storeDraft();i.nodeChanged()},l.autosave_interval)}});h.onStoreDraft=new a(h);h.onRestoreDraft=new a(h);h.onRemoveDraft=new a(h);if(!e){window.onbeforeunload=b.plugins.AutoSave._beforeUnloadHandler;e=d}},getInfo:function(){return{longname:"Auto save",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/autosave",version:b.majorVersion+"."+b.minorVersion}},getExpDate:function(){return new Date(new Date().getTime()+this.editor.settings.autosave_retention).toUTCString()},setupStorage:function(i){var h=this,k=c+"_test",j="OK";h.key=c+i.id;b.each([function(){if(localStorage){localStorage.setItem(k,j);if(localStorage.getItem(k)===j){localStorage.removeItem(k);return localStorage}}},function(){if(sessionStorage){sessionStorage.setItem(k,j);if(sessionStorage.getItem(k)===j){sessionStorage.removeItem(k);return sessionStorage}}},function(){if(b.isIE){i.getElement().style.behavior="url('#default#userData')";return{autoExpires:d,setItem:function(m,n){var l=i.getElement();l.setAttribute(m,n);l.expires=h.getExpDate();try{l.save("TinyMCE")}catch(o){}},getItem:function(m){var l=i.getElement();try{l.load("TinyMCE");return l.getAttribute(m)}catch(n){return null}},removeItem:function(l){i.getElement().removeAttribute(l)}}}},],function(l){try{h.storage=l();if(h.storage){return false}}catch(m){}})},storeDraft:function(){var i=this,l=i.storage,h=i.editor,k,j;if(l){if(!l.getItem(i.key)&&!h.isDirty()){return}j=h.getContent({draft:true});if(j.length>h.settings.autosave_minlength){k=i.getExpDate();if(!i.storage.autoExpires){i.storage.setItem(i.key+"_expires",k)}i.storage.setItem(i.key,j);i.onStoreDraft.dispatch(i,{expires:k,content:j})}}},restoreDraft:function(){var h=this,j=h.storage,i;if(j){i=j.getItem(h.key);if(i){h.editor.setContent(i);h.onRestoreDraft.dispatch(h,{content:i})}}},hasDraft:function(){var i=this,k=i.storage,j,h;if(k){h=!!k.getItem(i.key);if(h){if(!i.storage.autoExpires){j=new Date(k.getItem(i.key+"_expires"));if(new Date().getTime()<j.getTime()){return d}i.removeDraft()}else{return d}}}return false},removeDraft:function(){var h=this,k=h.storage,i=h.key,j;if(k){j=k.getItem(i);k.removeItem(i);k.removeItem(i+"_expires");if(j){h.onRemoveDraft.dispatch(h,{content:j})}}},"static":{_beforeUnloadHandler:function(h){var i;b.each(tinyMCE.editors,function(j){if(j.plugins.autosave){j.plugins.autosave.storeDraft()}if(j.getParam("fullscreen_is_enabled")){return}if(!i&&j.isDirty()&&j.getParam("autosave_ask_before_unload")){i=j.getLang("autosave.unload_msg")}});return i}}});b.PluginManager.add("autosave",b.plugins.AutoSave)})(tinymce);