import RecommendedPosts from "./RecommendedPosts.astro";

export default {
  title: 'Components/RecommendedPosts',
  component: RecommendedPosts,
  args:  {
    title: 'You may also like',
    posts: [
        {
            title: 'My awesome post',
            category: 'Test',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tags: [
            {
                name: 'Tag 1',
                key: 'tag1',
            },
            {
                name: 'Tag 2',
                key: 'tag2',
            },
            ],
            date: '2026-06-26',
            image: {
                src: '/placeholder.png',
                alt: 'My awesome image',
                width: 600,
                height: 400,
            },
            url: '#',
        },
        {
            title: 'My awesome post',
            category: 'Test',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tags: [
            {
                name: 'Tag 1',
                key: 'tag1',
            },
            {
                name: 'Tag 2',
                key: 'tag2',
            },
            ],
            date: '2026-06-26',
            image: {
                src: '/placeholder.png',
                alt: 'My awesome image',
                width: 600,
                height: 400,
            },
            url: '#',
        }
    ]
  },
};

export const Default = {};
