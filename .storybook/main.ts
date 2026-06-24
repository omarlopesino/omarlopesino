import type { StorybookConfig } from '@storybook-astro/framework';
import tailwindcss from '@tailwindcss/vite';
import { pathToFileURL } from 'node:url';
import astroIcon from 'astro-icon';

// astro-icon ships its Vite plugin through an Astro integration. Storybook runs
// its own Vite and does not execute Astro integrations, so `virtual:astro-icon`
// (imported by <Icon />) would never resolve. We invoke the integration's setup
// hook manually to capture the plugin and feed it into Storybook's Vite config.
function astroIconPlugins() {
  const plugins: unknown[] = [];
  const root = pathToFileURL(process.cwd() + '/');
  const integration = astroIcon();
  integration.hooks['astro:config:setup']?.({
    updateConfig: (cfg) => plugins.push(...(cfg.vite?.plugins ?? [])),
    config: { root, output: 'static' },
    logger: { info: console.info, warn: console.warn },
  } as never);
  return plugins;
}

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook-astro/framework',
    options: {},
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss(), ...astroIconPlugins()];
    return config;
  },
};

export default config;
