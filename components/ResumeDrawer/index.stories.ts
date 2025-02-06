import { Meta, StoryObj } from '@storybook/react';
import ResumeDrawer from '.';
import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'Components/ResumeDrawer',
  component: ResumeDrawer,
};

export default meta;

type Story = StoryObj<typeof ResumeDrawer>;

export const Default: Story = {
  args: {
    drawerOpen: true,
    setDrawerOpen: fn(),
  },
};
