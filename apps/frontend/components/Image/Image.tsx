import { cva } from "class-variance-authority"
import NextImage from "next/image"
import { twMerge } from "tailwind-merge"

export interface ImageProps {
  className?: string
  src: string
  width: number
  height: number
  alt?: string
}

const imageStyle = cva([])

const Image = ({ className, src, width, height, alt }: ImageProps) => {
  return (
    <NextImage className={twMerge(imageStyle({ className }))} width={width} height={height} src={src} alt={alt || ""} />
  )
}

export default Image
