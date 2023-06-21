import "../styles/tailwind.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppContext, AppProps } from "next/app"
import App from "next/app"
import Head from "next/head"
import { Configuration } from "../api"

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
    <>
      <Head>
        <title>NextJS + Strapi Demo </title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)

  return {
    ...appProps,
    pageProps: {
      pages: [
        { label: "Home", href: "/" },
        { label: "Profiles", href: "/profiles" },
        { label: "FAQ", href: "/faq" },
        { label: "Articles", href: "/articles" },
      ],
    },
  }
}

export default MyApp
