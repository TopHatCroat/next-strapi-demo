import type { Meta, StoryObj } from "@storybook/react"
import { Pill } from "./Pill"

const meta: Meta<typeof Pill> = {
  title: "Pill",
  component: Pill,
  args: {
    active: true,
    children: "Pill",
  },
  argTypes: {
    active: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
    },
  },
}

type Story = StoryObj<typeof Pill>

export const Default: Story = {
  render: (args) => <Pill {...args} />,
}

export default meta
