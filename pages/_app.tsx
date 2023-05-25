import "../styles/tailwind.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 5 * 60 * 1000,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
