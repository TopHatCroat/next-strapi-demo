import React from "react"
import Layout from "components/Layout/Layout"
import { fetchApi } from "lib/api"
import GlobalPageProps from "pages/GlobalPageProps"
import Card from "components/Card/Card"
import Image from "components/Image/Image"

interface ArticleDto {
  id: string
  attributes: {
    title: string
    description: string
    content: string
    slug: string
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    category: unknown
    image: {
      data: {
        id: string
        attributes: {
          name: string
          alternativeText: string
          caption: string
          width: number
          height: number
          formats: unknown
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: null
          provider: string
          provider_metadata: string
          createdAt: Date
          updatedAt: Date
        }
      }
    }
  }
}

interface ArticlesProps extends GlobalPageProps {
  articles: ArticleDto[]
}

export default function Articles({ pages, articles }: ArticlesProps) {
  return (
    <Layout pages={pages}>
      <h1 className="py-12 text-center text-3xl font-extrabold">Articles</h1>
      <section className="mx-auto max-w-screen-xl bg-white">
        <div className="flex flex-row flex-wrap justify-center gap-6 px-4 py-8 text-center">
          {articles.map(
            ({
              id,
              attributes: {
                title,
                description,
                image: {
                  data: {
                    attributes: { url, width, height, alternativeText },
                  },
                },
              },
            }) => (
              <Card
                className="w-full"
                key={id}
                href="#"
                header={title}
                content={description}
                image={url ? <Image src={url} width={width} height={height} alt={alternativeText} /> : undefined}
              />
            )
          )}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes] = await Promise.all([
    fetchApi("/articles", { populate: ["image", "category"] }) as Promise<{ data: ArticleDto[] }>,
    fetchApi("/categories", { populate: "*" }),
    fetchApi("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
    },
    revalidate: 1,
  }
}
