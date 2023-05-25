import type { Meta, StoryObj } from "@storybook/react"
import Card from "./Card"
import Image from "../Image/Image"

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  args: {
    href: "#",
    header: "Header",
    content: "Content",
  },
  argTypes: {
    href: {
      control: { type: "text" },
    },
    header: {
      control: { type: "text" },
    },
    content: {
      control: { type: "text" },
    },
    image: {
      control: { type: "boolean" },
    },
  },
}

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => {
    if (args.image) {
      return (
        <Card
          {...args}
          image={<Image src="https://picsum.photos/200/300" width={200} height={300} alt="random image" />}
        />
      )
    } else {
      return <Card {...args} />
    }
  },
}

export default meta
