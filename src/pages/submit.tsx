import { DefaultLayout } from '~/layouts/DefaultLayout'
import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div className='h-screen w-full bg-red-100 shrink'>HELLO WORLD</div>
    </>
  )
}

Page.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Page
