import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { cloneElement, ReactElement } from "react"

export interface CardProps {
  className?: string
  href: string
  header: string
  content: string
  image?: ReactElement
}

const card = cva([
  "flex",
  "flex-col",
  "items-center",
  "bg-white",
  "border",
  "border-gray-200",
  "rounded-lg",
  "shadow",
  "md:flex-row",
  "md:max-w-xl",
  "hover:bg-gray-100",
  "dark:border-gray-700",
  "dark:bg-gray-800",
  "dark:hover:bg-gray-700",
])

export default function Card({ className, href, image, header, content }: CardProps) {
  return (
    <a href={href} className={twMerge(card({ className }))}>
      {image &&
        cloneElement(image, {
          className: "object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
        })}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{header}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
      </div>
    </a>
  )
}
