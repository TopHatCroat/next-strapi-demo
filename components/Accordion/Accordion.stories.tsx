import type { Meta, StoryObj } from "@storybook/react"
import { Accordion } from "./Accordion"

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
  args: {
    items: [
      {
        title: "Title",
        content: "Content",
      },
      {
        title: "A much longer title for a much longer content section",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam ni nisi quis nisl. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam ni nisi quis nisl. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam ni nisi quis nisl. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam ni nisi quis nisl. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam ni nisi quis nisl. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam ni nisi quis nisl. Nulla euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam ni nisi quis nisl.",
      },
    ],
  },
  argTypes: {},
}

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => <Accordion {...args} />,
}

export default meta
