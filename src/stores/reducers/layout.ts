import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

interface LayoutState {
  userId?: string,
  userName?: string
  userEmail?: string,
  userRole?: string,
  userPhone?: string | number,
  pageBreadcrumbs?: {
    href: string,
    label: string,
    icon?: string
  }[]
}

const initialState: LayoutState = {
  userId: '',
  userName: 'Robert Tanjung AH',
  userEmail: '',
  userRole: '',
  userPhone: '',
  pageBreadcrumbs: []
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    onChangeLayout: (state, action: PayloadAction<LayoutState>) => {
      const { payload } = action

      if (payload.userId) state.userId = payload.userId
      if (payload.userName) state.userName = payload.userName
      if (payload.userEmail) state.userEmail = payload.userEmail
      if (payload.userRole) state.userRole = payload.userRole
      if (payload.userPhone) state.userPhone = payload.userPhone
    }
  }
})

export const { onChangeLayout } = layoutSlice.actions
export default layoutSlice.reducer
