import React from "react"
import { ArticleApi } from "api"
import Card from "components/Card/Card"
import Image from "components/Image/Image"
import Layout from "components/Layout/Layout"
import { getApiConfiguration } from "lib/api"
import GlobalPageProps from "lib/GlobalPageProps"
import { getStrapiMedia } from "lib/media"
import { ArticleDto } from "lib/types"

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
                image={
                  url ? (
                    <Image src={getStrapiMedia(url)} width={width} height={height} alt={alternativeText} />
                  ) : undefined
                }
              />
            )
          )}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const articleApi = new ArticleApi(getApiConfiguration())
  const articles = await articleApi.getArticles({ populate: "image,category" });

  return {
    props: {
      articles: articles.data?.data || []
    },
    revalidate: 60,
  }
}
