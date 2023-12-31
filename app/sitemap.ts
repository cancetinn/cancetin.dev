import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {
/*  let blogs = getBlogPosts().map((post) => ({
    url: `https://cancetin.dev/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));*/

  let routes = ['', '', '', '/uses', '/work'].map((route) => ({
    url: `https://cancetin.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes,];
}
