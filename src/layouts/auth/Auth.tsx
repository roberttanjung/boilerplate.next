import type { FC, ReactNode } from 'react';

import useAuth from './hooks/useAuth';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import useSidebarToggle from './hooks/useSidebarToggle';

const DynamicLayout = dynamic(() => import('../Layout'));
const DynamicHeader = dynamic(() => import('./components/AuthHeader'));
const DynamicSidebar = dynamic(() => import('./components/AuthSidebar'));
const DynamicBreadcrumbs = dynamic(() => import('./components/AuthBreadcrumbs'));

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  useAuth();

  const { stateIsToggle, onSidebarToggle } = useSidebarToggle();

  const setupMain = () => {
    const getElHeader = document.getElementById('section:header');
    const getElMain = document.getElementById('section:main');

    if (getElHeader && getElMain) {
      getElMain.style.maxHeight = `${window.screen.height - getElHeader.offsetHeight}px`;
    }
  };

  useEffect(() => {
    setupMain();
  }, []);

  return (
    <DynamicLayout>
      <section className="flex flex-nowrap h-screen w-screen">
        <DynamicSidebar isToggle={stateIsToggle} />
        <section className="basis-full">
          <DynamicHeader onSidebar={onSidebarToggle} />
          <main id="section:main" className="py-2 px-10 overflow-y-auto">
            <DynamicBreadcrumbs />
            <section className="pt-2">{children}</section>
          </main>
        </section>
      </section>
    </DynamicLayout>
  );
};

export default AuthLayout;
