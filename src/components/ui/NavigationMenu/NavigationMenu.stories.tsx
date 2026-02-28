import type { Meta, StoryObj } from "@storybook/nextjs";

import { NavigationMenu } from ".";

const meta = {
  // 👇 The component you're working on
  component: NavigationMenu.Root,
} satisfies Meta<typeof NavigationMenu.Root>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<Button primary label="Button" />`
export const Default: Story = {
  args: {
    children: (
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Trigger</NavigationMenu.Trigger>
          <NavigationMenu.Content>Content</NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    ),
  },
};
