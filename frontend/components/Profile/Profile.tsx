import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { Button } from "components/Button/Button"
import Image from "components/Image/Image"

export interface ProfileProps {
  className?: string
  id: string
  name: string
  description: string
  active: boolean
  small?: boolean
  imgSrc: string
}

const profile = cva(["flex max-w-md gap-4 rounded-xl bg-white shadow-lg"], {
  variants: {
    small: { true: ["px-2 py-2"], false: ["px-4 py-8"] },
  },
})

const profilePicture = cva(["rounded-full bg-amber-500 max-w-fit max-h-fit"], {
  variants: {
    small: { true: ["w-16 h-16"], false: ["w-32 h-32"] },
    active: { true: ["border-2 border-slate-500"], false: ["border-2 border-green-400"] },
  },
})

const profileContent = cva(["flex flex-col"], {
  variants: {
    small: { true: ["w-full"], false: ["w-64 pt-8"] },
  },
})

export function Profile({ className, id, name, description, active, imgSrc, small = false }: ProfileProps) {
  const imgSize = small ? 64 : 128
  return (
    <div className={twMerge(profile({ small, className }))}>
      <div className="flex flex-col items-center">
        <Image
          className={twMerge(profilePicture({ active, small }))}
          src={imgSrc}
          height={imgSize}
          width={imgSize}
          alt={`${name} profile picture`}
        />
        {small ? null : (
          <Button className="mt-4 max-h-12 whitespace-nowrap" href={`/profiles/${id}`}>
            View Profile
          </Button>
        )}
      </div>
      <div className={twMerge(profileContent({ small }))}>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
        <div>
          <h3 className="font-light">{description}</h3>
        </div>
      </div>
    </div>
  )
}
