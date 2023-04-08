import type ListMenuType from '@/types/mocks/list-menu.type'

const listMenus: ListMenuType[] = [
  {
    id: 'dashboard',
    path: '/',
    label: {
      'en-US': 'Dashboard',
      'id-ID': 'Beranda'
    },
    icon: 'HomeIcon'
  },
  {
    id: 'form',
    path: '/form',
    label: {
      'en-US': 'Form',
      'id-ID': 'Form'
    },
    icon: 'DocumentTextIcon',
    highlights: ['/form/basic', '/form/basic-2', '/form/advance'],
    children: [
      {
        id: 'form-basic',
        path: '/form/basic',
        label: {
          'en-US': 'Basic Input',
          'id-ID': 'Input Dasar'
        },
        highlights: ['/form/basic-2'],
        children: [
          {
            id: 'form-basic-2',
            path: '/form/basic-2',
            label: {
              'en-US': 'Basic Input',
              'id-ID': 'Input Dasar'
            }
          }
        ]
      },
      {
        id: 'form-advance',
        path: '/form/advance',
        label: {
          'en-US': 'Advance Input',
          'id-ID': 'Input Lanjutan'
        }
      }
    ]
  }
]

export default listMenus