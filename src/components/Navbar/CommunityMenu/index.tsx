import { Portal, Skeleton } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { useAtom } from 'jotai'
import { ReactNode, useRef, useState } from 'react'
import { BsLayoutSidebarInset } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'
import { CaretDown } from '~/components/Icons'
import { SkeletonList } from '~/components/SkeletonList'
import { useChildBlur } from '~/hooks/useChildBlur'
import { useMenu } from '~/hooks/useMenu'
import { atoms } from '~/store'
import { inferQueryOutput, t } from '~/utils/trpc'
import { SubBadge } from './SubBadge'
import { SubList } from './SubList'

export type GetSubs = inferQueryOutput<'user.getSubs'>

const MenuPortal = (props: { children: ReactNode; isOpen: boolean }) =>
  props.isOpen ? (
    <Portal
      className='top-12 sticky'
      target={document.getElementById('portal_target')!}
    >
      {props.children}
    </Portal>
  ) : (
    <>{props.children}</>
  )

export const CommunityMenu = () => {
  const [subBadgeData] = useAtom(atoms.subBadgeData)
  const [isSideMenu, setIsSideMenu] = useAtom(atoms.isSideMenu)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [node, setNode] = useState<any>(null)
  const [subs, setSubs] = useState<GetSubs>([])

  const { hoveredId, setHoveredId, menuItems, handleKeyDown } = useMenu()

  const filter = useRef('')

  const ref = useClickOutside(() => !isSideMenu && setIsMenuOpen(false), null, [
    node,
  ])

  const query = t.user.getSubs.useQuery(undefined, {
    onSuccess: (subs) => setDataAndFilter(subs),
    enabled: isMenuOpen,
  })

  const setDataAndFilter = (data: GetSubs) => {
    setSubs(
      data
        .filter((d) =>
          filter.current ? `/r/${d.sub.name}`.includes(filter.current) : true
        )
        .sort((a, b) => a.sub.name.localeCompare(b.sub.name))
    )
    menuItems.clear()
  }

  const { handleBlur } = useChildBlur()

  return (
    <div
      className='relative w-64'
      ref={setNode}
      onBlur={handleBlur(() => !isSideMenu && setIsMenuOpen(false))}
      onFocus={() => !isSideMenu && !isMenuOpen && setIsMenuOpen(true)}
    >
      <button
        className={`h-9 w-full border rounded flex items-center justify-between gap-20 py-1 px-2 ${
          isMenuOpen && !isSideMenu
            ? 'border-b-0 border-gray-200 rounded-b-none mt-[-1px]'
            : 'border-transparent'
        } ${isSideMenu ? '' : 'border hover:border-gray-200'}`}
        aria-haspopup={!isSideMenu}
        aria-expanded={!isSideMenu && isMenuOpen}
        aria-controls={!isSideMenu ? 'navmenu1' : undefined}
        id='navcommunitymenu'
        onClick={(e) => e.currentTarget.blur()}
      >
        <SubBadge {...subBadgeData} />
        {!isSideMenu && (
          <div className='flex gap-3 items-center'>
            {isMenuOpen && (
              <BsLayoutSidebarInset
                size={16}
                onClick={(e) => {
                  e.stopPropagation()
                  setIsSideMenu(true)
                }}
              />
            )}
            <CaretDown className='w-5 h-5' />
          </div>
        )}
      </button>
      {isMenuOpen && (
        <MenuPortal isOpen={isSideMenu}>
          <ul
            id='navcommunitymenu'
            aria-labelledby='navmenu1button'
            role='menu'
            ref={ref}
            className={`flex flex-col gap-5 border border-gray-200 rounded-b overflow-visible bg-primary1 ${
              isSideMenu
                ? 'h-[calc(100vh-3rem)] w-72 py-2'
                : 'absolute max-h-[480px] overflow-y-auto border-t-0 w-full py-3'
            }`}
            onKeyDown={handleKeyDown}
          >
            <li className='px-3 flex flex-col gap-1' tabIndex={-1}>
              {isSideMenu && (
                <div className='flex justify-between items-center mb-1'>
                  <h6 className='text-text2 uppercase text-xxs font-medium'>
                    my communities
                  </h6>
                  <CgClose
                    size={30}
                    className='self-end p-1 cursor-pointer hover:bg-gray-50 rounded text-text2'
                    onClick={() => {
                      setIsSideMenu(false)
                      setIsMenuOpen(false)
                    }}
                  />
                </div>
              )}
              <input
                placeholder='Filter'
                className='input'
                onChange={(e) => {
                  filter.current = e.target.value
                  setDataAndFilter(query.data!)
                }}
                defaultValue={filter.current}
                id='sub-filter'
                autoFocus
              />
            </li>
            {[
              {
                type: 'favorites',
                name: 'favorites',
                visible:
                  (subs.some((d) => d.isFavorite) && !query.isLoading) ||
                  query.isLoading,
              },
              { type: 'all', name: 'your communities', visible: true },
              {
                type: 'mod',
                name: 'moderating',
                visible:
                  (subs.some((d) => d.isModerator) && !query.isLoading) ||
                  query.isLoading,
              },
            ].map(
              (data) =>
                data.visible && (
                  <li className='flex flex-col gap-3' key={data.type}>
                    <ul>
                      <h6 className='mb-1 px-3 text-text2 uppercase text-xxs font-medium'>
                        <Skeleton visible={query.isLoading}>
                          {data.name}
                        </Skeleton>
                      </h6>
                      <SkeletonList
                        visible={query.isLoading}
                        count={5}
                        height={18}
                      >
                        <SubList
                          subs={subs}
                          setDataAndFilter={setDataAndFilter}
                          type={data.type as any}
                          menuItems={menuItems}
                          hoveredId={hoveredId}
                          setHoveredId={setHoveredId}
                        />
                      </SkeletonList>
                    </ul>
                  </li>
                )
            )}
          </ul>
        </MenuPortal>
      )}
    </div>
  )
}
