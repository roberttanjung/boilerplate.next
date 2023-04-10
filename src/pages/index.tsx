import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '@/pages/_app';

import dynamic from 'next/dynamic';
import AuthLayout from '@/layouts/auth/Auth';

const DynamicFeature = dynamic(() => import('@/features/dashboard/Dashboard'));

const Page: NextPageWithLayout = () => {
  return <DynamicFeature />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Page;
