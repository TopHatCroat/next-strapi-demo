import Head from "next/head"
import { Accordion } from "components/Accordion/Accordion"
import Layout from "components/Layout/Layout"
import GlobalPageProps from "pages/GlobalPageProps"

interface FaqDto {
  question: string
  answer: string
}

export default function FaqPage({ pages }: GlobalPageProps) {
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
      <Layout pages={pages}>
        <section className="mx-auto flex max-w-screen-md justify-center gap-4">
          <Accordion
            className={"w-full"}
            items={questions.map(({ question, answer }) => ({
              title: question,
              content: answer,
            }))}
          />
        </section>
      </Layout>
    </>
  )
}
