import type { FC } from 'react';
import type { RootState } from '@/stores';

import { useRouter } from 'next/router';
import { useAppSelector } from '@/hooks/useStore';

import Link from 'next/link';

import IconSolid from '@/icons/IconSolid';

const AuthBreadcrumb: FC<{
  item: {
    href: string;
    label: string;
    icon?: string;
  };
  index: number;
}> = ({ item, index }) => {
  const { locale } = useRouter();

  return (
    <li key={index}>
      <Link href={item.href} locale={locale}>
        {item.icon && <IconSolid icon={item.icon} className="h-4 w-4 mr-2 stroke-current" />}
        {item.label}
      </Link>
    </li>
  );
};

const AuthBreadcrumbs = () => {
  // group: selector
  const { pageBreadcrumbs } = useAppSelector((state: RootState) => state.app);

  return (
    <div id="section:breadcrumbs" className="text-sm breadcrumbs">
      <ul>{pageBreadcrumbs && pageBreadcrumbs.map((item, itemIndex) => <AuthBreadcrumb key={itemIndex} item={item} index={itemIndex} />)}</ul>
    </div>
  );
};

export default AuthBreadcrumbs;
