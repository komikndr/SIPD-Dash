"use client"

import dynamic from 'next/dynamic';
import React from 'react';
import { Data, Layout } from 'plotly.js';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const PieChart: React.FC = () => {
  const data: Data[] = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'red' },
    },
    {
      type: 'bar',
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
    },
  ];

  const layout: Partial<Layout> = {
    width: 800,
    height: 400,
    title: 'A Fancy Plot',
  };

  return <Plot data={data} layout={layout} />;
};

export default PieChart;
