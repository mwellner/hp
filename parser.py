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

            found_lastmod = False
            needs_update = False
            for i, line in enumerate(lines):
                if line.startswith('lastmod: '):
                    found_lastmod = True
                    new_line = 'lastmod: ' + modified + '+00:00\n'
                    if (new_line[:10] != line[:10]):
                        print new_line + ' vs. ' + line
                        lines[i] = new_line
                        needs_update = True
            if not found_lastmod:
                for i, line in enumerate(lines):
                    if line.startswith('date: '):
                        date_index = i
                lines.insert(date_index + 1, 'lastmod: ' + modified + '+00:00\n')
                needs_update = True

            with open(os.path.join(dirname, name), 'w') as fh:
                fh.writelines(lines)

os.path.walk(folder, step, extension)