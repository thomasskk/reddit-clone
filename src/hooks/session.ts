import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useSess = (args: {
  redirectHref?: string
  redirectOn?: 'authenticated' | 'unauthenticated'
}) => {
  const { redirectHref = '/', redirectOn } = args

  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.data && redirectOn) {
      router.push(redirectHref)
    }
  }, [redirectHref, redirectOn, router, session.data])

  return {
    isReady: !(session.status === 'loading' || session.status === redirectOn),
  }
}
