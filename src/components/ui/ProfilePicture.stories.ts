import ProfilePicture from "./ProfilePicture.astro";
export default {
  title: 'Components/ProfilePicture',
  component: ProfilePicture,
  args:  {
    image: Image,
    class: 'w-24 rounded-full'
  },
};
export const Default = {};
