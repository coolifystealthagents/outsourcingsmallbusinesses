import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1536, 1024
manifest = json.loads(Path('publishing/2026-10-12/manifest.json').read_text())
output = Path('public/october-12-2026')
output.mkdir(parents=True, exist_ok=True)
for stale in output.glob('*.png'):
    stale.unlink()
font_paths = ['/System/Library/Fonts/Supplemental/Arial Bold.ttf','/System/Library/Fonts/Supplemental/Arial.ttf']
bold = ImageFont.truetype(font_paths[0], 72)
label_font = ImageFont.truetype(font_paths[0], 29)
small = ImageFont.truetype(font_paths[1], 29)
palettes = [('#1a2e05','#65a30d','#d9f99d'),('#172554','#2563eb','#bfdbfe'),('#292524','#c2410c','#fed7aa'),('#1f2937','#7c3aed','#ddd6fe'),('#083344','#0891b2','#a5f3fc')]

def wrap(draw, text, font, max_width):
    lines=[]; current=''
    for word in text.split():
        candidate=(current+' '+word).strip()
        if current and draw.textbbox((0,0),candidate,font=font)[2] > max_width:
            lines.append(current); current=word
        else: current=candidate
    if current: lines.append(current)
    return lines[:4]

for index, entry in enumerate(manifest['entries']):
    bg, accent, pale = palettes[index % len(palettes)]
    image = Image.new('RGB',(WIDTH,HEIGHT),bg)
    draw = ImageDraw.Draw(image)
    draw.ellipse((1180,-230,1740,330),fill=accent)
    draw.ellipse((-230,760,260,1250),fill=accent)
    draw.rounded_rectangle((1120,350,1430,800),radius=34,fill=pale)
    draw.ellipse((1235,430,1315,510),fill=accent)
    for y,w in [(585,180),(650,180),(715,125)]: draw.rounded_rectangle((1185,y,1185+w,y+18),radius=9,fill=bg)
    label=f"{entry['type'].upper()}  ·  SMALL-BUSINESS PLAYBOOK"
    draw.text((105,105),label,font=label_font,fill=pale)
    draw.rectangle((105,170,1025,182),fill=accent)
    y=265
    title_lines = wrap(draw,entry['title'],bold,930)
    if ' '.join(title_lines) != entry['title']:
        raise ValueError(f"Title did not fit thumbnail: {entry['title']}")
    for line in title_lines:
        draw.text((105,y),line,font=bold,fill='white')
        y += 91
    draw.rectangle((105,845,920,849),fill=pale)
    draw.text((105,884),'Evidence  ·  authority  ·  verification',font=small,fill=pale)
    image.save(output/f"{entry['slug']}.png",format='PNG',optimize=True,compress_level=9)
print(json.dumps({'status':'rendered','count':len(manifest['entries']),'dimensions':[WIDTH,HEIGHT]}))
