import React from 'react';
import Chart from 'react-google-charts';
import styled, { useTheme } from 'styled-components';
import { type Theme } from '@/lib/theme';
import { type PieCircleData } from '@/lib/types';
import { capitalize } from '@/lib/utils';

export const PieCircle = (props: { pieCircleData: PieCircleData }): JSX.Element => {
  const { pieCircleData } = props;
  const theme = useTheme() as Theme;
  const { colors } = theme;
  const height = '400px';
  const [data, legendData, chartColors] = [
    pieCircleData.map(([[label, value]]) => [capitalize(label), parseFloat(value.toFixed(2))]),
    pieCircleData.sort(([[, a]], [[, b]]) => b - a).map(([, item]) => item),
    pieCircleData.map(([, { backgroundColor }]) => backgroundColor),
  ];
  return (
    <PieCircleContainer>
      <ChartContainer height={height}>
        <StyledChart
          chartType="PieChart"
          data={[['X', 'Y'], ...data]}
          height={height}
          options={{
            backgroundColor: colors.primary,
            colors: chartColors,
            legend: 'none',
            pieHole: 0.4,
          }}
          width={'100%'}
        />
      </ChartContainer>
      <LegendContainer>
        {legendData.map(({ backgroundColor, label }, index) => (
          <LegendItem key={`${index as number}-label`}>
            <LegendColor color={backgroundColor} />
            <LegendLabel>{label}</LegendLabel>
          </LegendItem>
        ))}
      </LegendContainer>
    </PieCircleContainer>
  );
};

const ChartContainer = styled.div<{ height: string }>`
  height: ${({ height }) => height};
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LegendColor = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  border: 1px solid #fff;
  border-radius: 6px;
  height: 25px;
  max-width: 200px;
  min-width: 50px;
`;

const LegendItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const LegendLabel = styled.span<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.textColor.primary};
  font-weight: 500;
  margin-top: 3px;
  text-transform: capitalize;
`;

const PieCircleContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledChart = styled(Chart)`
  background: 'none';
`;
