export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Elektryk Toruń",
    "alternateName": "Elektryk Toruń i okolice",
    "description": "Profesjonalne usługi elektryczne dla domów i firm w Toruniu i okolicach. Instalacje, naprawy, modernizacje, oświetlenie LED, inteligentny dom. Doświadczenie, gwarancja i szybka realizacja.",
    "url": "https://elektrykpro.pl",
    "logo": "https://elektrykpro.pl/images/UX Pilot Design.png",
    "image": "https://elektrykpro.pl/images/UX Pilot Design.png",
    "telephone": "+48697146300",
    "email": "umalego1@wp.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kołłątaja 87-100",
      "addressLocality": "Toruń",
      "postalCode": "87-100",
      "addressRegion": "Kujawsko-Pomorskie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.0138",
      "longitude": "18.6042"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Toruń"
      },
      {
        "@type": "City", 
        "name": "Bydgoszcz"
      },
      {
        "@type": "City",
        "name": "Włocławek"
      },
      {
        "@type": "City",
        "name": "Grudziądz"
      },
      {
        "@type": "City",
        "name": "Inowrocław"
      },
      {
        "@type": "City",
        "name": "Brodnica"
      },
      {
        "@type": "City",
        "name": "Świecie"
      },
      {
        "@type": "City",
        "name": "Chełmno"
      },
      {
        "@type": "City",
        "name": "Golub-Dobrzyń"
      },
      {
        "@type": "City",
        "name": "Lipno"
      },
      {
        "@type": "City",
        "name": "Rypin"
      },
      {
        "@type": "City",
        "name": "Wąbrzeźno"
      },
      {
        "@type": "City",
        "name": "Żnin"
      }
    ],
    "serviceType": [
      "Instalacje elektryczne",
      "Naprawy elektryczne", 
      "Modernizacje instalacji",
      "Oświetlenie LED",
      "Inteligentny dom",
      "Monitoring",
      "Fotowoltaika",
      "Pomiary elektryczne",
      "Rozdzielnie elektryczne",
      "Przyłącza przemysłowe"
    ],
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "PLN",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jan Kowalski"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Profesjonalne usługi elektryczne. Szybka realizacja i wysoką jakość wykonania."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi elektryczne",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Instalacje elektryczne",
            "description": "Kompleksowe instalacje elektryczne dla domów i firm"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Naprawy elektryczne",
            "description": "Szybkie naprawy awarii elektrycznych"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/elektrykpro",
      "https://www.instagram.com/elektrykpro"
    ],
    "foundingDate": "2020",
    "slogan": "Profesjonalne usługi elektryczne - doświadczenie, gwarancja, szybka realizacja"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
