import Image from 'next/future/image'
import { useEffect, useState } from 'react'
import { inferMutationOutput } from '~/utils/trpc'

export const SearchMenu = (props: {
  hoveredId: string
  setHoveredId: (id: string) => void
  menuItems: Map<string, { el: HTMLElement; cb?: () => void }>
  setInputValue: (value: string) => void
  searchData?: inferMutationOutput<'search.global'>
}) => {
  const [data, setData] = useState(props.searchData)

  useEffect(() => {
    props.searchData && setData(props.searchData)
  }, [props.searchData])

  return (
    <ul className='flex flex-col'>
      {data?.map((sub) => (
        <li
          key={sub.id}
          ref={(el) => {
            el &&
              props.menuItems.set(sub.id, {
                el,
                cb: () => props.setInputValue(`r/${sub.name}`),
              })
          }}
          className={`${
            props.hoveredId === sub.id ? 'bg-gray-50' : ''
          } hover:bg-gray-50 flex px-4 py-3 gap-2 cursor-pointer`}
        >
          <div className='self-center'>
            <Image
              src={sub.thumbnailUrl}
              width={23}
              height={23}
              alt={sub.name}
              className='object-contain rounded-full shrink-0'
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-text1 text-sm font-medium'>{sub.name}</span>
            <span className='text-text2 text-xs'>
              Community &#8226;{' '}
              {Intl.NumberFormat('en', { notation: 'compact' }).format(
                sub.memberCount
              )}{' '}
              members
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}
