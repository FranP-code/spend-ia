/* eslint-disable @typescript-eslint/ban-types */
import { create } from 'zustand';
import { type Tab } from '@/lib/types';
import { SPEND_SCREEN_ID, SPEND_SCREEN_NAME } from '@/lib/constants';

interface appStore {
  tab: Tab;
  setTab: (props: Tab) => void;
}

export const useAppStore = create<appStore>((set) => ({
  setTab: (props: Tab) => {
    set(() => ({ tab: props }));
  },
  tab: { id: SPEND_SCREEN_ID, title: SPEND_SCREEN_NAME },
}));
