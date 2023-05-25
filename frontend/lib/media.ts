import { getStrapiUrl } from "lib/api"

export function getStrapiMedia(media: { data: { attributes: { url: string } } }) {
  const { url } = media.data.attributes
  return url.startsWith("/") ? getStrapiUrl(url) : url
}