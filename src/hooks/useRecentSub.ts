import { useLocalStorage } from '@mantine/hooks'

export const useRecentSub = () => {
  const [recentSubs, setRecentSub] = useLocalStorage<
    {
      name: string
      thumbnailUrl: string
    }[]
  >({
    key: 'recents_communities',
    defaultValue: [],
  })

  const addRecentSub = (name: string, thumbnailUrl: string) => {
    const newRecentSubs = [
      {
        name,
        thumbnailUrl,
      },
      ...recentSubs,
    ].slice(0, 10)

    setRecentSub(newRecentSubs)
  }

  return {
    recentSubs,
    addRecentSub,
  }
}
