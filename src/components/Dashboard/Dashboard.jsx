import { useEffect, useState } from "react";
import Tickets from "../Tickets/Tickets";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  const handleActive = (id) => {
    const ticket = tickets.find((t) => t.id === id);

    if (ticket.status === "inProgress") {
      toast.warning("Already marked as In-Progress!");
      return;
    }

    setTickets(
      tickets.map((t) => (t.id === id ? { ...t, status: "inProgress" } : t)),
    );
    toast.success("Marked as In-Progress.");
  };

  const handleResolved = (id) => {
    setTickets(
      tickets.map((t) => (t.id === id ? { ...t, status: "resolved" } : t)),
    );
    toast.success("Marked as Resolved.");
  };

  return (
    <div className="bg-[#f5f5f5] text-black">
      {/* dashboard */}
      <div className="max-w-360 mx-auto gap-8 p-16">
        {/* ticket stats */}
        <div className="grid grid-cols-3 gap-8">
          {/* in-progress */}
          <div className="bg-white text-center my-8 p-16 rounded-2xl">
            <h2 className="text-xl">Open</h2>
            <p className="text-6xl font-semibold">
              {tickets.filter((t) => t.status === "open").length}
            </p>
          </div>

          {/* in-progress */}
          <div className="bg-white text-center my-8 p-16 rounded-2xl">
            <h2 className="text-xl">In-Progress</h2>
            <p className="text-6xl font-semibold">
              {tickets.filter((t) => t.status === "inProgress").length}
            </p>
          </div>

          {/* resolved */}
          <div className="bg-white text-center my-8 p-16 rounded-2xl">
            <h2 className="text-xl">Resolved</h2>
            <p className="text-6xl font-semibold">
              {tickets.filter((t) => t.status === "resolved").length}
            </p>
          </div>
        </div>

        <Tickets tickets={tickets} handleActive={handleActive} handleResolved={handleResolved} />
      </div>
    </div>
  );
}
