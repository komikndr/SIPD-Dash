import GraphContainer from "./graphContainer";

export default function Main() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      </div>

      {/* This is the main Body of the dashBoard */}
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <GraphContainer></GraphContainer>
        <div className="flex flex-col items-center gap-1 text-center">
        </div>
      </div>
    </main>
  );
}
