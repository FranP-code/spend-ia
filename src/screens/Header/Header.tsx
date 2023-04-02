import React, { useEffect } from 'react';
import { tabs } from './data';
import { type Tab } from './types';
import styled from 'styled-components';

export const Header = ({
  tab,
  setTab,
}: {
  tab: Tab | Record<string, unknown>;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}): JSX.Element => {
  useEffect(() => {
    setTab(tabs[0]);
  }, []);

  return (
    <TabsContainer>
      {tabs.map((tabData) => (
        <StyledTab
          active={tab.id === tabData.id}
          key={tabData.id}
          onClick={() => {
            setTab(tabData);
          }}
        >
          <h3>{tabData.title}</h3>
        </StyledTab>
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  background: #635985;
  display: flex;
`;

const StyledTab = styled.div<{
  active: boolean;
}>`
  background: ${({ active }) => (active ? '#443C68' : 'inherit')};
  padding: 12px 0px;
  text-align: center;
  transition: 0.2s ease-in-out all;
  user-select: none;
  width: 100%;
  :hover {
    filter: ${({ active }) => !active && 'brightness(90%)'};
    transition: 0.2s ease-in-out all;
  }
`;
