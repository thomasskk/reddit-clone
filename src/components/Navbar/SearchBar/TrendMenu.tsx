import Image from 'next/future/image'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import { FiLink } from 'react-icons/fi'
import { RiSearchLine } from 'react-icons/ri'
import { TbCircleX } from 'react-icons/tb'
import { SkeletonList } from '~/components/SkeletonList'
import { t } from '~/utils/trpc'

export const TrendMenu = (props: {
  hoveredId: string
  setHoveredId: (id: string) => void
  menuItems: Map<string, { el: HTMLElement; cb?: () => void }>
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
    <ul className='flex flex-col'>
      {props.searchHistory?.map((term, index) => (
        <li
          key={term}
          ref={(el) =>
            el &&
            props.menuItems.set(term, {
              el,
              cb: () => props.setInputValue(term),
            })
          }
          className={`${
            props.hoveredId === term ? 'bg-gray-50' : ''
          } hover:bg-gray-50 flex justify-between px-4 py-3 gap-2 cursor-pointer`}
        >
          <div className='flex gap-2 items-center'>
            <RiSearchLine size={20} className='text-text1' />
            <span>{term}</span>
          </div>
          <TbCircleX
            className='shrink-0 h-6 w-6 text-text1'
            onClick={() => {
              props.setSearchHistory((v) => {
                const set = new Set(v)
                set.delete(term)
                return Array.from(set)
              })
              props.menuItems.delete(term)
            }}
          />
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
          if (post) {
            const id = post.id + index
            return (
              <li
                key={id}
                ref={(el) =>
                  el &&
                  props.menuItems.set(id, {
                    el,
                    cb: () => props.setInputValue(keywords),
                  })
                }
                className={`${props.hoveredId === id ? 'bg-gray-50' : ''} ${
                  index === arr.length - 1
                    ? 'border-0'
                    : 'border-b border-gray-200'
                } hover:bg-gray-50 flex p-3 cursor-pointer w-full justify-between`}
              >
                <div className='flex gap-2'>
                  <BsArrowUpRightCircle className='text-blue-600 w-5 h-5 shrink-0' />
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
                  <FiLink className='w-5 h-5 shrink-0 text-blue-600' />
                </div>
              </li>
            )
          }
        })}
      </SkeletonList>
    </ul>
  )
}
