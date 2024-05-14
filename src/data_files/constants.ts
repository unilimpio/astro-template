import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Unilimpio",
  tagline: "Soluciones de Higiene Profesional",
  description: "Unilimpio es el aliado en higiene profesional para organizaciones y empresas que le permite generar ahorros importantes al mismo tiempo que mantiene el más alto estándar de higiene, inocuidad y bienestar para sus colaboradores, clientes y ususarios. Explore nuestro catálogo o envienos un mensaje para ser atendido por uno de nuestros asesores.",
  description_short: "Unilimpio, es su aliado para una solución definitiva a sus requeriomioentos de higiene profesional.",
  url: "https://unilimpio.com",
  author: "MFC",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-EC",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es_EC",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Soluciones de higiene profesional.`,
  description: "Contáctenos hoy mismo y descubra como lograr ahorro, mejor uso de productos, asi como mayor satisfacción y bienestar para sus colaboradores y clientes a través de soluciones adecuadas y sustentables de higiene profesional.",
  image: ogImageSrc,
};
