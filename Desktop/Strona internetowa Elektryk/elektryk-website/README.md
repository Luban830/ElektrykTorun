# Elektryk Toruń - Strona internetowa

Nowoczesna strona internetowa dla elektryka zbudowana w Next.js 14, TypeScript i Tailwind CSS.

## 🚀 Funkcje

- **4 podstrony**: Strona główna, Nasze Usługi, Cennik, Kontakt
- **Hero sections** na każdej podstronie z obrazami w tle
- **Formularz kontaktowy** z integracją Resend API
- **Responsywny design** z Tailwind CSS
- **SEO zoptymalizowany** z JSON-LD, sitemap i robots.txt
- **Gotowy do deployu** na Vercel

## 🛠️ Technologie

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (wysyłanie emaili)
- **Lucide React** (ikony)
- **Google Fonts** (Manrope)

## 📦 Instalacja

1. Sklonuj repozytorium:
```bash
git clone <repository-url>
cd elektryk-website
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Skonfiguruj zmienne środowiskowe:
```bash
cp env.example .env.local
```

4. Edytuj `.env.local` i dodaj swoje klucze API:
```env
NEXT_PUBLIC_SITE_URL=https://twoja-domena.pl
NEXT_PUBLIC_PHONE=+48123456789
RESEND_API_KEY=twoj_klucz_resend
MAIL_FROM=kontakt@twoja-domena.pl
MAIL_TO=kontakt@twoja-domena.pl
```

## 🚀 Uruchomienie

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## 📁 Struktura projektu

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── api/               # API routes
│   ├── uslugi/            # Strona usług
│   ├── cennik/            # Strona cennika
│   ├── kontakt/           # Strona kontakt
│   ├── layout.tsx         # Główny layout
│   ├── page.tsx           # Strona główna
│   ├── sitemap.ts         # Sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── ui/                # Komponenty UI
│   ├── sections/          # Sekcje stron
│   └── SEO/               # Komponenty SEO
public/
└── images/                # Obrazy
```

## 🎨 Branding

### Kolory
- **Tła**: `#F9FAFB` (główne), `#FFFFFF` (karty)
- **Akcenty**: `#F5C518` (żółty)
- **Awaria**: `#E53935` (czerwony)
- **Tekst**: `#111827` (ciemny), `#4B5563` (subtelny)

### Typografia
- **Font**: Manrope (Google Fonts)
- **Responsywność**: Mobile-first approach

## 📧 Konfiguracja emaili

1. Zarejestruj się na [Resend](https://resend.com)
2. Utwórz API key
3. Dodaj klucz do zmiennej `RESEND_API_KEY`
4. Skonfiguruj domenę email w Resend

## 🚀 Deploy na Vercel

1. Wrzuć kod na GitHub
2. Połącz repozytorium z Vercel
3. Dodaj zmienne środowiskowe w Vercel:
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_PHONE`
   - `RESEND_API_KEY`
   - `MAIL_FROM`
   - `MAIL_TO`
4. Deploy!

## 📱 Responsywność

Strona jest w pełni responsywna i zoptymalizowana dla:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔍 SEO

- ✅ Metadata API
- ✅ JSON-LD schema (LocalBusiness/Electrician)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph / Twitter Cards
- ✅ Semantic HTML5
- ✅ Accessibility (ARIA)

## 📞 Kontakt

- **Telefon**: +48 123 456 789
- **Email**: kontakt@elektrykpro.pl
- **Obszar**: Warszawa i okolice

## 📄 Licencja

MIT License