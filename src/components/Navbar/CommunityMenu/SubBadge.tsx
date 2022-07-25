import Image from 'next/future/image'
import { HomeFill } from '~/components/Icons'

export const SubBadge = (props: { name?: string; thumbnailUrl?: string }) => {
  return (
    <div className='flex gap-2 items-center'>
      {props.thumbnailUrl && props.name ? (
        <Image
          src={props.thumbnailUrl}
          width={20}
          height={20}
          alt={props.name}
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
        {props.name ? `r/${props.name}` : 'Home'}
      </span>
    </div>
  )
}
