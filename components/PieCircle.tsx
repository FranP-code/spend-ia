import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export const PieCircle = (): JSX.Element => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <Pie
      data={{
        datasets: [
          {
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            data: [300, 50, 100],
            hoverOffset: 4,
            label: 'My First Dataset',
          },
        ],
        labels: ['Red', 'Blue', 'Yellow'],
      }}
    ></Pie>
  );
};
