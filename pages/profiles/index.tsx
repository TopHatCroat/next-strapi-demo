import Head from "next/head"
import { Navbar } from "components/Navbar/Navbar"
import { Profile } from "components/Profile/Profile"

interface ProfileDto {
  id: string
  name: string
  description: string
  active: boolean
}

export default function Web() {
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
        ]}
      />
      <section className="mx-auto max-w-screen-lg bg-white dark:bg-gray-900">
        <div className="flex flex-row flex-wrap justify-around gap-6 px-4 py-8 text-center">
          {profiles.map((profile) => (
            <Profile key={profile.id} {...profile} />
          ))}
        </div>
      </section>
    </>
  )
}
