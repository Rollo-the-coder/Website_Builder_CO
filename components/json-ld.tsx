import { site, services } from "@/lib/site";

// Structured data for local SEO. Uses ProfessionalService (a LocalBusiness subtype).
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    areaServed: site.serviceAreas.map((area) => ({ "@type": "City", name: area })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "WA",
      addressCountry: "US",
    },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, description: service.summary },
    })),
    slogan: site.tagline,
  };

  if (site.publicContactEmail) {
    Object.assign(data, { email: site.publicContactEmail });
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
