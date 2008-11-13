"""
   Usage: rebuild-pot.py
"""

import os, sys, string

try:
    import win32api
    WIN32 = True
except ImportError:
    WIN32 = False

__I18NDUDE = os.environ.get('I18NDUDE', 'i18ndude')
__INSTANCE_HOME = os.environ.get('INSTANCE_HOME', '')

def rebuild(product):
    pot = product + '-generated.pot'
    folder = ".."

    log = 'rebuild-%s-pot.log' % product
    domain = product

    os.chdir('..')
    os.chdir('locales')

    # Remove the original file
    if os.path.isfile(pot):
        os.remove(pot)

    print 'Using %s to build new pot.\n' % folder
    cmd = __I18NDUDE + (' rebuild-pot --pot %s --create %s ') % (pot, domain)

    cmd += '%s > %s 2>&1' % (folder, log)

    print 'Rebuilding to %s - this takes a while, logging to %s' % (pot, log)
    os.system(cmd)

def main():
    rebuild("tinymce")

if __name__ == '__main__':
    main()
