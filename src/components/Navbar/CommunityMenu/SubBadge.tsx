import Image from 'next/future/image'
import { HomeFill } from '~/components/Icons'

export const SubBadge = ({
  name,
  thumbnailUrl,
}: {
  name?: string
  thumbnailUrl?: string
}) => {
  return (
    <div className='flex gap-2 items-center'>
      {thumbnailUrl && name ? (
        <Image
          src={thumbnailUrl}
          width={20}
          height={20}
          alt={name}
          className='object-contain rounded-full shrink-0'
        />
      ) : (
        <HomeFill
          className='w-5 h-5 shrink-0'
          role='img'
          aria-label='subverse logo'
        />
      )}
      <span className='text-text1 text-sm font-medium '>
        {name ? `r/${name}` : 'Home'}
      </span>
    </div>
  )
}
