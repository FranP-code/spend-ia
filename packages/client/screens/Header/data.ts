import { SPEND_SCREEN_ID, SPEND_SCREEN_NAME } from 'utils/constants';
import { type Tab } from '../../lib/types';

export const tabs: Tab[] = [
  {
    id: 'tab-1',
    title: 'Tab 1',
  },
  {
    id: SPEND_SCREEN_ID,
    title: SPEND_SCREEN_NAME,
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
  },
];
