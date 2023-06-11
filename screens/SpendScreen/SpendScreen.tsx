import React from 'react';
import styled from 'styled-components';
import { PieCircle } from '@/components';
import { type Theme } from '@/lib/theme';
import { useAppStore } from '@/lib/storage';
import { type PieCircleData } from '@/lib/types';

export const SpendScreen = (): JSX.Element => {
  const userSpendData = useAppStore((state) => state.userSpendData);
  const reducedUserData = userSpendData.reduce(
    (acc, value) =>
      acc.set(value.category.label, [...(acc.get(value.category.label) || []), value]),
    new Map(),
  );
  const combinedUserData: PieCircleData = [...reducedUserData.entries()].map(([key, values]) => [
    [key, values.reduce((acc: number, { value }: { value: number }) => acc + value, 0)],
    { backgroundColor: values[0].category.backgroundColor, label: values[0].category.label },
  ]);
  return (
    <SpendScreenContainer>
      <PieCircle pieCircleData={combinedUserData} />
    </SpendScreenContainer>
  );
};

const SpendScreenContainer = styled.div`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  height: 100%;
`;
