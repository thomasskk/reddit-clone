import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { DefaultLayout } from '~/layouts/DefaultLayout'
import { atoms } from '~/store'
import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  const [_, setSubBadgeData] = useAtom(atoms.subBadgeData)

  useEffect(() => {
    setSubBadgeData(undefined)
  }, [setSubBadgeData])

  return (
    <>
      <div className='h-screen w-full bg-red-100 shrink'>HELLO WORLD</div>
    </>
  )
}

Page.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Page
