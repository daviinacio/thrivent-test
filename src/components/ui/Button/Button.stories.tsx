import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from ".";

const meta = {
  // 👇 The component you're working on
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
// 👇 Type helper to reduce boilerplate
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<Button primary label="Button" />`
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost button",
  },
};
