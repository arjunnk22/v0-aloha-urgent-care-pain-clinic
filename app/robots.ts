import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/blog', '/blog/'],
      },
    ],
    sitemap: 'https://alohaurgentcare.com/sitemap.xml',
  }
}
