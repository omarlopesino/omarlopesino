import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const variants = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'];

const meta = {
  title: 'UI/Link',
  component: Link,
  args: {
    children: 'Link',
    variant: "link",
    href: "https://example.com",
    title: "Example",
    target: "_self",
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variants,
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top', '_unfencedTop'],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Button: Story = { args: {variant: 'default'} };
export const Secondary: Story = { args: {variant: 'secondary'} };
