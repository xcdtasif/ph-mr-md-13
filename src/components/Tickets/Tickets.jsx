import ActiveTicket from "../Ticket/ActiveTicket";
import InProgressTicket from "../Ticket/InProgressTicket";
import ResolvedTicket from "../Ticket/ResolvedTicket";
export default function Tickets({ tickets, handleActive, handleResolved }) {
  return (
    <div>
      {/* tickets */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
        {/* active tickets */}
        <div>
          <h2 className="text-2xl font-semibold">Active Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tickets
              .filter((ticket) => ticket.status !== "resolved")
              .map((ticket) => (
                <ActiveTicket
                  key={ticket.id}
                  ticket={ticket}
                  handleActive={handleActive}
                />
              ))}
          </div>
        </div>
        {/* in-progress tickets, resolved tickets */}
        <div>
          {/* in-progress tickets */}
          <div>
            <h2 className="text-2xl font-semibold">In-Progress Tickets</h2>
            <div className="">
              {tickets.filter((t) => t.status === "inProgress").length === 0 ? (
                <p className="text-[#627382] my-8">
                  Select a Ticket to mark it as In-Progress.
                </p>
              ) : (
                tickets
                  .filter((ticket) => ticket.status === "inProgress")
                  .map((ticket) => (
                    <InProgressTicket
                      key={ticket.id}
                      ticket={ticket}
                      handleResolved={handleResolved}
                    />
                  ))
              )}
            </div>
          </div>
          {/* resolved tickets */}
          <div>
            <h2 className="text-2xl font-semibold">Resolved Tickets</h2>
            <div className="">
              {tickets.filter((t) => t.status === "resolved").length === 0 ? (
                <p className="text-[#627382] my-8">
                  No ticket marked as Resolved.
                </p>
              ) : (
                tickets
                  .filter((ticket) => ticket.status === "resolved")
                  .map((ticket) => (
                    <ResolvedTicket key={ticket.id} ticket={ticket} />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
