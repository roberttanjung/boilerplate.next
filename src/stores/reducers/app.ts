import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  pageBreadcrumbs?: {
    href: string;
    label: string;
    icon?: string;
  }[];
  pageResponsive?: string;
}

const initialState: AppState = {
  pageBreadcrumbs: [],
  pageResponsive: 'md',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onChangeApp: (state, action: PayloadAction<AppState>) => {
      const { payload } = action;

      if (payload.pageBreadcrumbs) state.pageBreadcrumbs = payload.pageBreadcrumbs;
      if (payload.pageResponsive) state.pageResponsive = payload.pageResponsive;
    },
  },
});

export const { onChangeApp } = appSlice.actions;
export default appSlice.reducer;
