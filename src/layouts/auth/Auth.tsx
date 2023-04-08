import type { FC, ReactNode } from 'react'

import dynamic from 'next/dynamic'
import useSidebarToggle from './hooks/useSidebarToggle'

const DynamicLayout = dynamic(() => import('../Layout'))
const DynamicHeader = dynamic(() => import('./components/AuthHeader'))
const DynamicSidebar = dynamic(() => import('./components/AuthSidebar'))

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  // group: hook
  const { stateIsToggle, onSidebarToggle } = useSidebarToggle()

  return (
    <DynamicLayout>
      <DynamicSidebar isToggle={stateIsToggle} />
      <section className="basis-full">
        <DynamicHeader onSidebar={onSidebarToggle} />
        <main className="p-10 overflow-auto">
          {children}
        </main>
      </section>
    </DynamicLayout>
  )
}

export default AuthLayout
