import type { Meta, StoryObj } from "@storybook/react"
import { Navbar } from "./Navbar"

const meta: Meta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  args: {
    items: [
      {
        label: "Test",
        href: "#",
      },
      {
        label: "A much longer test",
        href: "#",
      },
    ],
  },
}

type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  render: (args) => <Navbar {...args} />,
}

export default meta
