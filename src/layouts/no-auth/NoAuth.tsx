import type { FC, ReactNode } from 'react';

import useNoAuth from './hooks/useNoAuth';
import dynamic from 'next/dynamic';

const DynamicLayout = dynamic(() => import('../Layout'));

const AuthNoLayout: FC<{ children: ReactNode }> = ({ children }) => {
  useNoAuth();

  return (
    <DynamicLayout>
      <main id="section:main">
        <section>{children}</section>
      </main>
    </DynamicLayout>
  );
};

export default AuthNoLayout;
