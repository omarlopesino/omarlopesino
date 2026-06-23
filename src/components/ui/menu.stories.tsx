import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuLink, Submenu } from './menu';

const meta = {
  title: 'UI/NavigationMenu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuLink href="/about">About</MenuLink>
      <MenuLink href="/blog">Blog</MenuLink>
      <MenuLink href="/contact" className="rounded-lg border border-current">Contact</MenuLink>
    </Menu>
  ),
};

export const Megamenu: Story = {
  render: () => (
    <Menu>
      <MenuLink href="/about">About</MenuLink>
      <Submenu summary='Blog'>
          <MenuLink href="/blog">All posts</MenuLink>
          <MenuLink href="/ia">Ia</MenuLink>
      </Submenu>
      <MenuLink href="/contact">Contact</MenuLink>
    </Menu>
  ),
};
