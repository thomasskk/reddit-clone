import { RiSearchLine } from 'react-icons/ri'
import { t } from '~/utils/trpc'

export const SearchBar = (props: {}) => {
  const mutation = t.search.global.useMutation({
    onSuccess: (data) => {},
  })

  return (
    <div className='group flex gap-2 h-9 items-center px-2 py-2 rounded border hover:border-blue-500 focus-within:border-blue-500 bg-primary2 hover:bg-primary1 focus-within:bg-primary1'>
      <RiSearchLine size={20} className='text-text2' />
      <input
        type='text'
        onChange={(e) => mutation.mutate(e.target.value)}
        className='outline-none text-sm bg-primary2 focus:bg-primary1 group-hover:bg-primary1'
        placeholder='Search Social'
      />
    </div>
  )
}
