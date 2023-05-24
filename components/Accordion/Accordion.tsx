import * as BaseAccordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

const accordion = cva(["rounded", "bg-slate-50", "shadow-black", "drop-shadow-md"])

export interface AccordionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof accordion> {
  items: { title: string; content: string }[]
}

interface AccordionPartProps {
  children: ReactNode
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionPartProps>(({ children, ...props }, forwardedRef) => (
  <BaseAccordion.Header className="flex">
    <BaseAccordion.Trigger
      className="group flex h-[45px] flex-1 cursor-default items-center justify-between bg-slate-50 px-5 text-lg leading-none text-amber-400 shadow-sm hover:bg-amber-50"
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-amber-400 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = forwardRef<HTMLDivElement, AccordionPartProps>(({ children, ...props }, forwardedRef) => (
  <BaseAccordion.Content
    className="text-md overflow-hidden bg-slate-100 text-gray-700 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-6">{children}</div>
  </BaseAccordion.Content>
))
AccordionContent.displayName = "AccordionContent"

export function Accordion({ className, items }: AccordionProps) {
  return (
    <BaseAccordion.Root className={twMerge(accordion({ className }))} type="single" collapsible>
      {items.map(({ title, content }, index) => (
        <BaseAccordion.Item
          key={index}
          className="mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
          value={title}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </BaseAccordion.Item>
      ))}
    </BaseAccordion.Root>
  )
}
