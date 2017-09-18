import os.path

folder = 'content/post'
extension = '.md'

def step(ext, dirname, names):
    ext = ext.lower()
    for name in names:
        if name.lower().endswith(ext):
            with open(os.path.join(dirname, name), 'r') as fh:
                lines = fh.readlines()
                modified = [l for l in lines if isvalidline(l)]
            with open(os.path.join(dirname, name), 'w') as fh:
                fh.writelines(modified)

def isvalidline(line):
    if line.startswith('layout: '):
        return False
    if line.startswith('id: '):
        return False
    if line.startswith('guid: '):
        return False
    if line.startswith('permalink: '):
        return False
    return True

os.path.walk(folder, step, extension)