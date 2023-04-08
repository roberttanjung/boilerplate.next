import type { FC } from 'react'

import AuthSidebarMenu from './AuthSidebarMenu'

// mocks
import listMenus from '@/mocks/list-menu'

const AuthSidebar: FC<{ isToggle: boolean }> = ({ isToggle }) => {
  // group: set
  const setToggle = (): string => {
    let set = 'basis-[250px]'

    if (isToggle) set = 'basis-[56px]'

    return set
  }

  const setLogoClass = (): string => {
    let set = 'py-2 px-4'

    if (isToggle) set = 'justify-center p-0'

    return set
  }

  return (
    <aside id="layout:sidebar" className={`${setToggle()} overflow-hidden border-r border-base-300 border-solid`}>
      <div id="box:logo" className={`flex items-center h-16 ${setLogoClass()}`}>
        <a className="text-2xl font-bold">
          {(!isToggle) ? (
            <span>
              <span className="text-primary">ROBERT</span><span className="text-info">PLATE</span>
            </span>
          ) : (
            <span>
              <span className="text-primary">R</span><span className="text-info">P</span>
            </span>
          )}
        </a>
      </div>
      <ul className="w-[215px] max-h-[calc(100vh-50px)] overflow-y-auto">
        {listMenus.map((item, itemIndex) => (
          <AuthSidebarMenu key={itemIndex} isFirst={true} isToggle={isToggle} menu={item} index={itemIndex} />
        ))}
      </ul>
    </aside>
  )
}

export default AuthSidebar
