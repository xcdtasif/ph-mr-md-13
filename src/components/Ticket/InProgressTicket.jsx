export default function InProgressTicket({ ticket }) {
  const { title } = ticket;

  return (
    <div>
      {/* in-progress ticket */}
      <div className="bg-white p-8 my-8 rounded-2xl">
        <span className="flex justify-between my-4">
          <h2 className="font-semibold">{title}</h2>
        </span>
      </div>
    </div>
  );
}
