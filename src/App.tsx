import React, { useState } from 'react';
import { Header, SpendScreen } from './screens';
import { type Tab } from './types';
import { SPEND_SCREEN_ID, SPEND_SCREEN_NAME } from './constants';

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
    <div>
      <Header tab={tab} setTab={setTab} />
      {appRender({ tab })}
    </div>
  );
}

export default App;
