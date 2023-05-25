import Head from "next/head"
import { Navbar } from "frontend/components/Navbar/Navbar"
import { Profile } from "frontend/components/Profile/Profile"
import { useState } from "react"
import { Accordion } from "../../components/Accordion/Accordion"
import { Pill } from "../../components/Pill/Pill"

interface FaqDto {
  question: string
  answer: string
}

export default function Web() {
  const questions: FaqDto[] = [
    {
      question: "What is the difference between a junior and a senior developer?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod, nisl nec aliquet ultricies, nunc ",
    },
    {
      question: "How do I become a senior developer?",
      answer: "Lorem ipsum dolor sit amet",
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
        <Accordion
          className={"w-full"}
          items={questions.map(({ question, answer }) => ({
            title: question,
            content: answer,
          }))}
        />
      </section>
    </>
  )
}
