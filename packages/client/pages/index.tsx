import React from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { Header, SpendScreen } from '@/screens';
import { type Tab } from '@/lib/types';
import { APP_NAME, SPEND_SCREEN_ID } from '@/lib/constants';
import { useAppStore } from '@/lib/storage';
import theme from '@/lib/theme';

const HeadIndex = (): JSX.Element => (
  <>
    <Head>
      <title>{APP_NAME}</title>
      <meta key="title" content={APP_NAME} property="og:title" />
    </Head>
  </>
);

const appRender = ({ tab }: { tab: Tab }): JSX.Element => {
  switch (tab.id) {
    case SPEND_SCREEN_ID:
      return <SpendScreen />;
    default:
      return <></>;
  }
};

function App(): JSX.Element {
  const tab = useAppStore((state) => state.tab);
  const setUserSpendData = useAppStore((state) => state.setUserSpendData);
  setUserSpendData([
    {
      category: { backgroundColor: 'rgb(99, 128, 255)', label: 'invest' },
      currency: {
        id: 'usd',
        label: 'usd',
      },
      date: new Date(),
      value: 124,
    },
    {
      category: { backgroundColor: 'rgb(99, 128, 255)', label: 'invest' },
      currency: {
        id: 'usd',
        label: 'usd',
      },
      date: new Date(),
      value: 124.1,
    },
    {
      category: { backgroundColor: 'rgb(54, 162, 235)', label: 'school' },
      currency: {
        id: 'usd',
        label: 'usd',
      },
      date: new Date(),
      value: 124.43335,
    },
    {
      category: { backgroundColor: 'rgb(145, 86, 255)', label: 'party' },
      currency: {
        id: 'usd',
        label: 'usd',
      },
      date: new Date(),
      value: 1242,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <HeadIndex />
      <Header />
      <Body>{appRender({ tab })}</Body>
    </ThemeProvider>
  );
}

const Body = styled.div`
  height: 100%;
`;

export default App;
