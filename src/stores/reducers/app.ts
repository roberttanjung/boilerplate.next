import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  pageBreadcrumbs?: {
    href: string,
    label: string,
    icon?: string
  }[]
}

const initialState: AppState = {
  pageBreadcrumbs: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onChangeApp: (state, action: PayloadAction<AppState>) => {
      const { payload } = action

      if (payload.pageBreadcrumbs) state.pageBreadcrumbs = payload.pageBreadcrumbs
    }
  }
})

export const { onChangeApp } = appSlice.actions
export default appSlice.reducer
