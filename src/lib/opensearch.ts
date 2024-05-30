import { Client } from "@opensearch-project/opensearch";
import dotenv from 'dotenv';

dotenv.config();

interface QueryBody {
  aggs: {
    [key: number]: {
      terms: {
        field: string;
        order: { [key: string]: string };
        size: number;
      };
    };
  };
  size: number;
  stored_fields: string[];
  script_fields: {};
  docvalue_fields: [];
  _source: { excludes: string[] };
  query: {
    bool: {
      must: [];
      filter: [{ match_all: {} }];
      should: [];
      must_not: [];
    };
  };
}

export default async function fetchDataFromOpenSearch(indexPattern: string, queryBody: QueryBody) {
  const host = "onyxmaster01-poc.onyx.id";
  const protocol = "https";
  const port = 9220;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  if (!username || !password) {
    throw new Error("Username or password not provided in environment variables");
  }

  const options = {
    node: `${protocol}://${host}:${port}`,
    auth: {
      username,
      password,
    },
    ssl: {
      rejectUnauthorized: false, // Ignore TLS/SSL certificate
    },
  };

  const opensearchClient = new Client(options);

  try {
    const { body } = await opensearchClient.search({
      index: indexPattern,
      body: queryBody,
    });
    console.log(body.aggregations["2"].buckets);
    return body;
  } catch (error) {
    console.error("Error fetching data from OpenSearch:", error);
    return null;
  }
}
