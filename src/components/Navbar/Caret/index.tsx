import { CaretUp, CaretDown } from '~/components/Icons'

export const Caret = ({
  isUp = true,
  className = '',
}: {
  isUp?: boolean
  className?: string
}) => {
  return isUp ? (
    <CaretUp className={className} />
  ) : (
    <CaretDown className={className} />
  )
}
