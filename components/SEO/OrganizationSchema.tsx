export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Reynoso Bienes Raíces",
    "url": "https://reynosobienesraices.com.ar",
    "logo": "https://reynosobienesraices.com.ar/assets/images/logo/logo-reynoso.png",
    "description": "Desarrollos inmobiliarios de calidad en Salta, Argentina. Especialistas en proyectos residenciales y comerciales.",
    "areaServed": {
      "@type": "State",
      "name": "Salta",
      "countryName": "Argentina"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["es", "en"]
    },
    "sameAs": [
      "https://www.facebook.com/reynosobienesraices",
      "https://www.instagram.com/reynosobienesraices",
      "https://www.whatsapp.com"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
