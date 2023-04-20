import type { FC } from 'react';

import AuthSidebarMenu from './SidebarMenu';

// mocks
import listMenus from '@/mocks/list-menu';

const AuthSidebar: FC<{ isToggle: boolean }> = ({ isToggle }) => {
  // group: set
  const setToggle = (): string => {
    let set = 'w-0 md:w-[250px]';

    if (isToggle) set = 'w-[215px] md:w-[56px]';

    return set;
  };

  const setLogoClass = (): string => {
    let set = 'md:py-2 md:px-4';

    if (isToggle) set = 'md:justify-center md:p-0';

    return set;
  };

  return (
    <aside
      id="layout:sidebar"
      className={`
        fixed
        top-0
        right-0
        h-screen
        overflow-hidden
        z-50
        bg-base-100
        border-l
        border-base-300
        border-solid
        md:relative
        md:right-auto
        md:left-0
        md:border-l-0
        md:border-r
        ${setToggle()}
      `}
    >
      <div id="box:logo" className={`flex items-center h-16 justify-center md:justify-normal ${setLogoClass()}`}>
        <a className="text-2xl font-bold">
          <div id="logo:md" className="hidden md:block">
            {!isToggle ? (
              <span>
                <span className="text-primary">ROBERT</span>
                <span className="text-info">PLATE</span>
              </span>
            ) : (
              <span>
                <span className="text-primary">R</span>
                <span className="text-info">P</span>
              </span>
            )}
          </div>
          <div id="logo:sm" className="md:hidden">
            <span>
              <span className="text-primary">ROBERT</span>
              <span className="text-info">PLATE</span>
            </span>
          </div>
        </a>
      </div>
      <ul className="w-[215px] max-h-[calc(100vh-50px)] overflow-y-auto">
        {listMenus.map((item, itemIndex) => (
          <AuthSidebarMenu key={itemIndex} isFirst={true} isToggle={isToggle} menu={item} index={itemIndex} />
        ))}
      </ul>
    </aside>
  );
};

export default AuthSidebar;
