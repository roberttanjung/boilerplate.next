import type { FC, ReactNode } from 'react';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import useAuth from './hooks/useAuth';
import useSidebarToggle from './hooks/useSidebarToggle';

const DynamicLayout = dynamic(() => import('../Layout'));
const DynamicHeader = dynamic(() => import('./components/Header'));
const DynamicSidebar = dynamic(() => import('./components/Sidebar'));
const DynamicBreadcrumbs = dynamic(() => import('./components/Breadcrumbs'));

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  useAuth();

  // group: var
  const { pathname } = useRouter();

  // group: hook
  const { stateIsToggle, onSidebarToggle, onSidebarClose } = useSidebarToggle();

  // group: setup
  const setupMain = () => {
    const getElHeader = document.getElementById('section:header');
    const getElMain = document.getElementById('section:main');

    if (getElHeader && getElMain) {
      getElMain.style.maxHeight = `${window.screen.height - getElHeader.offsetHeight}px`;
    }
  };

  // group: mount
  useEffect(() => {
    setupMain();
  }, []);
  useEffect(() => {
    onSidebarClose();
  }, [onSidebarClose, pathname]);

  return (
    <DynamicLayout>
      <section className="flex flex-nowrap h-screen w-screen">
        <DynamicSidebar isToggle={stateIsToggle} />
        <section className="basis-full">
          <DynamicHeader isToggle={stateIsToggle} onSidebar={onSidebarToggle} />
          <main id="section:main" className="py-2 px-5 overflow-y-auto md:px-10">
            <DynamicBreadcrumbs />
            <section className="pt-2">{children}</section>
          </main>
        </section>
      </section>
    </DynamicLayout>
  );
};

export default AuthLayout;
