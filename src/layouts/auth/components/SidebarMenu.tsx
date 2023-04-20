import type { FC } from 'react';
import type { RootState } from '@/stores';
import type ListMenuType from '@/types/mocks/list-menu.type';

import { useRouter } from 'next/router';
import isEmpty from 'is-empty';
import { useAppSelector } from '@/hooks/useStore';
import IconSolid from '@/icons/IconSolid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const AuthSidebarMenu: FC<{
  isFirst: boolean;
  isToggle: boolean;
  menu: ListMenuType;
  index?: number;
}> = ({ isFirst, isToggle, menu, index }) => {
  const { pathname, locale, push: redirectTo } = useRouter();
  const deviceMobile = ['xs', 'sm'];

  // group: selector
  const { pageResponsive } = useAppSelector((state: RootState) => state.app);

  // group: set
  const setHighlight = (): string => {
    let set = '';
    let count = 0;

    if (pathname === menu.path) count += 1;

    if (menu.highlights && !isEmpty(menu.highlights) && menu.highlights.indexOf(pathname) > -1) {
      count += 1;
    }

    if (count > 0) set = 'bg-primary text-base-100';

    return set;
  };

  // group: action
  const onHover = (event: any): void => {
    if (!isEmpty(menu.children)) {
      const getElMenu = document.getElementById(`menu-${menu.id}`);
      const getElChildren = document.getElementById(`menu-children-${menu.id}`);
      let widthToggle = !isToggle ? 0 : 165;

      if (!isFirst) widthToggle = 0;

      if (getElMenu && getElChildren) {
        const rectMenu = getElMenu.getBoundingClientRect();

        if (!deviceMobile.includes(pageResponsive!)) {
          getElChildren.style.top = `${rectMenu.top}px`;
          getElChildren.style.left = `${getElMenu.offsetWidth + rectMenu.left - widthToggle}px`;
          getElChildren.style.display = `block`;
        }
      }
    }
  };

  const onBlur = (): void => {
    if (!isEmpty(menu.children)) {
      const getElChildren = document.getElementById(`menu-children-${menu.id}`);

      if (getElChildren) {
        if (!deviceMobile.includes(pageResponsive!)) {
          getElChildren.style.display = `none`;
        }
      }
    }
  };

  const onRedirect = (): void | null => {
    if (menu.children && !isEmpty(menu.children)) return;

    redirectTo(menu.path, menu.path, { locale: locale });
  };

  return (
    <li id={`menu-${menu.id}`} onMouseEnter={onHover} onMouseLeave={onBlur}>
      <a
        title={menu.label[locale!]}
        className={`
          flex
          flex-nowrap
          py-3
          px-4
          gap-4
          ${setHighlight()}
          hover:bg-base-200
          hover:text-base-content
        `}
        role="presentation"
        onClick={onRedirect}
      >
        {menu.icon && (
          <span className="flex-none">
            <IconSolid icon={menu.icon} className="h-5 w-5" />
          </span>
        )}
        <span className="basis-full">{menu.label[locale!]}</span>
        {!isEmpty(menu.children) && (
          <span>
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        )}
      </a>
      {!isEmpty(menu.children) && (
        <ul id={`menu-children-${menu.id}`} className="hidden fixed pl-0 z-50 bg-base-100 border border-base-300 border-solid">
          {menu.children?.map((item, itemIndex) => (
            <AuthSidebarMenu key={itemIndex} isFirst={false} isToggle={isToggle} menu={item} index={itemIndex} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default AuthSidebarMenu;
