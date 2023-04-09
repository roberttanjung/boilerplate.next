import type { FC, ReactNode } from 'react'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import useSidebarToggle from './hooks/useSidebarToggle'

const DynamicLayout = dynamic(() => import('../Layout'))
const DynamicHeader = dynamic(() => import('./components/AuthHeader'))
const DynamicSidebar = dynamic(() => import('./components/AuthSidebar'))
const DynamicBreadcrumbs = dynamic(() => import('./components/AuthBreadcrumbs'))

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  // group: hook
  const { stateIsToggle, onSidebarToggle } = useSidebarToggle()

  // group: setup
  const setupMain = () => {
    const getElHeader = document.getElementById('section:header')
    const getElMain = document.getElementById('section:main')

    if (getElHeader && getElMain) {
      getElMain.style.maxHeight = `${(window.screen.height - getElHeader.offsetHeight)}px`
    }
  }

  // group: mount
  useEffect(() => {
    setupMain()
  }, [])

  return (
    <DynamicLayout>
      <DynamicSidebar isToggle={stateIsToggle} />
      <section className="basis-full">
        <DynamicHeader onSidebar={onSidebarToggle} />
        <main id="section:main" className="py-2 px-10 overflow-y-auto">
          <DynamicBreadcrumbs />
          <section className="pt-2">
            {children}
          </section>
        </main>
      </section>
    </DynamicLayout>
  )
}

export default AuthLayout
