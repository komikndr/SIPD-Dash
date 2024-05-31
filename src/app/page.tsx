import SideNav from "@/components/ui/sideNav"
import Header from "@/components/ui/header"
import Main from "@/components/ui/main"

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

import fetchDataFromOpenSearch from "@/lib/opensearch"
export default function Home() {
  fetchDataFromOpenSearch(indexPattern, queryBody);  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
      <SideNav />
      </div>

      <div className="flex flex-col">
        <Header />
        <Main />
      </div>
    </div>
  )
}
