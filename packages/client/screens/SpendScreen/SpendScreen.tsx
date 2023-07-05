import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PieCircle } from '@/components';
import { type Theme } from '@/lib/theme';
import { useAppStore } from '@/lib/storage';
import { type PieCircleData } from '@/lib/types';
import { trpc } from '../../trpc';

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
  useEffect(() => {
    trpc.userCreate
      .mutate({ email: 'abdfasfasdfasdc@gmail.com', name: 'ABC', password: '23eqwrqwerqwe4' })
      .then(() => {
        trpc.userList
          .query()
          .then((a) => {
            // eslint-disable-next-line no-console
            console.log(a);
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            console.log(e);
          });
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  }, []);
  return (
    <SpendScreenContainer>
      <PieCircle pieCircleData={combinedUserData} />
    </SpendScreenContainer>
  );
};

const SpendScreenContainer = styled.div<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
`;
