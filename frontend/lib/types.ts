export interface ImageDto {
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

export interface ArticleDto {
  id: string
  attributes: {
    title: string
    description: string
    content: string
    slug: string
    category: unknown
    createdAt: Date
    updatedAt: Date
    publishedAt: Date
    image: {
      data: ImageDto
    }
    author: {
      data: AuthorDto
    }
  }
}

interface AuthorDto {
  id: string
  attributes: {
    name: "Sarah Baker"
    email: string
    picture: {
      data: ImageDto
    }
    createdAt: Date
    updatedAt: Date
  }
}
