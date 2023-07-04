/* eslint-disable no-empty-pattern */
import React from 'react';
import styled from 'styled-components';
import { useAppStore } from '@/lib/storage';
import { type Theme } from '@/lib/theme';
import { tabs } from './data';

export const Header = (): JSX.Element => {
  const tab = useAppStore((state) => state.tab);
  const setTab = useAppStore((state) => state.setTab);
  return (
    <TabsContainer>
      {tabs.map((tabData) => (
        <StyledTab
          key={tabData.id}
          active={tab.id === tabData.id}
          onClick={() => {
            setTab(tabData);
          }}
        >
          <TabText>{tabData.title}</TabText>
        </StyledTab>
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
`;

const StyledTab = styled.div<{
  active: boolean;
  theme: Theme;
}>`
  background: ${({ active, theme }) =>
    active ? theme.colors.complementary : theme.colors.secondary};
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

const TabText = styled.h3<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.textColor.primary};
`;
