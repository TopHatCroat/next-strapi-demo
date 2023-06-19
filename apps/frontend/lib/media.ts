import { getStrapiUrl } from "lib/api"

export function getStrapiMedia(url: string) {
  return url.startsWith("/") ? getStrapiUrl(url) : url
}
