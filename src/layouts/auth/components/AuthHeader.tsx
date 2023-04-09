import type { FC } from 'react'
import type { RootState } from '@/stores'

import { useRouter } from 'next/router'
import i18n from '@/i18n'
import { useAppSelector } from '@/hooks/useStore'
import useTheme from '@/layouts/hooks/useTheme'
import {
  BellIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  Bars3Icon
} from '@heroicons/react/24/solid'

const AuthHeader: FC<{ onSidebar: any }> = ({ onSidebar }) => {
  const { locale } = useRouter()

  // group: selector
  const { userName } = useAppSelector((state: RootState) => state.layout)

  // group: hook
  const { stateTheme, onChangeTheme } = useTheme()

  return (
    <header id="section:header" className="flex justify-between items-center py-3 px-5 border-b border-base-300 border-solid">
      <div id="box:icon-toggle">
        <a
          title={i18n('menu.toggle', locale)}
          className="inline-block p-[2px] rounded"
          onClick={onSidebar}
        >
          <Bars3Icon className="h-6 w-6" />
        </a>
      </div>
      <div id="box:notif--theme--user" className="flex justify-between items-center">
        <div id="box:notif" className="mr-6">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary badge-xs" />
            <a className="inline-block" title={i18n('notifications', locale)}>
              <BellIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div id="box:theme" className="mr-6">
            {(stateTheme === 'bumblebee') && (
              <a className="inline-block" title={i18n('theme', locale)} onClick={() => onChangeTheme('dark')}>
                <SunIcon className="h-6 w-6" />
              </a>
            )}
            {(stateTheme === 'dark') && (
              <a className="inline-block" title={i18n('theme', locale)} onClick={() => onChangeTheme('bumblebee')}>
                <MoonIcon className="h-6 w-6" />
              </a>
            )}
        </div>
        <div id="box:user" className="dropdown dropdown-end">
          <a className="flex justify-center items-center" tabIndex={0}>
            <div id="user:name" className="pr-3 font-semibold md:hidden">{userName}</div>
            <div id="user:avatar" className="avatar">
              <div className="w-10 rounded" title={i18n('avatar', locale)}>
                <img src="https://img.koreatimes.co.kr/upload/newsV2/images/202112/658d86a0dd5c40228d9ad671cee649a3.jpg/dims/resize/740/optimize" />
              </div>
            </div>
            <div id="user:chevron" className="pl-3">
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </a>
          <ul tabIndex={0} className="dropdown-content menu w-40 p-2 bg-base-100 border border-base-300 border-solid">
            <li>
              <a>{i18n('profile', locale)}</a>
            </li>
            <li>
              <a>{i18n('setting', locale)}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default AuthHeader
