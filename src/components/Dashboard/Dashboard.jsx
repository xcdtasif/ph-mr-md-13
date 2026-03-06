import Tickets from "../Tickets/Tickets";

export default function Dashboard() {
  return (
    <div className="bg-[#f5f5f5] text-black">
      {/* dashboard */}
      <div className="max-w-360 mx-auto gap-8 px-16">
        {/* ticket stats */}
        <div className="grid grid-cols-2 gap-8">
          {/* in-progress */}
          <div className="bg-white text-center my-8 p-16 rounded-2xl">
            <h2 className="text-xl">In-Progress</h2>
            <p className="text-6xl font-semibold">0</p>
          </div>

          {/* resolved */}
          <div className="bg-white text-center my-8 p-16 rounded-2xl">
            <h2 className="text-xl">Resolved</h2>
            <p className="text-6xl font-semibold">0</p>
          </div>
        </div>

        <Tickets />
      </div>
    </div>
  );
}
