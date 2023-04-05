/* eslint-disable no-empty-pattern */
import React from 'react';
import styled from 'styled-components';
import { useAppStore } from '@/lib/storage';
import { tabs } from './data';

export const Header = (): JSX.Element => {
  const tab = useAppStore((state) => state.tab);
  const setTab = useAppStore((state) => state.setTab);
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
  background: ${({ active }) => (active ? '#443C68' : '#635985')};
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
