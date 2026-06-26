import PostTeaser from "./PostTeaser.astro";

export default {
  title: 'Components/PostTeaser',
  component: PostTeaser,
  args:  {
    class: 'w-70',
    title: 'My awesome post',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Tag 1', 'Tag 2'],
    date: '2026-06-26',
    image: {
        src: '/placeholder.png',
        alt: 'My awesome image',
        width: 600,
        height: 400,
    },
    url: '#'
  },
};

export const Default = {};
