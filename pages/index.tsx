import React, { useState } from 'react';
import { Header, SpendScreen } from '@/screens';
import { type Tab } from '@/lib/types';
import { APP_NAME, SPEND_SCREEN_ID, SPEND_SCREEN_NAME } from '@/lib/constants';

import Head from 'next/head';

const HeadIndex = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta property="og:title" content={APP_NAME} key="title" />
      </Head>
    </>
  );
};

const appRender = ({ tab }: { tab: Tab }): JSX.Element => {
  switch (tab.id) {
    case SPEND_SCREEN_ID:
      return <SpendScreen />;
    default:
      return <></>;
  }
};

function App(): JSX.Element {
  const [tab, setTab] = useState({ id: SPEND_SCREEN_ID, title: SPEND_SCREEN_NAME });

  return (
    <>
      <HeadIndex />
      <Header tab={tab} setTab={setTab} />
      {appRender({ tab })}
    </>
  );
}

export default App;
