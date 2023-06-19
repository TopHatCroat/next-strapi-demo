import ReactMarkdown from "react-markdown"

import rehypeRaw from "rehype-raw"
import Image from "components/Image/Image"
import Layout from "components/Layout/Layout"
import { Profile } from "components/Profile/Profile"
import { fetchApi } from "lib/api"
import GlobalPageProps from "lib/GlobalPageProps"
import { getStrapiMedia } from "lib/media"
import { ArticleDto } from "lib/types"

interface ArticleProps extends GlobalPageProps {
  article: ArticleDto
}

export default function Article({ article, pages }: ArticleProps) {
  console.log("article prop", article)
  if (!Boolean(article)) return <div>404</div>

  const {
    title,
    description,
    content,
    image: {
      data: {
        attributes: { url, width, height, alternativeText },
      },
    },
    author: {
      data: {
        id: authorId,
        attributes: {
          name,
          email,
          picture: {
            data: {
              attributes: { url: authorImg },
            },
          },
        },
      },
    },
  } = article.attributes

  return (
    <Layout pages={pages}>
      <section className="mx-auto max-w-screen-lg px-4 py-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mb-8 text-lg font-normal text-gray-800 sm:px-16 lg:px-48 lg:text-xl">{description}</p>
        <Image className="m-auto" src={getStrapiMedia(url)} width={width} height={height} alt={alternativeText} />
      </section>
      <section className="mx-auto max-w-screen-lg bg-white">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        <hr className="my-4 w-full border" />
        <Profile
          className="float-right"
          id={authorId}
          name={name}
          description={email}
          active={true}
          small={true}
          imgSrc={getStrapiMedia(authorImg)}
        />
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = (await fetchApi("/articles", { fields: ["slug"] })) as { data: ArticleDto[] | null }

  console.log("article res: ", articlesRes)
  if (articlesRes === null) return { paths: [], fallback: true }

  const paths = (articlesRes as { data: ArticleDto[] }).data.map((article) => ({
    params: {
      slug: article.attributes.slug,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const articlesRes = (await fetchApi("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["image", "category", "author.picture"],
  })) as { data: ArticleDto[] | null }

  if (articlesRes === null) return { props: { article: null }, revalidate: 60 }

  return {
    props: { article: (articlesRes as { data: ArticleDto[] }).data[0] },
    revalidate: 60,
  }
}
