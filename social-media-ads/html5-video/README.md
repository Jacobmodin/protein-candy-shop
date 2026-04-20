# HTML5 Video Animation - Sweden Protein Candy

En HTML5 Canvas-baserad videoanimation för Sweden Protein Candy - Surt Äpple proteingodis.

## Specifikationer

- **Format**: 1080x1080px (Instagram/TikTok/Facebook square format)
- **Längd**: 15 sekunder
- **Färgschema**: Grönt (#90C850) och svart (#1a1a1a)
- **Teknologi**: HTML5 Canvas med vanilla JavaScript

## Animationssekvens

1. **0-2s**: Fade in produktbild med zoom-in effekt
2. **2-5s**: Text "SWEDEN PROTEIN CANDY" slide in från toppen
3. **5-8s**: Highlight "34g PROTEIN" med puls-effekt
4. **8-11s**: Visa övriga fördelar (L-arginin, Q10, B-vitamin) med stagger animation
5. **11-13s**: Text "Godis utan dåligt samvete! 💪"
6. **13-15s**: Call-to-action "Köp Nu" med produktbild zoom out

## Hur man använder

### Köra lokalt

1. Öppna `index.html` i en modern webbläsare (Chrome, Firefox, Safari, Edge)
2. Animationen startar automatiskt när produktbilden är laddad
3. Använd kontrollerna för att:
   - **Spela**: Starta eller återuppta animationen
   - **Pausa**: Pausa animationen
   - **Starta om**: Börja om från början

### Exportera till MP4

Det finns flera metoder för att exportera Canvas-animationen till MP4-video:

#### Metod 1: Screen Recording (Enklast)

**macOS:**
```bash
# Använd QuickTime Player
# 1. Öppna QuickTime Player
# 2. Välj File > New Screen Recording
# 3. Spela in canvas-området i 15 sekunder
# 4. Exportera som MP4
```

**Windows:**
```bash
# Använd Xbox Game Bar (Win + G)
# 1. Tryck Win + G
# 2. Klicka på Record-knappen
# 3. Spela in i 15 sekunder
# 4. Videon sparas i Videos/Captures
```

**Linux:**
```bash
# Använd ffmpeg med X11 capture
ffmpeg -video_size 1080x1080 -framerate 60 -f x11grab -i :0.0+100,100 -t 15 output.mp4
```

#### Metod 2: Canvas Capture API (Programmatisk)

Lägg till denna kod i `script.js` för automatisk export:

```javascript
// Lägg till efter canvas setup
const stream = canvas.captureStream(60); // 60 FPS
const mediaRecorder = new MediaRecorder(stream, {
    mimeType: 'video/webm;codecs=vp9',
    videoBitsPerSecond: 8000000
});

const chunks = [];
mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
mediaRecorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'protein-candy-ad.webm';
    a.click();
};

// Starta inspelning automatiskt
setTimeout(() => mediaRecorder.start(), 100);
setTimeout(() => mediaRecorder.stop(), 15100);
```

**Konvertera WebM till MP4:**
```bash
ffmpeg -i protein-candy-ad.webm -c:v libx264 -preset slow -crf 22 protein-candy-ad.mp4
```

#### Metod 3: Använd Online-tjänster

1. **Kapwing** (https://www.kapwing.com/tools/screen-recorder)
2. **CloudConvert** (https://cloudconvert.com/webm-to-mp4)
3. **Loom** (https://www.loom.com/)

### Rekommenderad Export-process

För bästa kvalitet:

1. Öppna `index.html` i Chrome/Firefox
2. Högerklicka och välj "Inspect" → Console
3. Klistra in Canvas Capture-koden ovan
4. Ladda om sidan - videon exporteras automatiskt efter 15 sekunder
5. Konvertera .webm till .mp4 med ffmpeg (se ovan)

## Integration på Sociala Medier

### Instagram Feed & Stories

1. Exportera till MP4 (1080x1080px)
2. För Stories: Beskär till 9:16 (1080x1920px) eller använd svart bakgrund
3. Ladda upp via Instagram Creator Studio eller mobilapp

### TikTok

1. Exportera till MP4
2. För TikTok: Lägg till ljud/musik i TikTok-appen
3. Format 1080x1080 fungerar, men 9:16 (1080x1920) är optimalt

### Facebook

1. Exportera till MP4
2. Ladda upp via Facebook Business Manager
3. Lägg till undertexter för ljudlöst visning

## Tekniska Detaljer

- **Canvas API**: Används för all rendering
- **RequestAnimationFrame**: 60 FPS smooth animations
- **Easing Functions**: Custom easing för professionella övergångar
- **Responsive**: Canvas skalas ner för mindre skärmar
- **Browser Support**: Alla moderna webbläsare (Chrome 60+, Firefox 55+, Safari 11+, Edge 79+)

## Filer

- `index.html` - Huvudsida med canvas element
- `style.css` - Styling för sidan och kontroller
- `script.js` - Animation logic
- `assets/product-image.svg` - Produktbild (SVG)

## Anpassning

För att ändra animationen:

1. **Timing**: Ändra tidsintervallen i `script.js` (t.ex. `elapsed >= 2000 && elapsed < 5000`)
2. **Färger**: Uppdatera `colors` objektet
3. **Text**: Ändra textsträngar i draw-funktionerna
4. **Hastighet**: Ändra `DURATION` konstanten

## Support

För frågor eller problem, kontakta utvecklingsteamet.
