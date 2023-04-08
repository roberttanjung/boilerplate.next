import { FC } from 'react'
import * as HIcons from '@heroicons/react/24/solid'

const IconSolid: FC<{icon: string | undefined, className?: string}> = ({ icon, className = 'h-6 w-6' }) => {
  const {...icons} = HIcons
  // @ts-ignore
  const TheIcon: JSX.Element = icons[icon]

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon className={className} aria-hidden="true" />
    </>
  )
}

export default IconSolid
