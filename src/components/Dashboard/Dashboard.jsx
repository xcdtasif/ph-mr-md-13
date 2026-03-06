import { useEffect, useState } from "react";
import Tickets from "../Tickets/Tickets";
import BottomNav from "../BottomNav/BottomNav";
import { toast } from "react-toastify";
export default function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [mobileFilter, setMobileFilter] = useState("stats");
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
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
  // get filtered tickets (active tab shows open + in-progress)
  const filteredTickets = tickets.filter((t) =>
    mobileFilter === "open"
      ? t.status === "open" || t.status === "inProgress"
      : mobileFilter === "inProgress"
        ? t.status === "inProgress"
        : mobileFilter === "resolved"
          ? t.status === "resolved"
          : t.status !== "resolved",
  );
  // stat cards - mobile & tablet (stacked on mobile, 2 cols on tablet)
  const statCardsMobile = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {/* open - blue gradient */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white text-center p-6 rounded-2xl">
        <h2 className="text-lg">Open</h2>
        <p className="text-4xl font-semibold">
          {tickets.filter((t) => t.status === "open").length}
        </p>
      </div>
      {/* in-progress - yellow gradient */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white text-center p-6 rounded-2xl">
        <h2 className="text-lg">In-Progress</h2>
        <p className="text-4xl font-semibold">
          {tickets.filter((t) => t.status === "inProgress").length}
        </p>
      </div>
      {/* resolved - green gradient */}
      <div className="bg-gradient-to-r from-green-500 to-green-300 text-white text-center p-6 rounded-2xl md:col-span-2">
        <h2 className="text-lg">Resolved</h2>
        <p className="text-4xl font-semibold">
          {tickets.filter((t) => t.status === "resolved").length}
        </p>
      </div>
    </div>
  );
  // ticket list - mobile & tablet
  const ticketListMobile = (
    <div>
      {filteredTickets.length === 0 ? (
        <p className="text-[#627382] my-8">No tickets found.</p>
      ) : (
        <div className="space-y-4">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white p-4 rounded-2xl cursor-pointer"
              onClick={() => {
                if (
                  ticket.status === "open" ||
                  ticket.status === "inProgress"
                ) {
                  handleActive(ticket.id);
                }
              }}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-semibold truncate flex-1 mr-2">
                  {ticket.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ticket.status === "open"
                      ? "bg-blue-100 text-blue-600"
                      : ticket.status === "inProgress"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-green-100 text-green-600"
                  }`}
                >
                  {ticket.status === "open"
                    ? "Open"
                    : ticket.status === "inProgress"
                      ? "In-Progress"
                      : "Resolved"}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {ticket.description}
              </p>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>#{ticket.id}</span>
                <span>{ticket.customer}</span>
              </div>
              {(ticket.status === "open" || ticket.status === "inProgress") && (
                <p className="text-yellow-600 text-sm mt-2 text-center font-medium">
                  {ticket.status === "open"
                    ? "Tap to mark In-Progress"
                    : "Already In-Progress"}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
  return (
    <div className="bg-[#f5f5f5] text-black pb-20 lg:pb-0">
      {/* dashboard */}
      <div className="max-w-360 mx-auto gap-8 p-4 lg:p-16">
        {/* ticket stats - desktop (3 column) */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:my-8">
          {/* open - blue gradient */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-300 text-white text-center p-16 rounded-2xl">
            <h2 className="text-xl">Open</h2>
            <p className="text-6xl font-semibold">
              {tickets.filter((t) => t.status === "open").length}
            </p>
          </div>
          {/* in-progress - yellow gradient */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-white text-center p-16 rounded-2xl">
            <h2 className="text-xl">In-Progress</h2>
            <p className="text-6xl font-semibold">
              {tickets.filter((t) => t.status === "inProgress").length}
            </p>
          </div>
          {/* resolved - green gradient */}
          <div className="bg-gradient-to-r from-green-500 to-green-300 text-white text-center p-16 rounded-2xl">
            <h2 className="text-xl">Resolved</h2>
            <p className="text-6xl font-semibold">
              {tickets.filter((t) => t.status === "resolved").length}
            </p>
          </div>
        </div>
        {/* desktop tickets */}
        <div className="hidden lg:block">
          <Tickets
            tickets={tickets}
            handleActive={handleActive}
            handleResolved={handleResolved}
          />
        </div>
        {/* mobile & tablet view */}
        <div className="lg:hidden">
          <h2 className="text-xl font-semibold mb-4">
            {mobileFilter === "stats"
              ? "Stats"
              : mobileFilter === "inProgress"
                ? "In-Progress Tickets"
                : mobileFilter === "resolved"
                  ? "Resolved Tickets"
                  : "Active Tickets"}
          </h2>
          {mobileFilter === "stats" ? statCardsMobile : ticketListMobile}
        </div>
      </div>
      {/* mobile & tablet bottom nav - hidden on desktop */}
      <div className="lg:hidden">
        <BottomNav activeFilter={mobileFilter} setFilter={setMobileFilter} />
      </div>
    </div>
  );
}
