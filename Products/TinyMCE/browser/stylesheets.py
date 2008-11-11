import os
from Globals import DTMLFile

from zope.interface import implements
from Products.Five.browser import BrowserView

from Products.TinyMCE.browser.interfaces.stylesheets import IThemesAdvancedSkinsPloneadvancedContentCSS
from Products.TinyMCE.browser.interfaces.stylesheets import IThemesAdvancedSkinsPloneadvancedDialogCSS
from Products.TinyMCE.browser.interfaces.stylesheets import IThemesAdvancedSkinsPloneadvancedUICSS
from Products.TinyMCE.browser.interfaces.stylesheets import IPluginsInlinepopupsSkinsPlonepopupWindowCSS
from Products.TinyMCE.browser.interfaces.stylesheets import IPluginsMediaContentCSS
from Products.TinyMCE.browser.interfaces.stylesheets import IPluginsPagebreakContentCSS
from Products.TinyMCE.browser.interfaces.stylesheets import IPluginsSpellcheckerContentCSS
from Products.TinyMCE.browser.interfaces.stylesheets import IPluginsXhtmlxtrasPopupCSS

browser_directory = os.path.dirname(os.path.abspath(__file__))
themes_advanced_skins_plone_advanced_directory = os.path.join(browser_directory,
															  'stylesheets',
															  'themes',
															  'advanced',
															  'skins',
															  'ploneadvanced')

plugins_inlinepopups_skins_plonepopup_directory = os.path.join(browser_directory,
                                                               'stylesheets',
                                                               'plugins',
                                                               'inlinepopups',
                                                               'skins',
                                                               'plonepopup')

plugins_media_directory = os.path.join(browser_directory,
                                       'stylesheets',
                                       'plugins',
                                       'media')

plugins_pagebreak_directory = os.path.join(browser_directory,
                                       'stylesheets',
                                       'plugins',
                                       'pagebreak')

plugins_spellchecker_directory = os.path.join(browser_directory,
                                       'stylesheets',
                                       'plugins',
                                       'spellchecker')

plugins_xhtmlxtras_directory = os.path.join(browser_directory,
                                       'stylesheets',
                                       'plugins',
                                       'xhtmlxtras')

themes_advanced_skins_plone_advanced_content_css = DTMLFile('content.css', themes_advanced_skins_plone_advanced_directory)
themes_advanced_skins_plone_advanced_dialog_css = DTMLFile('dialog.css', themes_advanced_skins_plone_advanced_directory)
themes_advanced_skins_plone_advanced_ui_css = DTMLFile('ui.css', themes_advanced_skins_plone_advanced_directory)
plugins_inlinepopups_skins_plonepopup_window_css = DTMLFile('window.css', plugins_inlinepopups_skins_plonepopup_directory)
plugins_media_content_css = DTMLFile('content.css', plugins_media_directory)
plugins_pagebreak_content_css = DTMLFile('content.css', plugins_pagebreak_directory)
plugins_spellchecker_content_css = DTMLFile('content.css', plugins_spellchecker_directory)
plugins_xhtmlxtras_popup_css = DTMLFile('content.css', plugins_xhtmlxtras_directory)

class ThemesAdvancedSkinsPloneadvancedContentCSS(BrowserView):
    """Returns the content css"""
    implements(IThemesAdvancedSkinsPloneadvancedContentCSS)

    def __call__(self, *args, **kw):
        """This view is published"""

        template = themes_advanced_skins_plone_advanced_content_css.__of__(self.context)
        return template(context=self.context)

class ThemesAdvancedSkinsPloneadvancedDialogCSS(BrowserView):
    """Returns the dialog css"""
    implements(IThemesAdvancedSkinsPloneadvancedDialogCSS)

    def __call__(self, *args, **kw):
        """This view is published"""

        template = themes_advanced_skins_plone_advanced_dialog_css.__of__(self.context)
        return template(context=self.context)

class ThemesAdvancedSkinsPloneadvancedUICSS(BrowserView):
    """Returns the ui css"""
    implements(IThemesAdvancedSkinsPloneadvancedUICSS)

    def __call__(self, *args, **kw):
        """This view is published"""

        template = themes_advanced_skins_plone_advanced_ui_css.__of__(self.context)
        return template(context=self.context)

class PluginsInlinepopupsSkinsPlonepopupWindowCSS(BrowserView):
    """Returns the window css"""
    implements(IPluginsInlinepopupsSkinsPlonepopupWindowCSS)

    def __call__(self, *args, **kw):
        """This view is published"""

        template = plugins_inlinepopups_skins_plonepopup_window_css.__of__(self.context)
        return template(context=self.context)

class PluginsMediaContentCSS(BrowserView):
    """Returns the content css"""
    implements(IPluginsMediaContentCSS)

    def __call__(self, *args, **kw):
        """This view is published"""

        template = plugins_media_content_css.__of__(self.context)
        return template(context=self.context)

class PluginsPagebreakContentCSS(BrowserView):
    """Returns the content css"""
    implements(IPluginsPagebreakContentCSS)

    def __call__(self, *args, **kw):
        """This view is published"""

        template = plugins_pagebreak_content_css.__of__(self.context)
        return template(context=self.context)

class PluginsSpellcheckerContentCSS(BrowserView):
    """Returns the content css"""
    implements(IPluginsSpellcheckerContentCSS)

    def __call__(self, *args, **kw):
        """This view is published"""

        template = plugins_spellchecker_content_css.__of__(self.context)
        return template(context=self.context)

class PluginsXhtmlxtrasPopupCSS(BrowserView):
    """Returns the popup css"""
    implements(IPluginsXhtmlxtrasPopupCSS)

    def __call__(self, *args, **kw):
        """This view is published"""

        template = plugins_xhtmlxtras_popup_css.__of__(self.context)
        return template(context=self.context)
