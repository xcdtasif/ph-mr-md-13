export default function InProgressTicket({ ticket, handleResolved }) {
  const { id, title } = ticket;
  return (
    <div>
      {/* in-progress ticket */}
      <div className="bg-white p-4 my-4 rounded-2xl">
        <h2 className="font-semibold truncate">{title}</h2>
        <button
          className="btn bg-green-600 text-white w-full mt-2"
          onClick={() => handleResolved(id)}
        >
          Mark as Resolved
        </button>
      </div>
    </div>
  );
}
