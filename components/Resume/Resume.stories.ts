import { Meta, StoryObj } from '@storybook/react';
import Resume from './Resume';
import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'Components/ResumeDrawer',
  component: Resume,
};

export default meta;

type Story = StoryObj<typeof Resume>;

export const Default: Story = {
  args: {
    drawerOpen: true,
    setDrawerOpen: fn(),
  },
};
