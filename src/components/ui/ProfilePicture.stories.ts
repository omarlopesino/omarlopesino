import ProfilePicture from "./ProfilePicture.astro";
export default {
  title: 'Components/ProfilePicture',
  component: ProfilePicture,
  args:  {
    image: {
        alt: 'Placeholder',
        src: '/200x200.jpg',
        width: 200,
        height: 200,
    },
    class: 'w-24 rounded-full'
  },
};
export const Default = {};
