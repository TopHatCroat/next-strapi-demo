import type { Meta, StoryObj } from "@storybook/react"
import { Pill } from "./Pill"

const meta: Meta<typeof Pill> = {
  title: "Pill",
  component: Pill,
  args: {
    active: true,
    clickable: true,
    children: "Pill",
  },
  argTypes: {
    active: {
      control: { type: "boolean" },
    },
    clickable: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
}

type Story = StoryObj<typeof Pill>

export const Default: Story = {
  render: (args) => <Pill onClick={args.clickable ? () => alert("clicekd") : undefined} {...args} />,
}

export default meta
