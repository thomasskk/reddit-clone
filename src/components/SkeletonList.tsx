import { Skeleton } from '@mantine/core'

export const SkeletonList = ({
  count,
  children,
  visible,
  width,
  height,
}: {
  children: React.ReactNode
  visible: boolean
  count: number
  height?: number
  width?: number
}) => {
  if (visible) {
    return (
      <div className='px-3 py-2 flex flex-col gap-2'>
        {new Array(count).fill(null).map((_, i) => (
          <Skeleton height={height} width={width} key={i} />
        ))}
      </div>
    )
  }

  return <>{children}</>
}
