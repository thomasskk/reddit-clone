import React from 'react'
import Image from 'next/future/image'
import { CommunityMenu } from './CommunityMenu'
import router from 'next/router'
import { SearchBar } from './SearchBar'

export const Navbar = () => (
  <div className='flex h-12 bg-primary1 px-5 items-center gap-5 sticky top-0'>
    <Image
      src='https://upload.wikimedia.org/wikipedia/fr/5/58/Reddit_logo_new.svg'
      width={100}
      height={100}
      alt='logo'
      className='shrink-0'
      onClick={() => router.push('/')}
    />
    <CommunityMenu />
    <SearchBar />
  </div>
)
