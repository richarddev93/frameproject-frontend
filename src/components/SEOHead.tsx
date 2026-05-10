'use client';

import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEOHead = ({
  title = 'frameproject | Produção Audiovisual Profissional',
  description = 'Transformando histórias em experiências visuais inesquecíveis. Videomaker e produtor solo especializado em criação de conteúdo audiovisual premium.',
  image = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=630&fit=crop',
  url = 'https://frameproject.com'
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: 'videomaker, produção audiovisual, edição de vídeo, motion graphics, storytelling, produção de conteúdo, vídeos corporativos, vídeos comerciais' },
      { name: 'author', content: 'frameproject' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'frameproject' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },

      { name: 'theme-color', content: '#000000' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', property);
        } else if (name) {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', url);
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "frameproject",
      "description": description,
      "url": url,
      "image": image,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-13:00"
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, image, url]);

  return null;
};
