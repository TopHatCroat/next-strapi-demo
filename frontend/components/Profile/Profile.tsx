import { cva } from "class-variance-authority"
import { Button } from "frontend/components/Button/Button"

export interface ProfileProps {
  id: string
  name: string
  description: string
  active: boolean
}

const profilePicture = cva(["h-32 w-32 rounded-full bg-amber-500"], {
  variants: {
    active: { true: ["border-2 border-slate-500"], false: ["border-2 border-green-400"] },
  },
})

export function Profile({ id, name, description, active }: ProfileProps) {
  return (
    <div className="flex max-w-md gap-4 rounded-xl bg-white px-4 py-8 shadow-lg">
      <div className="flex flex-col items-center">
        <div>
          <div className={profilePicture({ active: active })} />
        </div>
        <Button className="mt-4 max-h-12 whitespace-nowrap" href={`/profiles/${id}`}>
          View Profile
        </Button>
      </div>
      <div className="flex w-64 flex-col pt-8">
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
