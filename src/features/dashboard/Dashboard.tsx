import { useEffect, useCallback } from 'react';
import { useAppDispatch } from '@/hooks/useStore';
import { onChangeApp } from '@/stores/reducers/app';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  // group: setup
  const setupBreadcrumbs = useCallback((): void => {
    dispatch(onChangeApp({ pageBreadcrumbs: [{ href: '#', label: 'Dashboard', icon: 'HomeIcon' }] }));
  }, [dispatch]);

  const setup = useCallback((): void => {
    setupBreadcrumbs();
  }, [setupBreadcrumbs]);

  // group: mount
  useEffect(() => {
    setup();
  }, [setup]);

  return <section>HALO DASHBOARD</section>;
};

export default Dashboard;
