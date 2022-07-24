import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { NextPageWithLayout } from '~/pages/_app'
import { atoms } from '~/store'
import { t } from '~/utils/trpc'

const Page: NextPageWithLayout = () => {
  const router = useRouter()
  const [_, setSubBadgeData] = useAtom(atoms.subBadgeData)

  const query = t.sub.getSub.useQuery(
    {
      name: router.query.sub as string,
    },
    {
      onSuccess: (sub) =>
        setSubBadgeData({
          thumbnailUrl: sub.thumbnailUrl,
          name: sub.name,
        }),
    }
  )

  return <></>
}

Page.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>
export default Page
