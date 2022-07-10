import { createReactQueryHooks } from '@trpc/react'
import { NextPageContext } from 'next'
import { withTRPC } from '@trpc/next'
import superjson from 'superjson'
import type { AppRouter } from '@social/api/src/trpc/routes'

/**
 * Extend `NextPageContext` with meta data that can be picked up by `responseMeta()` when server-side rendering
 */
interface SSRContext extends NextPageContext {
  /**
   * Set HTTP Status code
   * @usage
   * const utils = trpc.useContext();
   * if (utils.ssrContext) {
   *   utils.ssrContext.status = 404;
   * }
   */
  status?: number
}

export const trpc = createReactQueryHooks<AppRouter, SSRContext>()

export const TRPCProvider = withTRPC<AppRouter>({
  config({ ctx }) {
    return {
      url: process.env.NEXT_PUBLIC_API_URL!,
      fetch: (endpoint, opts) =>
        fetch(endpoint, { ...opts, credentials: 'include' }),
      transformer: superjson,
      queryClientConfig: {
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: true,
          },
        },
      },
    }
  },
  ssr: false,
})
