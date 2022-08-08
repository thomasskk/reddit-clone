import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useSess = (
  args:
    | {
        redirectHref: string
        redirectOn: 'authenticated' | 'unauthenticated'
        onAuth?: () => void
        onUnauth?: () => void
      }
    | {
        redirectHref?: never
        redirectOn?: never
        onAuth?: () => void
        onUnauth?: () => void
      } = {}
) => {
  const { redirectHref, redirectOn } = args

  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.data && redirectOn) {
      router.push(redirectHref)
    }
  }, [redirectHref, redirectOn, router, session.data])

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      args.onUnauth?.()
    }
    if (session.status === 'authenticated') {
      args.onAuth?.()
    }
  }, [args, session.status])

  return {
    isAuthReady: !(
      session.status === 'loading' || session.status === redirectOn
    ),
    session,
  }
}
