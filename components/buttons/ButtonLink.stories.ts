import { Meta } from '@storybook/react';
import ButtonLink from './ButtonLink';

const meta: Meta<typeof ButtonLink> = {
  title: 'Components/Buttons/ButtonLink',
  component: ButtonLink,
};

export default meta;

export const Primary = {
  args: {
    href: '#',
    label: 'My Journey',
    variant: 'primary',
  },
};
