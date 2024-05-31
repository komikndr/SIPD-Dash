"use client"
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';
import { Layout } from 'plotly.js';
import fetchDataFromOpenSearch from '@/lib/opensearch';

const index_pattern = 'klaster_alert1*';
const query = {
  aggs: {
    '2': {
      terms: {
        field: 'Customer Name.keyword',
        order: {
          _count: 'desc',
        },
        size: 10,
      },
    },
  },
  size: 0,
  stored_fields: ['*'],
  script_fields: {},
  docvalue_fields: [],
  _source: {
    excludes: [],
  },
  query: {
    bool: {
      must: [],
      filter: [
        {
          match_all: {},
        },
      ],
      should: [],
      must_not: [],
    },
  },
};

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

interface PieChartData {
  type: 'pie';
  labels: string[];
  values: number[];
}

interface PieChartProps {
  chartData: PieChartData[];
}

const PieChart: React.FC<PieChartProps> = ({ chartData }) => {
  // Layout settings
  const layout: Partial<Layout> = {
    width: 800,
    height: 400,
    title: 'Pie Chart',
  };

  return <Plot data={chartData} layout={layout} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const body = await fetchDataFromOpenSearch(index_pattern, query);

  let chartData: PieChartData[] = [];
  if (body && body.aggregations) {
    const data = body.aggregations['2'].buckets.map((bucket: any) => ({
      key: bucket.key,
      doc_count: bucket.doc_count,
    }));

    chartData = [
      {
        type: 'pie',
        labels: data.map((item: any) => item.key),
        values: data.map((item: any) => item.doc_count),
      },
    ];
  }

  return {
    props: {
      chartData,
    },
  };
};

export default PieChart;

