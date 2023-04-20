import type { FC } from 'react';

import AuthSidebarMenu from './SidebarMenu';

// mocks
import listMenus from '@/mocks/list-menu';

const AuthSidebar: FC<{ isToggle: boolean }> = ({ isToggle }) => {
  // group: set
  const setToggle = (): string => {
    let set = 'basis-0 md:basis-[250px]';

    if (isToggle) set = 'basis-[300px] md:basis-[56px]';

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
        left-0
        h-screen
        overflow-hidden
        z-50
        bg-base-100
        border-r
        border-base-300
        border-solid
        md:relative
        ${setToggle()}
      `}
    >
      <div id="box:logo" className={`flex items-center h-16 justify-center md:justify-normal ${setLogoClass()}`}>
        <a className="text-2xl font-bold">
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
