import React, { useState } from 'react';
import { Header } from './screens';

function App(): JSX.Element {
  const [tab, setTab] = useState({});

  return (
    <div>
      <Header tab={tab} setTab={setTab} />
    </div>
  );
}

export default App;
