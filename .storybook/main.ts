import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)', // Support co-located stories
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  framework: '@storybook/nextjs',
  staticDirs: ['../public'],
};
export default config;
