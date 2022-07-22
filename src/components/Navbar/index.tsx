import React from 'react'
import Image from 'next/future/image'
import { CommunityMenu } from './CommunityMenu'
import router from 'next/router'
import { SearchBar } from './SearchBar'

export const Navbar = () => (
  <div className='flex h-12 bg-primary1 px-5 items-center gap-5 sticky top-0'>
    <div className='flex gap-1 items-center cursor-pointer'>
      <Image
        src='/logo.svg'
        width={30}
        height={30}
        alt='logo'
        onClick={() => router.push('/')}
      />
      <span className='uppercase font-bold'>social</span>
    </div>
    <CommunityMenu />
    <SearchBar />
  </div>
)
