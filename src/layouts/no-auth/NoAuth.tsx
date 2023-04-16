import type { FC, ReactNode } from 'react';

import useNoAuth from './hooks/useNoAuth';
import dynamic from 'next/dynamic';

const DynamicLayout = dynamic(() => import('../Layout'));

const AuthNoLayout: FC<{ children: ReactNode }> = ({ children }) => {
  useNoAuth();

  return (
    <DynamicLayout>
      <main id="section:main" className="py-2 px-10 overflow-y-auto">
        <section className="pt-2">{children}</section>
      </main>
    </DynamicLayout>
  );
};

export default AuthNoLayout;
