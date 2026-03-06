export default function InProgressTicket({ ticket, handleResolved }) {
  const { id, title } = ticket;

  return (
    <div>
      {/* in-progress ticket */}
      <div className="bg-white p-4 my-4 rounded-2xl">
        <h2 className="font-semibold">{title}</h2>
        <button className="btn w-full" onClick={() => handleResolved(id)}>
          Mark as Resolved
        </button>
      </div>
    </div>
  );
}
