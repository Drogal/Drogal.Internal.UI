import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/Overview.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/Page*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/react-vite",

  async viteFinal(config) {
    // customize the Vite config here
    config.build = {
      ...config.build,
      minify: false,
    }
    return config;
  }
};
export default config;