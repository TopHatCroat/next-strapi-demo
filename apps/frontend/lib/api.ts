import { env } from "env.mjs"
import qs from "qs"

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiUrl(path = "") {
  return `${env.NEXT_PUBLIC_BACKEND_URL}${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchApi(path: string, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiUrl(`/api${path}${queryString ? `?${queryString}` : ""}`)}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions).catch((error) => {
    console.error(error)
  })

  // Handle response
  if (response && !response.ok) {
    console.error(response.statusText)
    throw new Error(`An error occurred please try again`)
  }

  if (response) {
    return await response.json()
  } else return null
}
