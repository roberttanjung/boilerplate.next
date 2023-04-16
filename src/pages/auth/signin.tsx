import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '@/pages/_app';

import dynamic from 'next/dynamic';
import NoAuthLayout from '@/layouts/no-auth/NoAuth';

const DynamicFeature = dynamic(() => import('@/features/auth/signin/AuthSignin'));

const Page: NextPageWithLayout = () => {
  return <DynamicFeature />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NoAuthLayout>{page}</NoAuthLayout>;
};

export default Page;
