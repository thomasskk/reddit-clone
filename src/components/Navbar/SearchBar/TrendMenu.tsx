import Image from 'next/future/image'
import Link from 'next/link'
import { Clear, LinkPost, Popular, Search } from '~/components/Icons'
import { SkeletonList } from '~/components/SkeletonList'
import { UseMenuHandleRef, UserMenuItemsMap } from '~/hooks/useMenu'
import { t } from '~/utils/trpc'

export const TrendMenu = (props: {
  hoveredId: string
  setHoveredId: (id: string) => void
  handleRef: UseMenuHandleRef
  menuItems: UserMenuItemsMap
  setInputValue: (value: string) => void
  searchHistory: string[]
  setSearchHistory: (value: (value: string[]) => string[]) => void
}) => {
  const query = t.search.trendingPosts.useQuery({
    days: 1,
    hours: 0,
    take: 5,
  })

  return (
    <>
      {props.searchHistory?.map((term) => (
        <li
          key={term}
          ref={props.handleRef(term, () => props.setInputValue(term))}
        >
          <Link href={`/search?q=${term}`} passHref>
            <a
              className={`${
                props.hoveredId === term ? 'bg-gray-50' : ''
              } hover:bg-gray-50 flex justify-between gap-2 cursor-pointer`}
              tabIndex={-1}
            >
              <div className='flex gap-2 items-center px-4 py-2'>
                <Search className='text-text1 w-5 h-5' />
                <span>{term}</span>
              </div>
              <div
                className='py-2 px-4 flex items-center'
                onClick={(e) => {
                  e.preventDefault()
                  props.setSearchHistory((v) => {
                    const set = new Set(v)
                    set.delete(term)
                    return Array.from(set)
                  })
                  props.menuItems.delete(term)
                }}
              >
                <Clear className='shrink-0 h-5 w-5 text-text1' />
              </div>
            </a>
          </Link>
        </li>
      ))}
      {props.searchHistory?.length > 0 && <div className='h-1 bg-gray-100' />}
      <li>
        <h6 className='text-text2 uppercase text-xs font-semibold p-3'>
          trending today
        </h6>
      </li>
      <SkeletonList visible={query.isLoading} count={5} height={20}>
        {query.data?.map(({ post, keywords }, index, arr) => {
          const id = post.id + index

          return (
            <li
              key={id}
              ref={props.handleRef(id, () => props.setInputValue(keywords))}
            >
              <Link href={`/search?q=${keywords}`} passHref>
                <a
                  tabIndex={-1}
                  className={`${props.hoveredId === id ? 'bg-gray-50' : ''} ${
                    index === arr.length - 1
                      ? 'border-0'
                      : 'border-b border-gray-200'
                  } hover:bg-gray-50 flex p-3 cursor-pointer w-full justify-between`}
                >
                  <div className='flex gap-2'>
                    <Popular className='text-blue-600 w-5 h-5 shrink-0' />
                    <div className='flex flex-col gap-1'>
                      <span className='font-semibold text-sm first-letter:uppercase'>
                        {keywords}
                      </span>
                      <p className='text-sm first-letter:uppercase text-text2'>
                        {post.title}
                      </p>
                      <div className='flex gap-1'>
                        <Image
                          src={post.sub.thumbnailUrl}
                          width={14}
                          height={14}
                          alt={post.sub.name}
                          className='object-contain rounded-full shrink-0'
                        />
                        <span className='text-xs text-text2'>
                          r/{post.sub.name} and more
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='px-3 self-center'>
                    <LinkPost className='w-5 h-5 shrink-0 text-blue-600' />
                  </div>
                </a>
              </Link>
            </li>
          )
        })}
      </SkeletonList>
    </>
  )
}
