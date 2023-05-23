import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const pill = cva(
  ["rounded", "border", "border-blue-400", "bg-blue-100", "px-4", "py-2", "text-s", "font-medium", "text-blue-800"],
  {
    variants: {
      active: { true: [""], false: ["border-gray-500", "bg-gray-100", "text-gray-800"] },
    },
    defaultVariants: {
      active: true,
    },
  }
)

export interface PillProps extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof pill> {
  active: boolean
}

export function Pill({ className, active, ...props }: PillProps) {
  return (
    <span className={twMerge(pill({ className, active }))} {...props}>
      {props.children}
    </span>
  )
}
