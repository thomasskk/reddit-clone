import Link from 'next/link'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
import { t } from '~/utils/trpc'
import { GetSubs } from './index'
import { SubBadge } from './SubBadge'

export const SubList = (props: {
  subs: GetSubs
  setDataAndFilter: (data: GetSubs) => void
  type: 'all' | 'favorites' | 'mod'
  menuItems: Map<string, { el: HTMLElement; cb?: () => void }>
  setHoveredId: (id: string) => void
  hoveredId: string
}) => {
  const mutation = t.user.updateFavoriteSub.useMutation()

  return (
    <>
      {props.type === 'all' && (
        <li
          tabIndex={-1}
          role='menuitem'
          onMouseEnter={() => props.setHoveredId('all')}
          className={`${
            props.hoveredId === 'all' ? 'bg-gray-50' : ''
          } px-3 py-2  flex gap-1 items-center cursor-pointer`}
          ref={(el) => el && props.menuItems.set('all', { el })}
        >
          <FiPlus className='w-5 h-5' />
          <span className='text-sm text-text1'>Create community</span>
        </li>
      )}
      {props.subs.map(({ sub, isFavorite, isModerator, id }, index) => {
        if (props.type === 'favorites' && !isFavorite) {
          return null
        }

        if (props.type === 'mod' && !isModerator) {
          return null
        }

        const subId = id + props.type

        return (
          <li role='none' key={subId} tabIndex={-1}>
            <Link href={`/r/${sub.name}`} passHref>
              <a
                ref={(el) => el && props.menuItems.set(subId, el)}
                className={`${props.hoveredId === subId ? 'bg-gray-50' : ''}
		flex justify-between items-center cursor-pointer`}
                role='menuitem'
                onMouseEnter={() => props.setHoveredId(subId)}
              >
                <div className='px-3 py-2'>
                  <SubBadge thumbnailUrl={sub.thumbnailUrl} name={sub.name} />
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                    mutation.mutate({
                      id,
                      favorite: !isFavorite,
                    })
                    const newData = [...props.subs]
                    newData[index]!.isFavorite = !isFavorite
                    props.setDataAndFilter(newData)
                  }}
                  className='px-3 py-2'
                >
                  {isFavorite ? (
                    <AiFillStar className='text-blue-500 w-5 h-5' />
                  ) : (
                    <AiOutlineStar className='w-5 h-5' />
                  )}
                </div>
              </a>
            </Link>
          </li>
        )
      })}
    </>
  )
}
