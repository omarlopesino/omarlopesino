import type { GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export function buildStaticPaths(language: string) : GetStaticPaths {
  return async () => {
    const posts = await getCollection('blog', ({data}) => {
      return data.language == language;
    });

    return posts.map(post => ({
      params: { id: post.data.slug },
      props: { post },
    }));
  };
} 