/* eslint-disable @typescript-eslint/ban-types */
import { create } from 'zustand';
import { SPEND_SCREEN_ID, SPEND_SCREEN_NAME } from 'utils/constants';
import { type UserSpendData, type Tab } from '@/lib/types';

interface appStore {
  setTab: (props: Tab) => void;
  setUserSpendData: (props: UserSpendData[]) => void;
  tab: Tab;
  userSpendData: UserSpendData[];
}

export const useAppStore = create<appStore>((set) => ({
  setTab: (props: Tab) => {
    set(() => ({ tab: props }));
  },
  setUserSpendData: (props: UserSpendData[]) => {
    set(() => ({ userSpendData: props }));
  },
  tab: { id: SPEND_SCREEN_ID, title: SPEND_SCREEN_NAME },
  userSpendData: [],
}));
