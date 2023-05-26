import React from "react"
import Card from "components/Card/Card"
import Image from "components/Image/Image"
import Layout from "components/Layout/Layout"
import { fetchApi } from "lib/api"
import { ArticleDto } from "lib/types"
import GlobalPageProps from "pages/GlobalPageProps"

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
                slug,
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
                href={`/article/${slug}`}
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
