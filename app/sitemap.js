export default function sitemap() {
  const baseUrl = "https://www.3dwork.it";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/render-interni`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/render-esterni`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/render-immobili`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cookie`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.3,
    }
  ];
}

