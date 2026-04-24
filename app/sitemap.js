export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: 'https://www.3dwork.it',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
