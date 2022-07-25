import Image from 'next/future/image'
import Link from 'next/link'
import { Add, All, Chat, Mod, Notification, Popular, VideoLive } from '../Icons'
import { CommunityMenu } from './CommunityMenu'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu'

export const Navbar = () => (
  <nav className='sticky top-0'>
    <ul className='flex h-12 bg-primary1 px-5 items-center gap-5'>
      <li className='shrink-0'>
        <Link href='/'>
          <a>
            <Image
              src='https://upload.wikimedia.org/wikipedia/fr/5/58/Reddit_logo_new.svg'
              width={100}
              height={100}
              alt='logo'
            />
          </a>
        </Link>
      </li>
      <li>
        <CommunityMenu />
      </li>
      <li className='w-full'>
        <SearchBar />
      </li>
      <div className='flex gap-2'>
        <li>
          <Link href='r/popular'>
            <a className='hover:bg-primary2 p-1.5 flex rounded'>
              <Popular className='w-5 h-5 bg-inherit' />
            </a>
          </Link>
        </li>
        <li>
          <Link href='r/popular'>
            <a className='hover:bg-primary2 p-1.5 flex rounded'>
              <All className='w-5 h-5 bg-inherit' />
            </a>
          </Link>
        </li>
        <li>
          <Link href='rpan'>
            <a className='hover:bg-primary2 p-1.5 flex rounded'>
              <VideoLive className='w-5 h-5 bg-inherit' />
            </a>
          </Link>
        </li>
        <div className='border-r' />
        <li>
          <button className='hover:bg-primary2 p-1.5 flex rounded'>
            <Mod className='w-5 h-5 bg-inherit' />
          </button>
        </li>
        <li>
          <button className='hover:bg-primary2 p-1.5 flex rounded'>
            <Chat className='w-5 h-5 bg-inherit' />
          </button>
        </li>
        <li>
          <button className='hover:bg-primary2 p-1.5 flex rounded'>
            <Notification className='w-5 h-5 bg-inherit' />
          </button>
        </li>
        <li>
          <Link href='/submit'>
            <a className='hover:bg-primary2 p-1.5 flex rounded'>
              <Add className='w-5 h-5 bg-inherit' />
            </a>
          </Link>
        </li>
        <li>
          <UserMenu />
        </li>
      </div>
    </ul>
  </nav>
)
