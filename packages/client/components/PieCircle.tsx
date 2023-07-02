import React from 'react';
import Chart from 'react-google-charts';
import styled, { useTheme } from 'styled-components';
import { type Theme } from '@/lib/theme';
import { type PieCircleData } from '@/lib/types';

export const PieCircle = (props: { pieCircleData: PieCircleData }): JSX.Element => {
  const { pieCircleData } = props;
  const theme = useTheme() as Theme;
  const { colors } = theme;
  const [data, legendData, chartColors] = [
    pieCircleData.map(([[label, value]]) => [label, parseFloat(value.toFixed(2))]),
    pieCircleData.map(([, item]) => item),
    pieCircleData.map(([, { backgroundColor }]) => backgroundColor),
  ];
  return (
    <PieCircleContainer>
      <StyledChart
        chartType="PieChart"
        data={[['X', 'Y'], ...data]}
        options={{
          backgroundColor: colors.primary,
          colors: chartColors,
          legend: 'none',
        }}
        width={'100%'}
        height={'400px'}
      />
      <div>
        {legendData.map(({ backgroundColor, label }) => (
          <>
            <div
              style={{
                backgroundColor,
                borderRadius: '100%',
                height: '20px',
                width: '20px',
              }}
            ></div>
            <span
              style={{
                color: '#fff',
              }}
            >
              {label}
            </span>
          </>
        ))}
      </div>
    </PieCircleContainer>
  );
};

const PieCircleContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledChart = styled(Chart)`
  background: 'none';
`;
