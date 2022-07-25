import { atom } from 'jotai'

export const atoms = {
  status: atom(''),
  isSideMenu: atom(false),
  subBadgeData: atom<{ name: string; thumbnailUrl: string } | undefined>(
    undefined
  ),
  userThumbnailUrl: atom(''),
  userName: atom(''),
}
