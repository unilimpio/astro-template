// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Productos", url: "/products" },
  { name: "Servicios", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Nuestras soluciones",
    links: [
      { name: "Productos Químicos", url: "/products/quimicos" },
      { name: "Productos Absorbentes", url: "/products/absorbentes" },
      { name: "Servicios de aromatización y sanitización", url: "/services" },
      { name: "Dispensadores", url: "/products/dispensers" },
    ],
  },
  {
    section: "Compañia",
    links: [
      { name: "Acerca de", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Oportunidades laborales", url: "/oportunidades-laborales#" },
      { name: "Denuncie actos de corrupción", url: "/denuncia-corrupcion" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/unilimpio",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};