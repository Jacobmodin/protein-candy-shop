# Social Media Ads - Sweden Protein Candy

Två professionella reklamversioner för Sweden Protein Candy - Surt Äpple proteingodis, optimerade för sociala medieplattformar.

## 📦 Innehåll

Detta projekt innehåller två olika implementationer av samma reklamkampanj:

### 1. HTML5 Video Animation (`/html5-video/`)

En 15-sekunders Canvas-baserad videoanimation optimerad för export till MP4.

**Användningsområden:**
- Instagram Feed & Stories
- TikTok videoannonser
- Facebook video ads
- YouTube pre-roll ads
- Nedladdningsbar video för marknadsföringsteam

**Format:** 1080x1080px (Square)

**Teknologi:** HTML5 Canvas, JavaScript

[📖 Se HTML5 Video README →](html5-video/README.md)

### 2. Interaktiv Webbannons (`/interactive-ad/`)

En fullfjädrad interaktiv webbsida med animationer, hover-effekter och click-to-reveal funktionalitet.

**Användningsområden:**
- Landningssida för kampanjer
- Instagram link-in-bio
- Facebook Canvas Ads
- Inbäddning på e-handelssida
- Email marketing (som länk)
- LinkedIn sponsored content

**Teknologi:** HTML5, CSS3, Vanilla JavaScript (ES6+)

[📖 Se Interactive Ad README →](interactive-ad/README.md)

## 🎨 Produktinformation

- **Produkt**: Sweden Protein Candy - Kosttillskott Surt Äpple
- **Nyckelfördelar**:
  - 34g protein per 100g
  - + L-arginin
  - + Koenzym Q10
  - + Vitamin B-Komplex
  - 180g / 60 gummies
- **Färgschema**: 
  - Grönt (#90C850 - Äppelgrön)
  - Svart (#1a1a1a - Bakgrund)
  - Vitt (#ffffff - Text)
- **Tillverkare**: JA::CO AB, Göteborg
- **Målgrupp**: Hälsomedvetna, gym-goers, aktiva svenskar 18-45 år

## 🚀 Snabbstart

### HTML5 Video Version

```bash
# Navigera till video-mappen
cd social-media-ads/html5-video/

# Öppna i webbläsare
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Eller använd en lokal server
python -m http.server 8000
# Besök http://localhost:8000
```

### Interaktiv Version

```bash
# Navigera till interactive-mappen
cd social-media-ads/interactive-ad/

# Öppna i webbläsare
open index.html  # macOS

# Eller använd en lokal server (rekommenderat)
python -m http.server 8001
# Besök http://localhost:8001
```

## 📱 Integration på Sociala Medier

### Instagram

**Feed Posts (1:1):**
- HTML5 Video: Exportera som MP4 → ladda upp direkt
- Interactive: Screenshot hero-section → länka till demo i bio

**Stories (9:16):**
- HTML5 Video: Exportera och beskär till 1080x1920
- Interactive: Använd link sticker till hosted version

**Reels:**
- Använd HTML5 Video som grund
- Lägg till musik i Instagram Reels editor

### TikTok

**Video Ads:**
- Exportera HTML5 Video som MP4
- Ladda upp i TikTok Ads Manager
- Lägg till captions och CTA

**Profile Link:**
- Hosta Interactive version
- Länka från TikTok bio

### Facebook

**Video Ads:**
- HTML5 Video → exportera MP4
- Ladda upp i Ads Manager
- Lägg till undertexter

**Canvas Ads:**
- Använd Interactive version som grund
- Anpassa i Facebook Canvas builder

**Feed Posts:**
- Båda versionerna fungerar
- Video för engagement, Interactive för clicks

### LinkedIn

**Sponsored Content:**
- Screenshot från Interactive version
- Länka till hosted demo
- B2B fokus på hälsofördelar

**Video Posts:**
- HTML5 Video exporterad som MP4
- Professionell ton passar LinkedIn

### Twitter/X

**Video Posts:**
- HTML5 Video som MP4 (max 2:20 men vår är 15s)
- Auto-play in feed

**Link Preview:**
- Interactive version med Open Graph tags

## 🎬 Exportera HTML5 Video till MP4

### Metod 1: Canvas Capture (Rekommenderad)

Se detaljerade instruktioner i [html5-video/README.md](html5-video/README.md#exportera-till-mp4)

### Metod 2: Screen Recording

**macOS:**
```bash
# QuickTime Player
# File → New Screen Recording → Välj canvas-område
```

**Windows:**
```bash
# Xbox Game Bar (Win + G)
```

**Linux:**
```bash
ffmpeg -video_size 1080x1080 -framerate 60 -f x11grab -i :0.0+x,y -t 15 output.mp4
```

### Metod 3: Professionella Verktyg

- **OBS Studio** (Gratis, cross-platform)
- **ScreenFlow** (macOS)
- **Camtasia** (Windows/macOS)

## 🌐 Hosting & Live Demo

### GitHub Pages

```bash
# Committa och pusha till GitHub
git add .
git commit -m "Add social media ads"
git push origin main

# I GitHub repo settings:
# Settings → Pages → Source: main branch
# URL: https://username.github.io/repo-name/social-media-ads/
```

### Netlify (Enklast)

```bash
# Drag-and-drop hela social-media-ads mappen till Netlify
# Eller använd CLI:
netlify deploy --dir=social-media-ads --prod
```

### Vercel

```bash
cd social-media-ads
vercel --prod
```

### Traditionell Hosting

- Ladda upp filerna via FTP till din webbserver
- Ingen server-side kod krävs (statiska filer)
- Fungerar med Apache, Nginx, eller vilken webbserver som helst

## 📊 Jämförelse: Video vs Interactive

| Funktion | HTML5 Video | Interactive |
|----------|-------------|-------------|
| **Användning** | Nedladdningsbar video | Live webbsida |
| **Filstorlek** | ~5-10 MB (MP4) | ~50 KB + bilder |
| **Interaktivitet** | Ingen | Hög |
| **Social Media** | ✅ Alla plattformar | Link-based |
| **Engagement** | Passiv visning | Aktiv interaktion |
| **SEO** | Ingen | Fullt indexerbar |
| **Analytics** | Video stats | Full web analytics |
| **A/B Testing** | Svårt | Enkelt |
| **Uppdateringar** | Exportera om | Redigera direkt |

## 🎯 Rekommenderade Användningsfall

### Använd HTML5 Video när:
- Du vill ha en nedladdningsbar video
- Du ska köra paid ads på Instagram/Facebook/TikTok
- Innehållet ska visas i feed utan klick
- Du behöver samma innehåll på många plattformar
- Passiv konsumtion är målet

### Använd Interactive när:
- Du vill ha högre engagement
- Du har en landningssida/kampanjsida
- Du vill samla detaljerad analytics
- Du planerar A/B testing
- Du vill att användare utforskar produkten
- Du har link-based marknadsföring (bio, email, etc.)

## 🛠️ Tekniska Specifikationer

### HTML5 Video
- **Canvas**: 1080x1080px @ 60 FPS
- **Duration**: 15 sekunder
- **Browser Support**: Chrome 60+, Firefox 55+, Safari 11+, Edge 79+
- **Export Format**: MP4 (H.264)
- **Dependencies**: Inga

### Interactive Ad
- **Responsive**: 320px - 1920px+
- **Browser Support**: Moderna webbläsare (95%+ coverage)
- **Bundle Size**: < 50 KB (exkl. bilder)
- **Load Time**: < 2s på 3G
- **Dependencies**: Inga (vanilla JS)
- **Accessibility**: WCAG AA compliant

## 📝 Anpassning

Båda versionerna är enkla att anpassa:

### Ändra färger
```css
/* I style.css för båda versioner */
:root {
    --green: #90C850;
    --dark-green: #70A830;
    --black: #1a1a1a;
}
```

### Ändra text
Redigera direkt i `index.html` för respektive version.

### Ändra timing (Video)
```javascript
// I html5-video/script.js
const DURATION = 15000; // millisekunder
```

### Lägg till fler benefits (Interactive)
Kopiera en `.benefit-card` i `interactive-ad/index.html`.

## 📈 Prestandaoptimering

Båda versionerna är optimerade för:
- ✅ Snabb laddning (< 2s)
- ✅ Låg bandbredd
- ✅ Mobilprestanda
- ✅ SEO (Interactive version)
- ✅ Accessibility
- ✅ Cross-browser kompatibilitet

## 🐛 Felsökning

### Video visar inte produktbilden
**Lösning**: Kontrollera att `assets/product-image.svg` finns

### Animationer laggar
**Lösning**: Minska antal partiklar i Interactive version

### Kan inte exportera video
**Lösning**: Se detaljerade export-instruktioner i html5-video/README.md

### Fungerar inte på mobil
**Lösning**: Båda versionerna är responsive. Testa i Chrome DevTools mobile mode.

## 📁 Filstruktur

```
social-media-ads/
│
├── README.md                    # Denna fil
│
├── html5-video/                 # Video animation version
│   ├── index.html              # Canvas setup
│   ├── style.css               # Styling
│   ├── script.js               # Animation logic
│   ├── assets/
│   │   └── product-image.svg   # Produktbild
│   └── README.md               # Detaljerad dokumentation
│
└── interactive-ad/              # Interaktiv version
    ├── index.html              # Main markup
    ├── style.css               # Responsive styling
    ├── script.js               # Interaktivitet
    ├── assets/
    │   └── product-image.svg   # Produktbild
    └── README.md               # Detaljerad dokumentation
```

## 🎓 Best Practices för Social Media Ads

### Video Ads (HTML5 Version)
1. **Första 3 sekunderna är kritiska** - Fånga uppmärksamhet direkt
2. **Ljudlös design** - 85% tittar utan ljud
3. **Tydlig CTA** - "Köp Nu" ska synas tydligt
4. **Branding** - Logo/namn inom första 2 sekunder
5. **Mobile-first** - De flesta ser på mobil

### Interactive Ads
1. **Fast loading** - Under 2 sekunder
2. **Clear value prop** - Omedelbart tydligt vad produkten är
3. **One CTA** - En primär action
4. **Social proof** - Lägg till om möjligt
5. **A/B test** - Testa olika versioner

### Båda
1. **Consistent branding** - Använd samma färger/fonts överallt
2. **Track everything** - Implementera analytics
3. **Test på device** - Testa på riktiga mobiler
4. **Optimize images** - Komprimera för snabbare laddning
5. **Accessibility** - Gör tillgänglig för alla

## 📧 Support

För frågor eller problem:
- Läs README-filerna i respektive mapp
- Öppna ett issue i GitHub repository
- Kontakta utvecklingsteamet

## 📄 Licens

Skapat för Sweden Protein Candy by JA::CO AB, Göteborg.

---

**Skapad**: 2024
**Version**: 1.0
**Status**: Production Ready ✅
