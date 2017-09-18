import os.path
import datetime

folder = 'content/post'
extension = '.md'

def step(ext, dirname, names):
    ext = ext.lower()
    for name in names:
        if name.lower().endswith(ext):
            modified_ts = os.path.getmtime(os.path.join(dirname, name))
            modified = datetime.datetime.fromtimestamp(modified_ts).strftime('%Y-%m-%dT%H:%M:%S')
            with open(os.path.join(dirname, name), 'r') as fh:
                lines = fh.readlines()

            was_changed = False
            for i, line in enumerate(lines):
                if line.startswith('lastmod: '):
                    lines[i] = 'lastmod: ' + modified + '+00:00\n'
                    was_changed = True
            if not was_changed:
                for i, line in enumerate(lines):
                    if line.startswith('date: '):
                        date_index = i
                lines.insert(date_index + 1, 'lastmod: ' + modified + '+00:00\n')

            with open(os.path.join(dirname, name), 'w') as fh:
                fh.writelines(lines)

os.path.walk(folder, step, extension)