import { Icon } from 'astro-icon/components';

export default {
  title: 'Components/Icons',
  component: Icon,
  args: {
    name: 'mdi:linkedin',
    class: 'text-base-content w-8 h-8',
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'mdi:linkedin',
        'mdi:github',
        'mdi:email-outline',
        'mdi:rss',
      ],
    },
    class: { control: 'text' },
  },
};

export const Default = {};
