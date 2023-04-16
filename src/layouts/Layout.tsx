import type { FC, ReactNode } from 'react';

import useTheme from './hooks/useTheme';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  // group: hook
  const { stateTheme } = useTheme();

  return (
    <div data-theme={stateTheme} className="bg-base-100 font-oswald text-base-content">
      {children}
    </div>
  );
};

export default Layout;
