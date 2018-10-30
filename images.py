import os.path
from PIL import Image
import base64
import yaml
import StringIO

folder = 'content/post/2018/09-16 dolomiten'
extension = '.md'

def get_image_data(resource, dirname):
    img_src = resource['src']
    img = Image.open(os.path.join(dirname, img_src))
    width, height = img.size
    ratio = float(height) / float(width) * 100.0
    size = 10, 10
    img.thumbnail(size, Image.ANTIALIAS)
    small = file()
    img.save(small, 'jpg')
    encoded = u''.join(base64.encodestring(small.read()).splitlines())
    return {'data': encoded, 'ratio': ratio}

def read_metadata(filename, dirname):
    with open(os.path.join(dirname, filename), 'r') as fh:
        lines = fh.readlines()
    yaml_bounds = [index for index, line in enumerate(lines) if line.startswith('---')]
    yaml_block = ''.join(lines[yaml_bounds[0]+1:yaml_bounds[1]])
    stream = StringIO.StringIO(yaml_block)
    return yaml.safe_load(stream)

def write_metadata(filename, dirname, metadata):
    with open(os.path.join(dirname, filename), 'r') as fh:
        lines = fh.readlines()
    yaml_bounds = [index for index, line in enumerate(lines) if line.startswith('---')]
    del lines[yaml_bounds[0]+1:yaml_bounds[1]]
    yaml_lines = yaml.dump(metadata).split('\n')
    for index, line in enumerate(yaml_lines):
        lines.insert(1 + index, line + '\n')
    with open(os.path.join(dirname, filename), 'w') as fh:
        fh.writelines(lines)
    

def handle_file(filename, dirname):
    metadata = read_metadata(filename, dirname)
    for resource in metadata['resources']:
        image_params = get_image_data(resource, dirname)
        resource['params'] = image_params
        write_metadata(filename, dirname, metadata)        

def step(ext, dirname, names):
    ext = ext.lower()
    for name in filter(lambda n: n.lower().endswith(ext), names):
        handle_file(name, dirname)

os.path.walk(folder, step, extension)
