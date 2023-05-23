import type { Meta, StoryObj } from "@storybook/react"
import { Profile } from "./Profile"

const meta: Meta<typeof Profile> = {
  title: "Profile",
  component: Profile,
  args: {
    id: "1",
    name: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  argTypes: {
    id: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    active: {
      control: { type: "boolean" },
    },
  },
}

type Story = StoryObj<typeof Profile>

export const Default: Story = {
  render: (args) => <Profile {...args} />,
}

export default meta
