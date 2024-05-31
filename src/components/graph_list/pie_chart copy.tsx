"use client"
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { Data, Layout } from 'plotly.js';
import fetchDataFromOpenSearch from '@/lib/opensearch';

// Dynamic import for Plot component
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const indexPattern = 'klaster_alert1*';
const queryBody = {
  aggs: {
    2: {
      terms: {
        field: "Customer Name.keyword",
        order: {
          _count: "desc",
        },
        size: 10,
      },
    },
  },
  size: 0,
  stored_fields: ["*"],
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

const PieChart: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [layout, setLayout] = useState<Partial<Layout>>({
    width: 800,
    height: 400,
    title: 'Pie Plot 1',
  });

  // Fetch data from OpenSearch on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDataFromOpenSearch(indexPattern, queryBody);

        const buckets = result.aggregations["2"].buckets;
        const plotData: Data[] = [
          {
            type: 'pie',
            labels: buckets.map((bucket: any) => bucket.key),
            values: buckets.map((bucket: any) => bucket.doc_count),
          },
        ];

        setData(plotData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <Plot data={data} layout={layout} />;
};

export default PieChart;
