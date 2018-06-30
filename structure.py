import os.path
import re

folder = 'content/post'
extension = '.md'

def step(ext, dirname, names):
    ext = ext.lower()
    for name in names:
        match = re.match('^[0-9]{4}-([0-9]{2}-[0-9]{2}.*)\.md$', name)
        if (match):
            print ""
            print name
            print dirname
            foldername = match.group(1)
            oldpath = os.path.join(dirname, name)
            newpath = os.path.join(dirname, foldername, "index.md")
            os.rename(oldpath, newpath)



os.path.walk(folder, step, extension)