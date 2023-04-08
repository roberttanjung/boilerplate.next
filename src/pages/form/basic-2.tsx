import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'

import AuthLayout from '@/layouts/auth/Auth'

const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default Page