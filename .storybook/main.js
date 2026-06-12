import { react } from '@storybook-astro/framework/integrations';
import tailwindcss from '@tailwindcss/vite';

export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook-astro/framework',
    options: {
      integrations: [
        react(),
      ],
    },
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()];
    return config;
  },
};
