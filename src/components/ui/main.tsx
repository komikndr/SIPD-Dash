import PieChart from "../graph_list/pie_chart";
import BarChart from "../graph_list/bar_chart";
import GraphContainer from "./graphContainer";

export default function Main() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      </div>

      {/* This is the main Body of the dashBoard */}
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <div className="flex-wrap gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <PieChart></PieChart>
            </div>
      </div>
    </main>
  );
}
