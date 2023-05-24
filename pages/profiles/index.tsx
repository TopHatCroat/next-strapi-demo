import Head from "next/head"
import { Navbar } from "components/Navbar/Navbar"
import { Profile } from "components/Profile/Profile"
import { useState } from "react"
import { Pill } from "../../components/Pill/Pill"

interface ProfileDto {
  id: string
  name: string
  description: string
  active: boolean
}

interface OptionDto {
  name: string
  active: boolean
}

export default function Web() {
  const [options, setOptions] = useState<OptionDto[]>([
    { name: "Junior", active: false },
    { name: "Senior", active: false },
    { name: "DevOps", active: false },
    { name: "Database", active: false },
  ])

  const onFilterClick = ({ name, active }: OptionDto) => {
    setOptions((options: OptionDto[]) =>
      options.map((option) => (option.name === name ? { ...option, active: !active } : option))
    )
  }

  const profiles: ProfileDto[] = [
    {
      id: "1",
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      active: true,
    },
    {
      id: "2",
      name: "Jane Doe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod, nisl nec aliquet ultricies, nunc " +
        "sapien aliquam diam, vitae aliquam nunc elit nec nunc. asdasda das asd ad asd asd sd asd asd",
      active: false,
    },
    {
      id: "3",
      name: "Jack Do",
      description: "Lorem ipsum dolor sit amet",
      active: true,
    },
  ]

  return (
    <>
      <Head>
        <title>Profiles</title>
      </Head>
      <Navbar
        items={[
          { label: "Home", href: "/" },
          { label: "Profiles", href: "/profiles" },
          { label: "FAQ", href: "/faq" },
        ]}
      />
      <section className="mx-auto flex max-w-screen-md justify-center gap-4">
        {options.map((option) => (
          <Pill key={option.name} onClick={() => onFilterClick(option)} active={option.active}>
            {" "}
            {option.name}{" "}
          </Pill>
        ))}
      </section>
      <section className="mx-auto max-w-screen-lg bg-white dark:bg-gray-900">
        <div className="flex flex-row flex-wrap justify-center gap-6 px-4 py-8 text-center">
          {profiles.map((profile) => (
            <Profile key={profile.id} {...profile} />
          ))}
        </div>
      </section>
    </>
  )
}
