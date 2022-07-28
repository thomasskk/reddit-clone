import Image from 'next/future/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { UseMenuHandleRef } from '~/hooks/useMenu'
import { inferMutationOutput } from '~/utils/trpc'

export const SearchMenu = (props: {
  hoveredId: string
  setHoveredId: (id: string) => void
  setInputValue: (value: string) => void
  searchData?: inferMutationOutput<'search.global'>
  handleRef: UseMenuHandleRef
}) => {
  const [data, setData] = useState(props.searchData)

  useEffect(() => {
    props.searchData && setData(props.searchData)
  }, [props.searchData])

  return (
    <>
      {data?.map((sub) => (
        <li
          key={sub.id}
          ref={props.handleRef(sub.id, () =>
            props.setInputValue(`r/${sub.name}`)
          )}
        >
          <Link href={`r/${sub.name}`} passHref>
            <a
              className={`${
                props.hoveredId === sub.id ? 'bg-gray-50' : ''
              } hover:bg-gray-50 flex px-4 py-3 gap-2 cursor-pointer`}
              tabIndex={-1}
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
                <span className='text-text1 text-sm font-medium'>
                  {sub.name}
                </span>
                <span className='text-text2 text-xs'>
                  Community &#8226;{' '}
                  {Intl.NumberFormat('en', { notation: 'compact' }).format(
                    sub.memberCount
                  )}{' '}
                  members
                </span>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </>
  )
}
