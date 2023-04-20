import type { FC, ReactNode } from 'react';

import { useEffect, useCallback } from 'react';
import { useAppDispatch } from '@/hooks/useStore';
import { onChangeApp } from '@/stores/reducers/app';

import useTheme from './hooks/useTheme';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();

  // group: hook
  const { stateTheme } = useTheme();

  // group: setup
  const setupResponsive = useCallback((): void => {
    let set = 'xs';

    if (window.screen.availWidth >= 320) set = 'xs';
    if (window.screen.availWidth >= 640) set = 'sm';
    if (window.screen.availWidth >= 768) set = 'md';
    if (window.screen.availWidth >= 1026) set = 'lg';
    if (window.screen.availWidth >= 1280) set = 'xl';
    if (window.screen.availWidth >= 1536) set = '2xl';

    dispatch(onChangeApp({ pageResponsive: set }));
  }, [dispatch]);

  // group: mount
  useEffect(() => {
    setupResponsive();
  }, [setupResponsive]);

  return (
    <div data-theme={stateTheme} className="bg-base-100 font-oswald text-base-content">
      {children}
    </div>
  );
};

export default Layout;
