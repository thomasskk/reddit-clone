import { Skeleton } from '@mantine/core'

export const SkeletonList = (props: {
  children: React.ReactNode
  visible: boolean
  count: number
  height?: number
  width?: number
}) => {
  if (props.visible) {
    return (
      <div className='px-3 py-2 flex flex-col gap-2'>
        {new Array(props.count).fill(null).map((_, i) => (
          <Skeleton height={props.height} width={props.width} key={i} />
        ))}
      </div>
    )
  }

  return <>{props.children}</>
}
