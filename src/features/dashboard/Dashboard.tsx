import { useEffect } from 'react'
import { useAppDispatch } from '@/hooks/useStore'
import { onChangeApp } from '@/stores/reducers/app'

const Dashboard = () => {
  const dispatch = useAppDispatch()

  // group: setup
  const setupBreadcrumbs = () => {
    dispatch(onChangeApp({ pageBreadcrumbs: [
      { href: '#', label: 'Dashboard', icon: 'HomeIcon' }
    ] }))
  }

  const setup = () => {
    setupBreadcrumbs()
  }

  // group: mount
  useEffect(() => {
    setup()
  }, [])

  return (
    <section>
      HALO DASHBOARD
    </section>
  )
}

export default Dashboard
